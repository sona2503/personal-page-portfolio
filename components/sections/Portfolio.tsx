const PROJECTS = [
  {
    tag: "HIGHER EDUCATION",
    title: "SIMAHA — Student Organization Management System",
    description:
      "A web-based system for Yogyakarta University of Technology to manage proposal submissions and activity reports for student organizations and clubs (UKM) campus-wide.",
    image: "/simaha.png",
    href: "https://simaha.uty.ac.id",
    offset: false,
  },
  {
    tag: "SAAS · TENDER INTELLIGENCE",
    title: "TenderPlus — Tender Monitoring & Bid Analysis Platform",
    description:
      "A subscription-based SaaS platform aggregating public tender data from Indonesian government agencies (including Kementerian PUPR), with competitor tracking and win-probability analysis for paid users. Free-tier users get access to general tender listings.",
    image: "/tenderplus.png",
    href: "https://tenderplus.id",
    offset: true,
  },
  {
    tag: "ENTERPRISE · QUALITY MANAGEMENT",
    title: "SMM — Quality Management System for KAP Sandra Pracipta",
    description:
      "A comprehensive enterprise system combining a public-facing landing page (marketing and recruitment) with an internal platform covering employee attendance, KPI tracking, e-learning, audit document storage, internal accounting, correspondence management, and digital audit working papers.",
    image: "/smm-kap.png",
    href: "https://kapsandrapracipta.id",
    offset: false,
  },
  {
    tag: "FINTECH · NON-PROFIT",
    title: "FISBAZ — Zakat Financial Management System",
    description:
      "A specialized accounting platform for Indonesia's National Zakat Board (BAZNAS), generating standardized financial statements for zakat, infaq, and sedekah funds in compliance with PSAK 109 and applicable Indonesian regulations. Features real-time dashboards, fund tracking, and secure data management.",
    image: "/fisbaz.png",
    href: "https://fiskeu.com/login",
    offset: true,
  },
  {
    tag: "GOVTECH · HEALTHCARE FINANCE",
    title: "FISBLUD — BLUD Financial Management System",
    description:
      "An integrated accounting platform for Regional Public Service Agencies (BLUD), primarily serving Puskesmas (community health centers), compliant with Ministry of Health (Kemenkes) and Indonesian government accounting standards. Features hierarchical reporting, allowing sub-district and district health office heads to review consolidated reports across all Puskesmas under their jurisdiction.",
    image: "/fisblud.png",
    href: "https://fisblud.com",
    offset: false,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">Most impactful project</p>

          <h2 className="font-display font-bold text-3xl md:text-4xl text-zinc-900 dark:text-white">
            Explore My Popular <span className="text-accent">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-16">
          {PROJECTS.map((project, i) => (
            <a
              key={project.title}
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
