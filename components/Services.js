"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SERVICES, waLink } from "@/lib/data";
import { Arrow } from "./Icons";
import { RevealWords } from "./Reveal";

export default function Services() {
  const [open, setOpen] = useState(SERVICES[1].id);

  return (
    <section id="services" className="section services">
      <div className="wrap">
        <div className="section__head">
          <div>
            <span className="chip chip--plain">
              <span className="chip__dot" />
              Nos prestations
            </span>
            <RevealWords text="Un savoir-faire *pour chaque envie*" className="h2" />
          </div>
          <a className="btn btn--ink btn--sm" href="#tarifs">
            Voir les tarifs
            <span className="btn__icon btn__icon--amber">
              <Arrow size={14} />
            </span>
          </a>
        </div>

        <ul className="svc">
          {SERVICES.map((s) => {
            const isOpen = open === s.id;
            return (
              <li key={s.id} className={`svc__row ${isOpen ? "is-open" : ""}`}>
                <h3 className="svc__title">
                  <button
                    type="button"
                    className="svc__toggle"
                    aria-expanded={isOpen}
                    aria-controls={`svc-${s.id}`}
                    onClick={() => setOpen(isOpen ? null : s.id)}
                  >
                    <span>{s.title}</span>
                    <span className="svc__arrow">
                      <Arrow size={20} />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`svc-${s.id}`}
                      className="svc__panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
                    >
                      <div className="svc__body">
                        <div className="svc__info">
                          <p className="svc__text">{s.text}</p>
                          <ul className="svc__chips">
                            {s.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                          <div className="svc__foot">
                            <span className="svc__price">
                              {s.from ? (
                                <>
                                  À partir de <strong>{s.from}</strong>
                                </>
                              ) : (
                                <>Tarif sur demande</>
                              )}
                            </span>
                            <a
                              className="btn btn--amber btn--sm"
                              href={waLink(`Bonjour, je souhaite réserver : ${s.title}`)}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Réserver
                              <span className="btn__icon btn__icon--ink">
                                <Arrow size={14} />
                              </span>
                            </a>
                          </div>
                        </div>
                        <div className="svc__photo">
                          <Image src={s.image} alt="" fill sizes="(max-width: 800px) 90vw, 280px" className="cover" />
                        </div>
                      </div>
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
