import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marketing Partnership Proposal — Social Musketeers × Ganapati Builders",
  description:
    "A complete marketing system for Ganapati Builders — performance marketing, SEO, content, design, and reporting under one roof.",
  openGraph: {
    title: "Marketing Partnership Proposal — Social Musketeers × Ganapati Builders",
    description: "One team. One strategy. One point of accountability.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
