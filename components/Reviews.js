"use client";

import { REVIEWS, SITE } from "@/lib/data";
import { Arrow, Star } from "./Icons";
import { RevealWords } from "./Reveal";

export default function Reviews() {
  return (
    <section id="avis" className="section reviews">
      <div className="wrap">
        <div className="section__head">
          <div>
            <span className="chip chip--dark">
              <span className="chip__dot" />
              Avis Google
            </span>
            <RevealWords text="Ce que disent *nos clients*" className="h2 h2--light" />
          </div>
          <a className="btn btn--amber btn--sm" href={SITE.mapsLink} target="_blank" rel="noopener noreferrer">
            Tous les avis
            <span className="btn__icon btn__icon--ink">
              <Arrow size={14} />
            </span>
          </a>
        </div>
      </div>

      <ul className="rev wrap">
        {REVIEWS.map((r) => (
          <li key={r.name} className="rev__card">
            <div className="rev__stars" role="img" aria-label={`${r.stars} étoiles sur 5`}>
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} size={16} className={n <= r.stars ? "is-on" : "is-off"} />
              ))}
            </div>
            <blockquote className="rev__text">{r.text}</blockquote>
            <p className="rev__who">
              <strong>{r.name}</strong>
              <span>{r.when}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
