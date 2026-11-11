"use client";

import { MotionConfig } from "motion/react";

/* Respecte la préférence « réduire les animations » du système. */
export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
