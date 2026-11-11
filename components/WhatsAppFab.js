"use client";

import { useEffect, useState } from "react";
import { waLink } from "@/lib/data";
import { WhatsApp } from "./Icons";

export default function WhatsAppFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      className={`fab ${show ? "is-visible" : ""}`}
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Réserver sur WhatsApp"
      tabIndex={show ? 0 : -1}
    >
      <WhatsApp size={26} />
    </a>
  );
}
