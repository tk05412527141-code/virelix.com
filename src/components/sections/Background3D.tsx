"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Background3D: A high-performance interactive neural network (Plexus) background.
 * Uses HTML5 Canvas for silky smooth 60fps interaction.
 */
export const Background3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();
  const isTransitioningRef = useRef(false);

  useEffect(() => {
    isTransitioningRef.current = true;
    const timer = setTimeout(() => {
      isTransitioningRef.current = false;
    }, 600);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    const mouse = { x: 0, y: 0, active: false };

    // Particle Object
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;

        // Mouse interaction (gentle attraction)
        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            this.x += dx * 0.01;
            this.y += dy * 0.01;
          }
        }
      }

      draw() {
        ctx!.fillStyle = `rgba(124, 58, 237, ${this.opacity})`; // Violet color
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    const init = () => {
      particles = [];
      const density = window.innerWidth < 768 ? 25 : 60;
      for (let i = 0; i < density; i++) {
        particles.push(new Particle());
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const drawLines = () => {
      const maxDistance = 120;
      const maxDistanceSq = maxDistance * maxDistance;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistanceSq) {
            const dist = Math.sqrt(distSq);
            const opacity = (1 - dist / maxDistance) * 0.25;
            ctx!.strokeStyle = `rgba(124, 58, 237, ${opacity})`;
            ctx!.lineWidth = 0.5;
            ctx!.beginPath();
            ctx!.moveTo(p1.x, p1.y);
            ctx!.lineTo(p2.x, p2.y);
            ctx!.stroke();
          }
        }
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (isTransitioningRef.current) {
        // Pause updating & redrawing during page transitions to free up CPU
        return;
      }

      ctx!.fillStyle = "#121027"; // Deep violet/dark background
      ctx!.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      drawLines();
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseout", () => (mouse.active = false));

    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-none w-full h-full"
      style={{ background: "#121027" }}
    />
  );
};
