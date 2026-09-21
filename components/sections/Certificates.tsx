"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// gambar tidak berubah antar bahasa (urutan harus sama dengan translations.ts certificates.items)
const CERT_IMAGES = ["/machine-learning.jpg", "/data-enginering.jpeg"];

function CertificateAccordion() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const certificates = t.certificates.items.map((cert, i) => ({
    ...cert,
    image: CERT_IMAGES[i],
  }));

  return (
    <div className="reveal d1 flex flex-col gap-4 max-w-3xl mx-auto">
      {certificates.map((cert, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={cert.title}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-50 dark:bg-zinc-900"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
              aria-expanded={isOpen}
            >
              <p className="font-semibold text-sm md:text-base text-zinc-900 dark:text-white">
                {cert.title}{" "}
                <span className="font-normal text-zinc-500 dark:text-zinc-400">
                  — {cert.issuer}, {cert.year}.
                </span>
              </p>
              <svg
                className={`w-5 h-5 shrink-0 text-zinc-500 dark:text-zinc-400 transition-transform duration-300 ${
                  isOpen ? "rotate-90" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pt-1">
                  <div className="pf w-full rounded-xl border border-zinc-200 dark:border-zinc-800">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={cert.image} alt={cert.title} loading="lazy" className="w-full h-auto object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Certificates() {
  const { t } = useLanguage();

  return (
    <section id="certificates" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-14">
          <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">{t.certificates.eyebrow}</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
            {t.certificates.heading} <span className="text-accent">{t.certificates.headingAccent}</span>
          </h2>
        </div>

        <CertificateAccordion />
      </div>
    </section>
  );
}
