import React, { useRef, useEffect, useState } from "react";

// ParticleNameReveal.jsx
// A self-contained React component that shows floating particles which
// "shred" (explode) and then reassemble to form a name when clicked.
// - No external libraries required
// - Tailwind classes are used for layout but the component works without Tailwind
//   (it only uses simple classNames that you can replace with your own CSS).

// Usage:
// import ParticleNameReveal from './ParticleNameReveal';
// <ParticleNameReveal name="Atul" particleCount={900} width={900} height={320} />

export default function ParticleNameReveal({
  name = "Atul",
  particleCount = 1200,
  width = 900,
  height = 300,
  particleSize = 1,
}) {
  const canvasRef = useRef(null);
  const offscreenRef = useRef(null); // to render text and sample pixels
  const particlesRef = useRef([]);
  const animationRef = useRef(null);
  const [mode, setMode] = useState("idle"); // idle | shred | assemble

  // Helpers
  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Build particle objects
  function initParticles(w, h, count) {
    const arr = new Array(count).fill(0).map(() => ({
      x: rand(0, w),
      y: rand(0, h),
      vx: rand(-0.3, 0.3),
      vy: rand(-0.3, 0.3),
      tx: null, // target x
      ty: null, // target y
      ax: 0,
      ay: 0,
      size: particleSize,
      color: `hsl(${Math.floor(rand(190, 260))}, 80%, ${rand(45, 70)}%)`,
      ease: 0.08 + Math.random() * 0.06,
    }));
    particlesRef.current = arr;
  }

  // Create an offscreen canvas and draw the name text then sample pixel locations
  function sampleTextPoints(text, w, h, gap = 6) {
    const off = offscreenRef.current || document.createElement("canvas");
    off.width = w;
    off.height = h;
    const ctx = off.getContext("2d");

    // Clear and style
    ctx.clearRect(0, 0, w, h);
    // Big bold font; tweak for different looks
    const fontSize = Math.floor(h * 0.6);
    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Draw text in the middle
    ctx.fillStyle = "white";
    ctx.fillText(text, w / 2, h / 2 + h * 0.045);

    const pixels = ctx.getImageData(0, 0, w, h).data;
    const points = [];
    for (let y = 0; y < h; y += gap) {
      for (let x = 0; x < w; x += gap) {
        const idx = (y * w + x) * 4;
        const alpha = pixels[idx + 3];
        if (alpha > 128) {
          points.push({ x, y });
        }
      }
    }
    offscreenRef.current = off;
    return points;
  }

  // Assign sampled text points to particles (targets). If more particles than points, reuse points.
  function assignTargetsToParticles(points) {
    const p = particlesRef.current;
    if (!p || p.length === 0) return;
    for (let i = 0; i < p.length; i++) {
      const pt = points[i % points.length];
      // jitter slightly so it looks natural
      p[i].tx = pt.x + rand(-1.5, 1.5);
      p[i].ty = pt.y + rand(-1.5, 1.5);
      p[i].ease = 0.06 + Math.random() * 0.08;
    }
  }

  // Explosion (shred) — give each particle a burst velocity
  function shredParticles(strength = 6) {
    const p = particlesRef.current;
    for (let i = 0; i < p.length; i++) {
      p[i].vx = rand(-strength, strength);
      p[i].vy = rand(-strength, strength);
      p[i].tx = null;
      p[i].ty = null;
    }
  }

  // Animation loop
  function animate() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const p = particlesRef.current;
    for (let i = 0; i < p.length; i++) {
      const part = p[i];

      if (mode === "idle") {
        // gentle floating motion: combine velocity and a slow sinusoidal offset
        part.x += part.vx;
        part.y += part.vy + Math.sin((Date.now() / 900) + i) * 0.02;

        // wrap around edges
        if (part.x < -10) part.x = w + 10;
        if (part.x > w + 10) part.x = -10;
        if (part.y < -10) part.y = h + 10;
        if (part.y > h + 10) part.y = -10;
      } else if (mode === "shred") {
        // particles already have velocities from shred; apply friction
        part.vx *= 0.98;
        part.vy *= 0.98;
        part.x += part.vx;
        part.y += part.vy;
      } else if (mode === "assemble") {
        if (part.tx !== null && part.ty !== null) {
          // move towards target with easing
          const dx = part.tx - part.x;
          const dy = part.ty - part.y;
          part.x += dx * part.ease;
          part.y += dy * part.ease;
        } else {
          // fallback float
          part.x += part.vx;
          part.y += part.vy;
        }
      }

      // draw particle
      ctx.beginPath();
      ctx.fillStyle = part.color;
      ctx.arc(part.x, part.y, part.size, 0, Math.PI * 2);
      ctx.fill();
    }

    animationRef.current = requestAnimationFrame(animate);
  }

  // On click: perform shred animation then assemble into name
  function handleClick() {
    if (mode === "idle") {
      setMode("shred");
      shredParticles(8);

      // After a short moment, assign targets and switch to assemble
      setTimeout(() => {
        const points = sampleTextPoints(name, width, height, Math.max(4, Math.floor(14 - name.length)));
        assignTargetsToParticles(points);
        setMode("assemble");
      }, 450);
    } else if (mode === "assemble") {
      // if already assembled, click again to go back to idle
      // we give a small disperse and return to idle
      shredParticles(4);
      setMode("shred");
      setTimeout(() => {
        // relax back to idle: clear targets and randomize velocities
        initParticles(width, height, particlesRef.current.length);
        setMode("idle");
      }, 700);
    }
  }

  // Setup on mount
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = width;
    canvas.height = height;

    initParticles(width, height, particleCount);

    // start animation
    cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  // If the user changes the name prop, update targets on the next click only.

  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative" style={{ width, height }}>
        <canvas
          ref={canvasRef}
          className="rounded-2xl shadow-2xl cursor-pointer"
          style={{ display: "block", borderRadius: 16 }}
          onClick={handleClick}
        />

        <div className="absolute inset-0 pointer-events-none flex items-end justify-center pb-3">
          <div className="text-xs text-white/70 select-none">Click canvas to reveal name</div>
        </div>
      </div>
    </div>
  );
}

export { ParticleNameReveal };