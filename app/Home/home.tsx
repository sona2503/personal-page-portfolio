"use client";

import { useEffect, useState } from "react";

const NAV_IDS = ["hero", "experience", "portfolio", "skills", "certificates", "contact"];

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: ganti dengan pemanggilan API/route handler kamu, mis. fetch("/api/contact", {...})
    console.log(form);
    setStatus("sent");
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fname" className="block text-xs font-medium text-zinc-400 mb-1.5">
              Name *
            </label>
            <input
              type="text"
              id="fname"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              required
              autoComplete="name"
              className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label htmlFor="femail" className="block text-xs font-medium text-zinc-400 mb-1.5">
              Email *
            </label>
            <input
              type="email"
              id="femail"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jane@company.com"
              required
              autoComplete="email"
              className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>
        <div>
          <label htmlFor="fsubject" className="block text-xs font-medium text-zinc-400 mb-1.5">
            Subject
          </label>
          <input
            type="text"
            id="fsubject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Project inquiry"
            className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label htmlFor="fmessage" className="block text-xs font-medium text-zinc-400 mb-1.5">
            Message *
          </label>
          <textarea
            id="fmessage"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            required
            className="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="shimmer w-full bg-accent text-white font-display font-bold text-sm py-3.5 rounded-xl hover:bg-accent-light transition-colors disabled:opacity-60"
        >
          {status === "sent" ? "Message sent ✓" : status === "sending" ? "Sending..." : "Send message →"}
        </button>
      </div>
    </form>
  );
}

function CertificateAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const certificates = [
    {
      title: "Machine Learning Professional Certification",
      issuer: "Rapidminer",
      year: "2023",
      image: "/machine-learning.jpg",
    },
    {
      title: "Data Engineering Professional Certification",
      issuer: "Rapidminer",
      year: "2022",
      image: "/data-enginering.jpeg",
    },
  ];

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

export default function Home() {
  const [dark, setDark] = useState(false);
  const [mm, setMm] = useState(false);
  const [sc, setSc] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initialDark =
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(initialDark);
    setYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const onScroll = () => {
      setSc(window.scrollY > 20);
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 60;
      if (atBottom) {
        setActiveSection("contact");
        return;
      }
      for (const id of [...NAV_IDS].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActiveSection(id);
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // reveal-on-scroll -- INI YANG BIKIN KONTEN MUNCUL
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const navLinkClass = (id: string) =>
    `nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors ${
      activeSection === id ? "on !text-zinc-900 dark:!text-white" : ""
    }`;

  return (
    <>
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          sc ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm shadow-black/5" : ""
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Main navigation">
          <a href="#hero" className="font-display font-bold text-xl tracking-tight relative z-10">
            <span className="text-zinc-900 dark:text-white">Sona</span>{" "}
            <span className="text-accent">Rianda</span>
          </a>

          <ul className="hidden md:flex items-center gap-8 text-sm" role="list">
            {NAV_IDS.slice(1).map((id) => (
              <li key={id}>
                <a href={`#${id}`} className={navLinkClass(id)}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              aria-label={dark ? "Light mode" : "Dark mode"}
            >
              {!dark ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              )}
            </button>

            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 shimmer bg-accent text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-accent-light transition-colors"
            >
              Hire me
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <button
              onClick={() => setMm(!mm)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800"
              aria-expanded={mm}
              aria-label="Toggle menu"
            >
              {!mm ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {mm && (
          <div className="md:hidden bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
            <ul className="flex flex-col px-6 py-5 gap-4 text-sm font-medium" role="list">
              {NAV_IDS.slice(1).map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setMm(false)}
                    className="block text-zinc-700 dark:text-zinc-300 hover:text-accent transition-colors"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-zinc-100 dark:border-zinc-900">
                <a
                  href="#contact"
                  onClick={() => setMm(false)}
                  className="inline-flex shimmer bg-accent text-white font-medium text-sm px-5 py-2.5 rounded-full"
                >
                  Hire me →
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-zinc-200/50 dark:bg-zinc-800/30 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="reveal text-sm font-medium text-accent tracking-widest uppercase mb-4">Available for project</p>
                <h1 className="reveal d1 font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-zinc-900 dark:text-white mb-6">
                  Hi, I&apos;m <span className="text-accent">Sona Rianda</span>
                </h1>
                <p className="reveal d2 text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-md mb-10">
                  <strong className="font-medium text-zinc-700 dark:text-zinc-300">Software Engineer &amp; IT Consultant</strong>{" "}
                  specializing in financial information systems. 3+ years turning complex business logic into clean,
                  production-grade code with ASP.NET Core, Next.js, Node.js, React, and MySQL.
                </p>
                <div className="reveal d3 flex flex-wrap gap-4">
                  <a
                    href="/cv-sona-rianda.pdf"
                    download
                    className="shimmer inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors text-sm"
                  >
                    Download my CV
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                    </svg>
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-sm"
                  >
                    Contact me
                  </a>
                </div>
                <div className="reveal d4 flex gap-4 mt-14 pt-8 border-t border-zinc-100 dark:border-zinc-900">
                  <a
                    href="https://github.com/sona2503"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-accent hover:text-accent transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com/sona_bin_eman?stkn=bjRyeWpxdWVvejlt"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-accent hover:text-accent transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth={2} />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.5 6.5h.01" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-accent hover:text-accent transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="reveal d2 flex justify-center md:justify-end">
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  <div className="pf w-full h-full rounded-3xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/profile.jpeg"
                      alt="Sona Rianda — Software Engineer & IT Consultant"
                      loading="eager"
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-accent text-white font-display font-bold text-sm px-4 py-2.5 rounded-2xl shadow-lg">
                    Open to projects
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
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

        {/* PORTFOLIO */}
        <section id="portfolio" className="py-24 bg-white dark:bg-zinc-900/40">
          <div className="max-w-6xl mx-auto px-6">
            <div className="reveal text-center mb-16">
              <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">Most impactful project</p>

              <h2 className="font-display font-bold text-3xl md:text-4xl text-zinc-900 dark:text-white">
                Explore My Popular <span className="text-accent">Projects</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-x-10 gap-y-16">
              {[
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
                    "A specialized accounting platform for Indonesia's National Zakat Board (BAZNAS), generating standardized financial statements for zakat, infaq, and sedekah funds in compliance with PSAK 409 and applicable Indonesian regulations. Features real-time dashboards, fund tracking, and secure data management.",
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
              ].map((project, i) => (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel ="noopener noreferrer"
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

        {/* SKILLS */}
        <section id="skills" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
          <div className="max-w-6xl mx-auto px-6">
            <div className="reveal text-center mb-14">
              <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">
                My <span className="text-accent">Stack</span>
              </p>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">Professional Skills</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                { name: "Javascript", slug: "javascript" },
                { name: "Typescript", slug: "typescript" },
                { name: "Python", slug: "python" },
                { name: "PHP", slug: "php" },
                { name: "Next Js", slug: "nextdotjs" },
                { name: "React", slug: "react" },
                { name: "Node.js", slug: "nodedotjs" },
                { name: "Angular", slug: "angular" },
                { name: "Laravel", slug: "laravel" },
                { name: "Figma", slug: "figma" },
                { name: ".NET", slug: "dotnet" },
                { name: "Tailwind CSS", slug: "tailwindcss" },
                { name: "MySQL", slug: "mysql" },
                { name: "Git", slug: "git" },
                { name: "Inertia.js", slug: "inertia" },
              ].map((skill, i) => (
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

        {/* CERTIFICATES */}
        <section id="certificates" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="reveal text-center mb-14">
              <p className="text-xs font-medium text-accent tracking-widest uppercase mb-3">Certificate</p>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
                Professional <span className="text-accent">Certificate</span>
              </h2>
            </div>

            <CertificateAccordion />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-zinc-900 dark:bg-zinc-800 rounded-3xl p-10 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />

              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">Get in touch</p>
                  <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-5">
                    Let&apos;s work
                    <br />
                    together
                  </h2>
                  <p className="reveal d2 text-zinc-400 leading-relaxed mb-8">
                    I&apos;m open to software development and IT consulting engagements, short or long-term. New system, feature addition, or just a second pair of eyes — let&apos;s talk.
                  </p>

                  <div className="reveal d3 flex flex-col gap-4">
                    <a href="mailto:sonarianda01@gmail.com" className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                      <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <span className="text-sm">sonarianda01@gmail.com</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sona-rianda-s-kom-a82b71237/"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                    >
                      <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </span>
                      <span className="text-sm">linkedin.com/sona-rianda</span>
                    </a>
                    <a
                      href="https://github.com/sona2503"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
                    >
                      <span className="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </span>
                      <span className="text-sm">github.com/sona2503</span>
                    </a>
                  </div>
                </div>

                <div className="reveal d2">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-100 dark:border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-400">
            © <span>{year}</span> Sona Rianda. All rights reserved.
          </p>
          <p className="text-xs text-zinc-500">
            Built with{" "}
            <a href="https://tailwindcss.com" rel="noopener noreferrer" target="_blank" className="hover:text-accent transition-colors">
              Tailwind CSS
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}