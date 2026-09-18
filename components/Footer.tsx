"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
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
  );
}
