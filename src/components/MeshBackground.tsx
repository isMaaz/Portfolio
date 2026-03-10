"use client";

import { useEffect, useRef } from "react";

/**
 * Static geometric mesh background — Palantir-style.
 * Draws a fixed network of interconnected nodes on canvas.
 * No animation, no mouse interaction — purely decorative.
 */

interface Point {
  x: number;
  y: number;
}

const NODE_COUNT = 90;
const CONNECTION_DIST = 200;
const NODE_COLOR = "rgba(255, 255, 255, 0.25)";
const EDGE_COLOR = "rgba(255, 255, 255, 0.12)";

function generatePoints(w: number, h: number, count: number): Point[] {
  const points: Point[] = [];
  // Use a seeded-like approach with fixed distribution for consistency
  for (let i = 0; i < count; i++) {
    // Distribute points across the full viewport
    points.push({
      x: Math.random() * w,
      y: Math.random() * h,
    });
  }
  return points;
}

function drawMesh(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  points: Point[]
) {
  ctx.clearRect(0, 0, w, h);

  // Draw edges
  ctx.strokeStyle = EDGE_COLOR;
  ctx.lineWidth = 0.8;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dx = points[i].x - points[j].x;
      const dy = points[i].y - points[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < CONNECTION_DIST) {
        const alpha = (1 - dist / CONNECTION_DIST) * 0.15;
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(points[i].x, points[i].y);
        ctx.lineTo(points[j].x, points[j].y);
        ctx.stroke();
      }
    }
  }

  // Draw nodes
  ctx.fillStyle = NODE_COLOR;
  for (const point of points) {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function MeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const render = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const dpr = window.devicePixelRatio || 1;
      const w = parent.clientWidth;
      const h = parent.clientHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.scale(dpr, dpr);

      // Generate points once, redraw on resize
      pointsRef.current = generatePoints(w, h, NODE_COUNT);
      drawMesh(ctx, w, h, pointsRef.current);
    };

    render();
    window.addEventListener("resize", render);
    return () => window.removeEventListener("resize", render);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
