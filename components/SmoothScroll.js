"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis = null;
    let raf = 0;

    if (!reduce) {
      lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      window.__lenis = lenis;
      const loop = (time) => {
        lenis.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    const onClick = (event) => {
      const link = event.target.closest && event.target.closest('a[href^="#"]');
      if (!link) return;
      const hash = link.getAttribute("href");
      if (!hash || hash.length < 2) return;
      const target = document.querySelector(hash);
      if (!target) return;
      event.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -72, force: true });
      else target.scrollIntoView({ behavior: "auto" });
      history.replaceState(null, "", hash);
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(raf);
      if (lenis) lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  return null;
}
