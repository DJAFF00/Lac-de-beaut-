"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { SITE, TAGS, waLink } from "@/lib/data";
import { Arrow, Quote, Spark, TikTok, WhatsApp, Clock } from "./Icons";

const LINES = ["Lac de", "Beauté"];
const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);

  let charIndex = 0;

  return (
    <section id="accueil" className="hero" ref={ref}>
      <div className="wrap hero__inner">
        <motion.div
          className="chip"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        >
          <span className="chip__icon">
            <Clock size={14} />
          </span>
          Ouvert tous les jours jusqu&apos;à 22h
        </motion.div>

        <div className="hero__heading">
          <motion.h1 className="hero__title" aria-label="Lac de Beauté" style={{ y: titleY }}>
            {LINES.map((line) => (
              <span className="hero__line" key={line} aria-hidden="true">
                {[...line].map((char, i) => {
                  const idx = charIndex++;
                  return (
                    <span className="hero__mask" key={`${line}-${i}`}>
                      <motion.span
                        className="hero__char"
                        initial={{ y: "115%" }}
                        animate={{ y: "0%" }}
                        transition={{ duration: 0.95, ease: EASE, delay: 0.25 + idx * 0.04 }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    </span>
                  );
                })}
              </span>
            ))}
            <Spark size={34} className="hero__spark" />
          </motion.h1>

          <a className="badge" href="#reservation" aria-label="Réserver un rendez-vous">
            <svg className="badge__ring" viewBox="0 0 120 120" aria-hidden="true">
              <defs>
                <path id="ring" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" />
              </defs>
              <text>
                <textPath href="#ring" startOffset="0">
                  OUVERT 7J/7 — JUSQU&apos;À 22H — OUVERT 7J/7 — JUSQU&apos;À 22H —
                </textPath>
              </text>
            </svg>
            <span className="badge__core">
              <Arrow size={22} />
            </span>
          </a>
        </div>

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Coiffure mixte et soins de beauté à Abomey-Calavi
        </motion.p>

        <div className="hero__stage">
          <motion.div
            className="hero__side hero__side--left"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 1.1 }}
          >
            <div className="hero__social">
              <p>Suivez-nous</p>
              <div className="hero__social-row">
                <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok Lac de Beauté">
                  <TikTok size={17} />
                </a>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <WhatsApp size={18} />
                </a>
              </div>
            </div>

            <a className="hero__reviews" href="#avis">
              <span className="avatars" aria-hidden="true">
                <span>F</span>
                <span>M</span>
                <span>E</span>
              </span>
              <span className="hero__reviews-text">
                <strong>Avis de nos clients</strong>
                Lire sur Google
              </span>
            </a>
          </motion.div>

          <motion.div
            className="hero__photo"
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
          >
            <motion.div className="hero__photo-inner" style={{ y: imgY }}>
              <Image
                src="/images/hero-salon.jpg"
                alt="Intérieur du salon Lac de Beauté, avec ses miroirs en arche"
                fill
                priority
                sizes="(max-width: 900px) 86vw, 560px"
                quality={90}
                className="cover cover--hero"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="hero__side hero__side--right"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 1.1 }}
          >
            <Quote className="hero__quote" size={26} />
            <p className="hero__lead">
              Coiffure, ongles, cils, massage et maquillage dans un institut lumineux, au carrefour Tanpkè.
            </p>
            <ul className="tags" aria-label="Nos spécialités">
              {TAGS.map((tag, i) => (
                <li key={tag} className={i % 2 === 0 ? "tag tag--dark" : "tag tag--amber"}>
                  {tag}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="hero__ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.4 }}
          >
            <a className="btn btn--amber" href={waLink()} target="_blank" rel="noopener noreferrer">
              Réserver
              <span className="btn__icon">
                <Arrow size={16} />
              </span>
            </a>
            <a className="btn btn--outline" href="#tarifs">
              Voir les tarifs
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
