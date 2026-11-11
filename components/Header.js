"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { NAV, waLink } from "@/lib/data";
import { WhatsApp, Arrow } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#accueil");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const lenis = window.__lenis;
    if (open) {
      lenis && lenis.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis && lenis.start();
      document.body.style.overflow = "";
    }
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav__pill">
          <a href="#accueil" className="nav__logo" aria-label="Lac de Beauté, accueil" onClick={() => setOpen(false)}>
            <Image src="/images/logo-white.png" alt="Lac de Beauté" width={120} height={32} priority />
          </a>

          <nav className="nav__links" aria-label="Navigation principale">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={active === item.href ? "is-active" : ""}
                aria-current={active === item.href ? "true" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <a
              className="nav__wa"
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Écrire sur WhatsApp"
            >
              <WhatsApp size={20} />
            </a>
            <a className="btn btn--amber btn--sm nav__cta" href="#reservation">
              Réserver
            </a>
            <button
              type="button"
              className="nav__burger"
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className={open ? "is-open" : ""} />
              <span className={open ? "is-open" : ""} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            className="menu"
            initial={{ clipPath: "circle(0% at calc(100% - 36px) 38px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 36px) 38px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 36px) 38px)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav className="menu__links" aria-label="Menu mobile">
              {NAV.map((item, i) => (
                <span className="menu__mask" key={item.href}>
                  <motion.a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 + i * 0.06 }}
                  >
                    {item.label}
                  </motion.a>
                </span>
              ))}
            </nav>
            <a className="btn btn--amber menu__cta" href="#reservation" onClick={() => setOpen(false)}>
              Réserver un créneau
              <span className="btn__icon">
                <Arrow size={16} />
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
