// Split data decoding helper
// Decodes compressed split data from URL parameters

/**
 * Decompress LZFSE data using fflate library (compatible format)
 * @param {Uint8Array} compressedData - The compressed data
 * @returns {Uint8Array} The decompressed data
 */
async function decompressLZFSE(compressedData) {
  // LZFSE is Apple-specific and not supported in browsers
  // Fallback: assume data is just deflate compressed
  const { inflateRaw } = await import('https://cdn.skypack.dev/fflate');
  try {
    return inflateRaw(compressedData);
  } catch (error) {
    console.error('Decompression failed:', error);
    // If decompression fails, try treating as uncompressed
    return compressedData;
  }
}

/**
 * Decode URL-safe base64 string
 * @param {string} base64 - URL-safe base64 string
 * @returns {Uint8Array} Decoded bytes
 */
function decodeBase64URL(base64) {
  // Convert URL-safe base64 back to standard base64
  let standard = base64
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  // Add padding if needed
  while (standard.length % 4 !== 0) {
    standard += '=';
  }

  // Decode base64
  const binaryString = atob(standard);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

/**
 * Fetch a shared split from URL parameter
 * @param {string} shareId - The split UUID (not used currently, for future CloudKit integration)
 * @param {string} compressedData - URL-safe base64 encoded compressed split data
 * @returns {Promise<Object>} The split data
 */
export async function fetchSharedSplit(shareId, compressedData) {
  try {
    console.log('Decoding split data from URL parameter');

    if (!compressedData) {
      throw new Error('No split data provided in URL');
    }

    // Decode the URL-safe base64
    const compressed = decodeBase64URL(compressedData);
    console.log('Decoded base64, compressed size:', compressed.length);

    // Decompress the data
    const decompressed = await decompressLZFSE(compressed);
    console.log('Decompressed size:', decompressed.length);

    // Convert bytes to string
    const jsonString = new TextDecoder().decode(decompressed);

    // Parse JSON
    const split = JSON.parse(jsonString);
    console.log('Successfully parsed split:', split.name);

    return split;

  } catch (error) {
    console.error('Error decoding split data:', error);
    throw new Error(`Failed to decode split data: ${error.message}`);
  }
}

/**
 * Get split metadata (name, days, exercises count) without downloading full data
 * @param {string} shareId - The split UUID
 * @returns {Promise<Object>} Metadata object
 */
export async function fetchSplitMetadata(shareId) {
  try {
    const recordName = `shared_${shareId}`;

    const response = await fetch(
      `https://api.apple-cloudkit.com/database/1/${CONTAINER_ID}/${ENVIRONMENT}/${DATABASE}/records/lookup`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              recordName: recordName,
              desiredKeys: ['splitName', 'splitDays', 'totalExercises', 'createdAt']
            }
          ]
        })
      }
    );

    if (!response.ok) {
      throw new Error(`CloudKit API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.records && data.records.length > 0) {
      const record = data.records[0];

      if (record.serverErrorCode) {
        throw new Error(`CloudKit error: ${record.reason || 'Record not found'}`);
      }

      const fields = record.fields;
      return {
        name: fields.splitName?.value || 'Unknown Split',
        days: fields.splitDays?.value || 0,
        totalExercises: fields.totalExercises?.value || 0,
        createdAt: fields.createdAt?.value || null
      };
    }

    throw new Error('No metadata found');
  } catch (error) {
    console.error('Error fetching split metadata:', error);
    throw error;
  }
}
