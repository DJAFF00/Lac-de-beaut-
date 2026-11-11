"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FAQ } from "@/lib/data";
import { Plus } from "./Icons";
import { RevealWords } from "./Reveal";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section faq">
      <div className="wrap faq__grid">
        <div>
          <span className="chip chip--plain">
            <span className="chip__dot" />
            Questions fréquentes
          </span>
          <RevealWords text="Avant de *venir*" className="h2" />
        </div>

        <ul className="faq__list">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className={`faq__item ${isOpen ? "is-open" : ""}`}>
                <h3>
                  <button
                    type="button"
                    className="faq__q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq__icon">
                      <Plus size={16} />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      className="faq__a"
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
