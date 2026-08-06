"use client";

import Link from "next/link";
import { useCallback, useRef, useState } from "react";

/**
 * NavTile — one of the three landing buttons (Projects / About / Contact).
 * On hover: a green light sweeps up, the border ignites, and the label
 * "decodes" via a matrix-style character scramble.
 */

const SCRAMBLE = "アイウｦｱｼﾎ0123456789#%&*<>/".split("");

interface Props {
  index: string;
  href: string;
  label: string;
  desc: string;
}

export default function NavTile({ index, href, label, desc }: Props) {
  const [display, setDisplay] = useState(label);
  const raf = useRef<number | null>(null);

  const scramble = useCallback(() => {
    if (raf.current) cancelAnimationFrame(raf.current);
    const start = performance.now();
    const duration = 480;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const revealed = Math.floor(p * label.length);
      let out = "";
      for (let i = 0; i < label.length; i++) {
        if (i < revealed || label[i] === " ") out += label[i];
        else out += SCRAMBLE[(Math.random() * SCRAMBLE.length) | 0];
      }
      setDisplay(out);
      if (p < 1) raf.current = requestAnimationFrame(tick);
      else {
        setDisplay(label);
        raf.current = null;
      }
    };
    raf.current = requestAnimationFrame(tick);
  }, [label]);

  const reset = useCallback(() => {
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = null;
    setDisplay(label);
  }, [label]);

  return (
    <Link
      href={href}
      onMouseEnter={scramble}
      onMouseLeave={reset}
      className="nav-tile group"
    >
      <span className="nav-tile__fill" aria-hidden="true" />
      <span className="nav-tile__idx">{index}</span>
      <span className="nav-tile__label">{display}</span>
      <span className="nav-tile__desc">{desc}</span>
      <span className="nav-tile__arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
