"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  const { education, teaching, work } = t.experience;

  return (
    <section id="experience" className="py-24 bg-white dark:bg-zinc-900/40 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-2 text-zinc-900 dark:text-white">
            {t.experience.heading} <span className="text-accent">{t.experience.headingAccent}</span>
          </h2>
          <p className="text-xl text-zinc-500 dark:text-zinc-300">{t.experience.subheading}</p>
        </div>

        <div className="relative grid md:grid-cols-2 gap-12 md:gap-16">
          <div
            className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-accent rounded-full"
            aria-hidden="true"
          />

          {/* KIRI: EDUCATION */}
          <div className="reveal d1 flex flex-col gap-10">
            <div>
              <h3 className="font-display font-bold text-2xl mb-4 text-zinc-900 dark:text-white">
                {t.experience.educationTitle}
              </h3>
              <div>
                <p className="font-semibold text-zinc-900 dark:text-white">{education.school}</p>
                <p className="italic text-zinc-500 dark:text-zinc-300 text-sm mt-1">
                  {education.degree} &nbsp;&nbsp;{education.period}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mt-2">{education.description}</p>
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-2xl mb-4 text-zinc-900 dark:text-white">
                {t.experience.teachingTitle}
              </h3>
              <div>
                <p className="font-semibold text-zinc-900 dark:text-white">{teaching.school}</p>
                <p className="italic text-zinc-500 dark:text-zinc-300 text-sm mt-1">
                  {teaching.role} &nbsp;&nbsp;{teaching.period}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mt-2">{teaching.description}</p>
              </div>
            </div>
          </div>

          {/* KANAN: WORK EXPERIENCE */}
          <div className="reveal d2 flex flex-col gap-10">
            <h3 className="font-display font-bold text-2xl mb-0 text-zinc-900 dark:text-white">
              {t.experience.workTitle}
            </h3>

            <div className="-mt-6 flex flex-col gap-8">
              {work.map((job) => (
                <div key={job.company}>
                  <p className="font-semibold text-zinc-900 dark:text-white">{job.company}</p>
                  <p className="italic text-zinc-500 dark:text-zinc-300 text-sm mt-1">
                    {job.role} &nbsp;&nbsp;{job.period}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mt-2">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
