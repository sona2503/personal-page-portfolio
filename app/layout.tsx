import { PT_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Sona Rianda — Freelance UI/UX Designer & Frontend Dev",
  description:
    "Sona Rianda — Freelance UI/UX Designer and Frontend Developer. Fast, clean and accessible digital products.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${ptSans.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased font-body">
        {children}
      </body>
    </html>
  );
}