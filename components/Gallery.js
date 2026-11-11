"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { GALLERY_TOP, GALLERY_BOTTOM } from "@/lib/data";
import { RevealWords } from "./Reveal";

function Row({ items, x }) {
  return (
    <motion.ul className="gal__row" style={{ x }}>
      {items.map((img) => (
        <li key={img.src} className="gal__item" style={{ aspectRatio: img.ratio }}>
          <Image src={img.src} alt={img.alt} fill sizes="(max-width: 800px) 60vw, 28vw" className="cover" />
        </li>
      ))}
    </motion.ul>
  );
}

/* Deux rangées qui glissent en sens inverse pendant le scroll. */
export default function Gallery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const left = useTransform(scrollYProgress, [0, 1], ["6%", "-22%"]);
  const right = useTransform(scrollYProgress, [0, 1], ["-22%", "6%"]);

  return (
    <section id="galerie" className="section gal" ref={ref}>
      <div className="wrap">
        <div className="section__head section__head--solo">
          <div>
            <span className="chip chip--plain">
              <span className="chip__dot" />
              Galerie
            </span>
            <RevealWords text="Le salon, *vu de l'intérieur*" className="h2" />
          </div>
        </div>
      </div>
      <div className="gal__rows">
        <Row items={GALLERY_TOP} x={left} />
        <Row items={GALLERY_BOTTOM} x={right} />
      </div>
    </section>
  );
}
