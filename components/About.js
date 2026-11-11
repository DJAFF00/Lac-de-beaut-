"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import { RevealWords, ScrubText } from "./Reveal";

const STATS = [
  { value: "2020", label: "année d'ouverture" },
  { value: "7/7", label: "jours d'ouverture" },
  { value: "22h", label: "fermeture" },
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);
  const blockY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="a-propos" className="section about" ref={ref}>
      <div className="wrap about__grid">
        <div className="about__visual">
          <motion.div className="about__block" style={{ y: blockY }} aria-hidden="true" />
          <div className="about__photo">
            <motion.div className="about__photo-inner" style={{ y: photoY }}>
              <Image
                src="/images/salon-facade.png"
                alt="Façade du salon Lac de Beauté à Tanpkè carrefour"
                fill
                sizes="(max-width: 900px) 90vw, 640px"
                quality={90}
                className="cover cover--top"
              />
            </motion.div>
          </div>
        </div>

        <div className="about__copy">
          <span className="chip chip--dark">
            <span className="chip__dot" />À propos
          </span>
          <RevealWords text="Un salon de quartier, *tenu avec exigence*" className="h2 h2--light" />
          <ScrubText
            className="about__text"
            text="À Abomey-Calavi, Lac de Beauté vous accueille dans un cadre lumineux et chaleureux. Coiffure mixte, soins du visage, ongles, cils, sourcils, maquillage : chaque prestation est pensée comme un moment qui vous est réservé. Notre équipe allie savoir-faire, douceur et sens du détail, pour que vous repartiez rayonnante et avec l'envie de revenir."
          />
          <dl className="stats">
            {STATS.map((s) => (
              <div key={s.label} className="stats__item">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
