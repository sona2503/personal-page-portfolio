"use client";

import { useEffect } from "react";

/**
 * Menjalankan IntersectionObserver sekali saat mount untuk menambahkan
 * class "in" ke semua elemen ber-class "reveal" saat masuk viewport.
 * Panggil hook ini SEKALI saja di level tertinggi (misal app/page.tsx),
 * bukan di komponen yang bisa re-render/remount berkali-kali.
 */
export function useRevealAnimation() {
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
}
