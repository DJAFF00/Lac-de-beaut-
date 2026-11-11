"use client";

import { Fragment, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

/*
  RevealWords: titre dont chaque mot monte depuis un masque.
  Les segments entre *astérisques* passent en couleur d'accent.
*/
export function RevealWords({ text, as: Tag = "h2", className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  const tokens = [];
  text.split("*").forEach((segment, i) => {
    segment
      .split(" ")
      .filter(Boolean)
      .forEach((word) => tokens.push({ word, accent: i % 2 === 1 }));
  });

  const plain = text.replace(/\*/g, "");

  return (
    <Tag ref={ref} className={`rw ${className}`} aria-label={plain}>
      <span aria-hidden="true">
        {tokens.map((t, i) => (
          <Fragment key={`${t.word}-${i}`}>
            <span className="rw__mask">
              <motion.span
                className={t.accent ? "rw__word is-accent" : "rw__word"}
                initial={{ y: "112%" }}
                animate={inView ? { y: "0%" } : { y: "112%" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: delay + i * 0.06 }}
              >
                {t.word}
              </motion.span>
            </span>{" "}
          </Fragment>
        ))}
      </span>
    </Tag>
  );
}

function ScrubWord({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="scrub__word">
      {children}{" "}
    </motion.span>
  );
}

/*
  ScrubText: les mots s'allument au fil du défilement.
*/
export function ScrubText({ text, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.55"],
  });
  const words = text.split(" ");
  return (
    <p ref={ref} className={`scrub ${className}`} aria-label={text}>
      <span aria-hidden="true">
        {words.map((w, i) => {
          const start = i / words.length;
          const end = Math.min(1, start + 1.5 / words.length);
          return (
            <ScrubWord key={`${w}-${i}`} progress={scrollYProgress} range={[start, end]}>
              {w}
            </ScrubWord>
          );
        })}
      </span>
    </p>
  );
}
