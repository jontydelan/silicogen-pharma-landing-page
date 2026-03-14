import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export const MicroscopicAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
      alpha: number;
      pulseSpeed: number;
      pulseAngle: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 3 + 1;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.pulseSpeed = Math.random() * 0.05 + 0.01;
        this.pulseAngle = Math.random() * Math.PI * 2;
        
        // Cyan to Emerald gradient colors
        const colors = [
          'rgba(6, 182, 212, ', // Cyan
          'rgba(16, 185, 129, ', // Emerald
          'rgba(45, 212, 191, '  // Teal
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.pulseAngle += this.pulseSpeed;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const currentAlpha = this.alpha + Math.sin(this.pulseAngle) * 0.2;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color}${Math.max(0.1, currentAlpha)})`;
        ctx.fill();

        // Add a soft glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = `${this.color}0.5)`;
      }
    }

    const initParticles = () => {
      particles = [];
      const numParticles = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const opacity = 1 - distance / 120;
            ctx.strokeStyle = `rgba(45, 212, 191, ${opacity * 0.15})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });
      
      drawConnections();
      
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
