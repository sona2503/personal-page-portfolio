"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

// Data yang TIDAK berubah antar bahasa (urutan harus sama dengan translations.ts portfolio.projects)
const PROJECT_META = [
  { image: "/simaha.png", href: "https://simaha.uty.ac.id", offset: false },
  { image: "/tenderplus.png", href: "https://tenderplus.id", offset: true },
  { image: "/smm-kap.png", href: "https://kapsandrapracipta.id", offset: false },
  { image: "/fisbaz.png", href: "https://fiskeu.com/login", offset: true },
  { image: "/fisblud.png", href: "https://fisblud.com", offset: false },
];

export default function Portfolio() {
  const { t } = useLanguage();

  const projects = t.portfolio.projects.map((project, i) => ({
    ...project,
    ...PROJECT_META[i],
    id: PROJECT_META[i].href, 
  }));

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">{t.portfolio.eyebrow}</p>

          <h2 className="font-display font-bold text-3xl md:text-4xl text-zinc-900 dark:text-white">
            {t.portfolio.heading} <span className="text-accent">{t.portfolio.headingAccent}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-16">
          {projects.map((project, i) => (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal ${i % 2 === 0 ? "d1" : "d2"} group flex flex-col gap-5 ${
                project.offset ? "md:mt-20" : ""
              }`}
            >
              <div className="pf w-full h-56 rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-800 group-hover:border-accent transition-colors">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <p className="text-xs font-medium text-accent tracking-widest uppercase mb-2">{project.tag}</p>

                <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">{project.description}</p>

                <span className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 group-hover:border-accent group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
