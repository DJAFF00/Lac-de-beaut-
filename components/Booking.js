"use client";

import { useState } from "react";
import { SERVICES, SITE, waLink } from "@/lib/data";
import { Arrow, Clock, Phone, Pin, WhatsApp } from "./Icons";
import { RevealWords } from "./Reveal";

const ALL_SERVICES = SERVICES.flatMap((s) => s.items);

function formatDate(value) {
  if (!value) return "";
  const [y, m, d] = value.split("-");
  return `${d}/${m}/${y}`;
}

export default function Booking() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", time: "" });
  const [error, setError] = useState("");

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.service) {
      setError("Indiquez votre nom et la prestation souhaitée.");
      return;
    }
    setError("");
    const parts = [
      `Bonjour, je suis ${form.name.trim()}${form.phone ? ` (${form.phone.trim()})` : ""}.`,
      `Je souhaite réserver : ${form.service}.`,
    ];
    if (form.date) parts.push(`Date souhaitée : ${formatDate(form.date)}${form.time ? ` à ${form.time}` : ""}.`);
    window.open(waLink(parts.join(" ")), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="reservation" className="section booking">
      <div className="wrap booking__grid">
        <div className="booking__copy">
          <span className="chip chip--dark">
            <span className="chip__dot" />
            Réservation
          </span>
          <RevealWords text="Réservez votre *créneau*" className="h2 h2--light" />
          <p className="booking__lead">
            Choisissez une prestation et un horaire : votre demande part sur WhatsApp et nous vous confirmons rapidement.
          </p>
          <a className="btn btn--wa" href={waLink()} target="_blank" rel="noopener noreferrer">
            <WhatsApp size={20} />
            Écrire sur WhatsApp
          </a>
        </div>

        <form className="form" onSubmit={submit} noValidate>
          <div className="form__row">
            <label className="field">
              <span>Nom complet</span>
              <input type="text" name="name" autoComplete="name" placeholder="Votre nom" value={form.name} onChange={update("name")} required />
            </label>
            <label className="field">
              <span>Téléphone</span>
              <input type="tel" name="phone" autoComplete="tel" inputMode="tel" placeholder="+229 …" value={form.phone} onChange={update("phone")} />
            </label>
          </div>
          <label className="field">
            <span>Prestation</span>
            <select name="service" value={form.service} onChange={update("service")} required>
              <option value="">Choisir une prestation</option>
              {ALL_SERVICES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
              <option value="Autre demande">Autre demande</option>
            </select>
          </label>
          <div className="form__row">
            <label className="field">
              <span>Date</span>
              <input type="date" name="date" value={form.date} onChange={update("date")} />
            </label>
            <label className="field">
              <span>Heure</span>
              <input type="time" name="time" value={form.time} onChange={update("time")} />
            </label>
          </div>
          {error && (
            <p className="form__error" role="alert">
              {error}
            </p>
          )}
          <button type="submit" className="btn btn--amber form__submit">
            Envoyer la demande sur WhatsApp
            <span className="btn__icon btn__icon--ink">
              <Arrow size={16} />
            </span>
          </button>
        </form>
      </div>

      <div id="contact" className="wrap contact">
        <div className="contact__card">
          <h3 className="contact__title">Nous trouver</h3>
          <ul className="contact__list">
            <li>
              <span className="contact__icon">
                <Pin size={20} />
              </span>
              <div>
                <p className="contact__label">Adresse</p>
                <p>{SITE.address}</p>
              </div>
            </li>
            <li>
              <span className="contact__icon">
                <Phone size={20} />
              </span>
              <div>
                <p className="contact__label">Téléphone</p>
                <a href={SITE.phoneHref}>{SITE.phone}</a>
              </div>
            </li>
            <li>
              <span className="contact__icon">
                <Clock size={20} />
              </span>
              <div>
                <p className="contact__label">Horaires</p>
                <p>{SITE.hours}</p>
              </div>
            </li>
          </ul>
          <div className="contact__actions">
            <a className="btn btn--amber btn--sm" href={SITE.mapsDirections} target="_blank" rel="noopener noreferrer">
              Itinéraire
              <span className="btn__icon btn__icon--ink">
                <Arrow size={14} />
              </span>
            </a>
            <a className="btn btn--outline-light btn--sm" href={SITE.phoneHref}>
              Appeler
            </a>
          </div>
        </div>

        <div className="contact__map">
          <iframe
            title="Carte : Lac de Beauté, Tanpkè carrefour, Abomey-Calavi"
            src={SITE.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
