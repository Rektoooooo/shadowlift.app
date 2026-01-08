import { useEffect, useRef } from 'react';

export default function StarsBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];
    let redParticles = [];
    let shootingStars = [];
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
      initRedParticles();
    };

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 40;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 40;
    };

    const initStars = () => {
      stars = [];
      // More stars, more visible
      const numStars = Math.floor((canvas.width * canvas.height) / 4000);

      for (let i = 0; i < numStars; i++) {
        const size = Math.random();
        stars.push({
          baseX: Math.random() * canvas.width,
          baseY: Math.random() * canvas.height,
          x: 0,
          y: 0,
          // Bigger stars
          radius: size < 0.7 ? Math.random() * 1 + 0.5 : Math.random() * 2 + 1,
          opacity: Math.random() * 0.7 + 0.3,
          twinkleSpeed: Math.random() * 0.015 + 0.005,
          direction: Math.random() > 0.5 ? 1 : -1,
          depth: Math.random() * 0.5 + 0.5,
          // Some stars are brighter
          isBright: size > 0.85
        });
      }
    };

    const initRedParticles = () => {
      redParticles = [];
      // More red particles
      const numParticles = Math.floor((canvas.width * canvas.height) / 40000);

      for (let i = 0; i < numParticles; i++) {
        redParticles.push({
          baseX: Math.random() * canvas.width,
          baseY: Math.random() * canvas.height,
          x: 0,
          y: 0,
          radius: Math.random() * 3 + 1.5,
          opacity: Math.random() * 0.5 + 0.2,
          pulseSpeed: Math.random() * 0.015 + 0.008,
          pulsePhase: Math.random() * Math.PI * 2,
          depth: Math.random() * 0.3 + 0.7,
          driftX: (Math.random() - 0.5) * 0.4,
          driftY: (Math.random() - 0.5) * 0.4
        });
      }
    };

    const spawnShootingStar = () => {
      if (Math.random() < 0.003 && shootingStars.length < 3) {
        const startX = Math.random() * canvas.width;
        const startY = Math.random() * canvas.height * 0.5;
        shootingStars.push({
          x: startX,
          y: startY,
          length: Math.random() * 100 + 80,
          speed: Math.random() * 15 + 10,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
          opacity: 1,
          trail: []
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse movement
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Draw stars
      stars.forEach(star => {
        star.x = star.baseX + mouseX * star.depth;
        star.y = star.baseY + mouseY * star.depth;

        star.opacity += star.twinkleSpeed * star.direction;
        if (star.opacity <= 0.2 || star.opacity >= 1) {
          star.direction *= -1;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

        if (star.isBright) {
          // Brighter stars with glow
          const gradient = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.radius * 3
          );
          gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
          gradient.addColorStop(0.5, `rgba(255, 255, 255, ${star.opacity * 0.3})`);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.fillStyle = gradient;
          ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        }
        ctx.fill();
      });

      // Draw red accent particles
      const time = Date.now() * 0.001;
      redParticles.forEach(particle => {
        particle.x = particle.baseX + mouseX * particle.depth + Math.sin(time + particle.pulsePhase) * 25;
        particle.y = particle.baseY + mouseY * particle.depth + Math.cos(time + particle.pulsePhase) * 25;

        // Slow drift
        particle.baseX += particle.driftX;
        particle.baseY += particle.driftY;

        // Wrap around screen
        if (particle.baseX < -50) particle.baseX = canvas.width + 50;
        if (particle.baseX > canvas.width + 50) particle.baseX = -50;
        if (particle.baseY < -50) particle.baseY = canvas.height + 50;
        if (particle.baseY > canvas.height + 50) particle.baseY = -50;

        const pulseOpacity = particle.opacity * (0.6 + 0.4 * Math.sin(time * particle.pulseSpeed * 100 + particle.pulsePhase));

        // Larger glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 6
        );
        gradient.addColorStop(0, `rgba(254, 38, 23, ${pulseOpacity})`);
        gradient.addColorStop(0.3, `rgba(254, 38, 23, ${pulseOpacity * 0.5})`);
        gradient.addColorStop(0.6, `rgba(254, 38, 23, ${pulseOpacity * 0.2})`);
        gradient.addColorStop(1, 'rgba(254, 38, 23, 0)');

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * 6, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Brighter core
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 150, 130, ${pulseOpacity * 1.5})`;
        ctx.fill();
      });

      // Spawn and draw shooting stars
      spawnShootingStar();
      shootingStars = shootingStars.filter(star => {
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.opacity -= 0.015;

        if (star.opacity <= 0) return false;

        // Draw shooting star
        const tailX = star.x - Math.cos(star.angle) * star.length;
        const tailY = star.y - Math.sin(star.angle) * star.length;

        const gradient = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(0.7, `rgba(255, 255, 255, ${star.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${star.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(star.x, star.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Bright head
        ctx.beginPath();
        ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        return star.x < canvas.width + 100 && star.y < canvas.height + 100;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: 'linear-gradient(180deg, #020202 0%, #050505 30%, #080808 70%, #020202 100%)',
        willChange: 'transform',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    />
  );
}
