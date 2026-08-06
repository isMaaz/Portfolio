"use client";

import { useEffect, useRef } from "react";

/**
 * MatrixPortrait
 * ------------------------------------------------------------------
 * Renders a photo as a live grid of "matrix" characters: the image
 * brightness drives which cells glow, so the face emerges out of
 * falling green code. Interactive — the cursor lights up and scrambles
 * the glyphs it passes over. If the image is missing it degrades to a
 * pure matrix-rain effect, so the landing always looks alive.
 *
 * Drop the source photo at `public/portrait.jpg` (a high-contrast
 * black-&-white shot reads best). Pass a different `src` to override.
 */

/* Pure binary — the face is constructed out of 1s and 0s */
const GLYPHS = "01".split("");

interface Props {
  src?: string;
  className?: string;
}

export default function MatrixPortrait({ src, className = "" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    const wrapEl = wrapRef.current;
    if (!canvasEl || !wrapEl) return;
    const rawCtx = canvasEl.getContext("2d");
    if (!rawCtx) return;

    // Non-null aliases (explicit types) so the values stay non-null when
    // captured inside the nested render/resize closures below.
    const canvas: HTMLCanvasElement = canvasEl;
    const wrap: HTMLDivElement = wrapEl;
    const ctx: CanvasRenderingContext2D = rawCtx;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;
    let cols = 0;
    let rows = 0;
    let cellW = 0;
    let cellH = 0;
    let dpr = 1;

    let bright = new Float32Array(0); // per-cell image luminance [0..1]
    let glyph = new Int16Array(0); // per-cell current glyph index
    let rainY = new Float32Array(0); // per-column falling head position
    let rainSpeed = new Float32Array(0);
    let hasImage = false;
    let lastCssW = 0;
    let lastCssH = 0;

    const mouse = { x: -9999, y: -9999, active: false };
    let startTime = performance.now();
    let lastTick = 0;

    const img = new Image();
    let imgReady = false;

    /* ── Sample the image down to the character grid ── */
    function sampleImage() {
      bright = new Float32Array(cols * rows);
      if (!imgReady || cols === 0 || rows === 0) {
        hasImage = false;
        return;
      }
      const off = document.createElement("canvas");
      off.width = cols;
      off.height = rows;
      const octx = off.getContext("2d");
      if (!octx) {
        hasImage = false;
        return;
      }
      // cover-fit the source into the grid
      const ir = img.width / img.height;
      const gr = cols / rows;
      let sw: number, sh: number, sx: number, sy: number;
      if (ir > gr) {
        sh = img.height;
        sw = sh * gr;
        sx = (img.width - sw) / 2;
        sy = 0;
      } else {
        sw = img.width;
        sh = sw / gr;
        sx = 0;
        sy = (img.height - sh) / 2;
      }
      octx.drawImage(img, sx, sy, sw, sh, 0, 0, cols, rows);
      const data = octx.getImageData(0, 0, cols, rows).data;

      // luminance + contrast normalize
      const tmp = new Float32Array(cols * rows);
      let min = 1;
      let max = 0;
      for (let i = 0; i < cols * rows; i++) {
        const r = data[i * 4];
        const g = data[i * 4 + 1];
        const b = data[i * 4 + 2];
        const l = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        tmp[i] = l;
        if (l < min) min = l;
        if (l > max) max = l;
      }
      const range = Math.max(0.001, max - min);
      for (let i = 0; i < cols * rows; i++) {
        let v = (tmp[i] - min) / range;
        // S-curve: deepen the background to black, brighten highlights, so
        // the face separates cleanly and its shading reads in 1s and 0s.
        v = v * v * (3 - 2 * v); // smoothstep
        v = (v - 0.5) * 1.25 + 0.5; // extra contrast around the midpoint
        bright[i] = v < 0 ? 0 : v > 1 ? 1 : v;
      }
      hasImage = true;
    }

    /* ── (Re)build the grid for the current wrapper size ── */
    function computeGrid() {
      const rect = wrap.getBoundingClientRect();
      const cssW = Math.max(1, rect.width);
      const cssH = Math.max(1, rect.height);

      lastCssW = cssW;
      lastCssH = cssH;

      const targetCols = cssW < 380 ? 52 : cssW < 640 ? 66 : 82;
      cellW = cssW / targetCols;
      cellH = cellW / 0.62; // character cells are taller than wide
      cols = targetCols;
      rows = Math.max(1, Math.round(cssH / cellH));

      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);
      canvas.style.width = cssW + "px";
      canvas.style.height = cssH + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.textBaseline = "top";
      ctx.font = `${Math.round(cellH * 0.92)}px ui-monospace, "SFMono-Regular", Menlo, monospace`;

      const n = cols * rows;
      glyph = new Int16Array(n);
      for (let i = 0; i < n; i++) glyph[i] = (Math.random() * GLYPHS.length) | 0;

      rainY = new Float32Array(cols);
      rainSpeed = new Float32Array(cols);
      for (let c = 0; c < cols; c++) {
        rainY[c] = Math.random() * rows;
        rainSpeed[c] = 7 + Math.random() * 11; // rows / second
      }
      sampleImage();
    }

    /* ResizeObserver can miss late layout shifts (webfont swap, grid
       reflow), so we also poll the wrapper size from the animation tick. */
    function maybeResize() {
      const rect = wrap.getBoundingClientRect();
      if (
        Math.abs(rect.width - lastCssW) > 1 ||
        Math.abs(rect.height - lastCssH) > 1
      ) {
        computeGrid();
      }
    }

    // Try the given src, otherwise probe the common filenames so the photo
    // is picked up whatever extension it's saved with.
    const candidates = src
      ? [src]
      : ["/portrait.jpg", "/portrait.jpeg", "/portrait.png", "/portrait.webp"];
    let ci = 0;
    img.onload = () => {
      imgReady = true;
      sampleImage();
      draw(performance.now()); // repaint immediately once the photo is ready
    };
    img.onerror = () => {
      ci += 1;
      if (ci < candidates.length) {
        img.src = candidates[ci];
      } else {
        imgReady = false;
        hasImage = false;
      }
    };
    img.src = candidates[0];

    /* ── Draw one frame ── */
    function draw(now: number) {
      const cssW = canvas.width / dpr;
      const cssH = canvas.height / dpr;

      ctx.clearRect(0, 0, cssW, cssH);
      ctx.fillStyle = "#04070a";
      ctx.fillRect(0, 0, cssW, cssH);

      const intro = Math.min(1, (now - startTime) / 1500);
      const introNoise = 1 - intro;
      const mCol = mouse.active ? mouse.x / cellW : -999;
      const mRow = mouse.active ? mouse.y / cellH : -999;
      const R = 7; // cursor radius in cells

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = r * cols + c;
          const imgB = hasImage ? bright[i] : 0;
          let eb = imgB;

          // Falling-code rain. With a photo present the rain is kept dim and
          // confined to the dark background so the face (bright cells) stays
          // crisp; without a photo it fills the whole field brightly.
          const isBackground = imgB < 0.16;
          if (!hasImage || isBackground) {
            const d = rainY[c] - r;
            const len = hasImage ? 11 : 14;
            if (d >= 0 && d < len) {
              const trail = 1 - d / len;
              const rainB = (hasImage ? 0.3 : 1) * trail;
              if (rainB > eb) eb = rainB;
              if (d < 1) eb = Math.max(eb, hasImage ? 0.5 : 1.1); // head
            }
          }

          // intro "decode" sparkle that fades in the first 1.5s — kept to the
          // background so the face is readable from the very first frame
          if (introNoise > 0.01 && (!hasImage || isBackground)) {
            const noise = Math.random() * introNoise * (hasImage ? 0.7 : 1);
            if (noise > eb) eb = noise;
          }

          // cursor halo — brighten + scramble nearby glyphs
          if (mouse.active) {
            const dc = c - mCol;
            const dr = r - mRow;
            const dist2 = dc * dc + dr * dr;
            if (dist2 < R * R) {
              const f = 1 - Math.sqrt(dist2) / R;
              eb += f * 0.65;
              if (Math.random() < 0.28 * f)
                glyph[i] = (Math.random() * GLYPHS.length) | 0;
            }
          }

          if (eb <= 0.06) continue;
          eb = Math.min(1.2, eb);

          let rr: number;
          let gg: number;
          let bb: number;
          let aa: number;
          if (eb > 1.0) {
            // rain head — near white-green
            rr = 210;
            gg = 255;
            bb = 225;
            aa = 1;
          } else {
            const e2 = eb * eb;
            rr = 30 + 150 * e2;
            gg = 120 + 135 * eb;
            bb = 50 + 110 * e2;
            aa = 0.3 + 0.7 * eb;
          }
          ctx.fillStyle = `rgba(${rr | 0},${gg | 0},${bb | 0},${aa.toFixed(3)})`;
          ctx.fillText(GLYPHS[glyph[i]], c * cellW, r * cellH);
        }
      }
    }

    /* ── Animation loop ── */
    function frame(now: number) {
      raf = requestAnimationFrame(frame);
      if (now - lastTick > 55) {
        lastTick = now;
        maybeResize();
        const n = cols * rows;
        // re-roll a small fraction of glyphs so the field flickers
        const rerolls = (n * 0.05) | 0;
        for (let k = 0; k < rerolls; k++) {
          const i = (Math.random() * n) | 0;
          glyph[i] = (Math.random() * GLYPHS.length) | 0;
        }
        // advance the rain
        for (let c = 0; c < cols; c++) {
          rainY[c] += rainSpeed[c] * 0.055;
          if (rainY[c] > rows + 8) rainY[c] = -(Math.random() * 12);
        }
      }
      draw(now);
    }

    /* ── Interaction ── */
    function onMove(e: PointerEvent) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    }
    function onLeave() {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    }
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    const ro = new ResizeObserver(() => {
      computeGrid();
      startTime = performance.now(); // replay the decode on resize
    });
    ro.observe(wrap);

    computeGrid();
    draw(performance.now()); // initial paint so the canvas is never blank
    if (reduceMotion) {
      // Static render — no motion, but re-check size for ~1.2s so late
      // layout shifts (webfont swap / grid reflow) still get a correct draw.
      startTime = performance.now() - 2000; // skip the intro animation
      const settleStart = performance.now();
      const settle = (now: number) => {
        maybeResize();
        draw(now);
        if (now - settleStart < 1200) raf = requestAnimationFrame(settle);
      };
      raf = requestAnimationFrame(settle);
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [src]);

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
