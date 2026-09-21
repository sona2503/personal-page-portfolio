"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

const SKILLS = [
  { name: "Javascript", slug: "javascript" },
  { name: "Typescript", slug: "typescript" },
  { name: "Python", slug: "python" },
  { name: "PHP", slug: "php" },
  { name: "Next Js", slug: "nextdotjs" },
  { name: "React", slug: "react" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "CodeIgniter", slug: "codeigniter" },
  { name: "Laravel", slug: "laravel" },
  { name: "Figma", slug: "figma" },
  { name: ".NET", slug: "dotnet" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "MySQL", slug: "mysql" },
  { name: "Git", slug: "git" },
  { name: "Inertia.js", slug: "inertia" },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-14">
          <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">
            {t.skills.eyebrow} <span className="text-accent">{t.skills.eyebrowAccent}</span>
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
            {t.skills.heading}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {SKILLS.map((skill, i) => (
            <div
              key={skill.slug}
              className={`reveal ${i % 3 === 0 ? "d1" : i % 3 === 1 ? "d2" : "d3"} card-h flex flex-col items-center justify-center gap-3 bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800 hover:border-accent`}
            >
              <div className="w-14 h-14 flex items-center justify-center bg-zinc-50 dark:bg-zinc-800 rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://cdn.simpleicons.org/${skill.slug}`}
                  alt={skill.name}
                  loading="lazy"
                  className="w-8 h-8"
                />
              </div>
              <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
