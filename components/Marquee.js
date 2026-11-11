"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { MARQUEE } from "@/lib/data";
import { Spark } from "./Icons";

function wrap(min, max, v) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

/* Bande défilante : accélère et s'inverse selon la vitesse de scroll. */
export default function Marquee() {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const boost = useTransform(smooth, [0, 1000], [0, 5], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);
  const direction = useRef(-1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let move = direction.current * 2.2 * (delta / 1000);
    const b = boost.get();
    if (b < 0) direction.current = 1;
    else if (b > 0) direction.current = -1;
    move += direction.current * Math.abs(move) * Math.abs(b);
    baseX.set(baseX.get() + move);
  });

  return (
    <div className="marquee" aria-hidden="true">
      <motion.div className="marquee__track" style={{ x }}>
        {[0, 1, 2, 3].map((copy) => (
          <div className="marquee__group" key={copy}>
            {MARQUEE.map((word) => (
              <span className="marquee__item" key={`${copy}-${word}`}>
                {word}
                <Spark size={20} className="marquee__spark" />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
