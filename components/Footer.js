"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { NAV, SITE, waLink } from "@/lib/data";
import { TikTok, WhatsApp } from "./Icons";

export default function Footer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["40%", "0%"]);

  return (
    <footer className="footer" ref={ref}>
      <div className="wrap footer__top">
        <div className="footer__brand">
          <Image src="/images/logo-white.png" alt="Lac de Beauté" width={140} height={38} />
          <p>Institut de coiffure mixte et de soins de beauté à Abomey-Calavi.</p>
        </div>
        <nav className="footer__nav" aria-label="Pied de page">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="footer__contact">
          <p>{SITE.address}</p>
          <a href={SITE.phoneHref}>{SITE.phone}</a>
          <div className="footer__social">
            <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <TikTok size={18} />
            </a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <WhatsApp size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__word" aria-hidden="true">
        <motion.span style={{ y }}>Lac de Beauté</motion.span>
      </div>

      <div className="wrap footer__bottom">
        <p>© {new Date().getFullYear()} Lac de Beauté. Tous droits réservés.</p>
        <p>Abomey-Calavi, Bénin</p>
      </div>
    </footer>
  );
}
