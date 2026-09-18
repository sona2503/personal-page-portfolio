export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-zinc-900/40 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-2 text-zinc-900 dark:text-white">
            Real <span className="text-accent">Problem Solutions</span>
          </h2>
          <p className="text-xl text-zinc-500 dark:text-zinc-300">Experience</p>
        </div>

        <div className="relative grid md:grid-cols-2 gap-12 md:gap-16">
          <div
            className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-accent rounded-full"
            aria-hidden="true"
          />

          {/* KIRI: EDUCATION */}
          <div className="reveal d1 flex flex-col gap-10">
            <div>
              <h3 className="font-display font-bold text-2xl mb-4 text-zinc-900 dark:text-white">Education</h3>
              <div>
                <p className="font-semibold text-zinc-900 dark:text-white">Yogyakarta University of Technology</p>
                <p className="italic text-zinc-500 dark:text-zinc-300 text-sm mt-1">Information Systems &nbsp;&nbsp;2020-2024</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mt-2">
                  Studied core computer science and information systems curriculum, covering software development, databases, and systems analysis for real-world applications.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-2xl mb-4 text-zinc-900 dark:text-white">Teaching</h3>
              <div>
                <p className="font-semibold text-zinc-900 dark:text-white">Yogyakarta University of Technology</p>
                <p className="italic text-zinc-500 dark:text-zinc-300 text-sm mt-1">Assistant Professor &nbsp;&nbsp;2024</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mt-2">
                  Assisted lecturers in teaching programming and systems courses, mentoring students through practical software development exercises.
                </p>
              </div>
            </div>
          </div>

          {/* KANAN: WORK EXPERIENCE */}
          <div className="reveal d2 flex flex-col gap-10">
            <h3 className="font-display font-bold text-2xl mb-0 text-zinc-900 dark:text-white">Work Experience</h3>

            <div className="-mt-6 flex flex-col gap-8">
              <div>
                <p className="font-semibold text-zinc-900 dark:text-white">PT. Gama Integra Informatika</p>
                <p className="italic text-zinc-500 dark:text-zinc-300 text-sm mt-1">Web Programmer &nbsp;&nbsp;2023</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mt-2">
                  Built and maintained web applications, collaborating with cross-functional teams to deliver features on schedule and improve code quality.
                </p>
              </div>

              <div>
                <p className="font-semibold text-zinc-900 dark:text-white">PT. Swevel Universal Media</p>
                <p className="italic text-zinc-500 dark:text-zinc-300 text-sm mt-1">Database Administrator &nbsp;&nbsp;2023</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mt-2">
                  Managed and optimized production databases, ensuring data integrity, performance tuning, and reliable backup strategies.
                </p>
              </div>

              <div>
                <p className="font-semibold text-zinc-900 dark:text-white">KAP Sandra Pracipta, CPA</p>
                <p className="italic text-zinc-500 dark:text-zinc-300 text-sm mt-1">Software Engineer &nbsp;&nbsp;2025-now</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mt-2">
                  Building and maintaining financial information systems for public-sector clients, using Laravel, React, and MySQL end-to-end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
