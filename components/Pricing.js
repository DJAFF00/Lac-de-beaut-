"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PRICES, waLink } from "@/lib/data";
import { Arrow, WhatsApp } from "./Icons";
import { RevealWords } from "./Reveal";

export default function Pricing() {
  const [active, setActive] = useState(PRICES[0].id);
  const current = PRICES.find((p) => p.id === active);

  return (
    <section id="tarifs" className="section pricing">
      <div className="wrap pricing__grid">
        <div className="pricing__intro">
          <span className="chip chip--plain">
            <span className="chip__dot" />
            Nos tarifs
          </span>
          <RevealWords text="Des prix *affichés clairement*" className="h2" />
          <p className="pricing__note">
            Les fourchettes dépendent du style, de la longueur et des options choisies. Écrivez-nous pour un devis précis.
          </p>

          <div className="tabs" role="tablist" aria-label="Catégories de tarifs">
            {PRICES.map((p) => (
              <button
                key={p.id}
                role="tab"
                type="button"
                id={`tab-${p.id}`}
                aria-selected={active === p.id}
                aria-controls={`panel-${p.id}`}
                className={`tabs__btn ${active === p.id ? "is-active" : ""}`}
                onClick={() => setActive(p.id)}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="pricing__card">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              id={`panel-${current.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${current.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {current.groups.map((group) => (
                <div className="plist" key={group.title}>
                  <h3 className="plist__title">{group.title}</h3>
                  <ul>
                    {group.rows.map(([name, price], i) => (
                      <motion.li
                        key={name + i}
                        className="plist__row"
                        initial={{ opacity: 0, x: -14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.05 + i * 0.05 }}
                      >
                        <span className="plist__name">{name}</span>
                        <span className="plist__dots" aria-hidden="true" />
                        <span className="plist__price">{price}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <a
            className="btn btn--ink pricing__cta"
            href={waLink(`Bonjour, je voudrais un devis pour : ${current.label}`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp size={18} />
            Demander un devis
            <span className="btn__icon btn__icon--amber">
              <Arrow size={14} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
