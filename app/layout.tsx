import type { Metadata } from "next";
import { Nunito, Rubik } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marketing Partnership Proposal — Social Musketeers × Ganapati Builders",
  description:
    "A complete marketing system for Ganapati Builders — performance marketing, SEO, content, design, and reporting under one roof.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} ${rubik.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
