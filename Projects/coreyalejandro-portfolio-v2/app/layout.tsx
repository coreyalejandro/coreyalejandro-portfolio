import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corey Alejandro — AI Safety + Societal Impact Portfolio",
  description:
    "Research infrastructure for human-AI interaction measurement, runtime verification, behavioral safety, and differential societal impact.",
  openGraph: {
    title: "Corey Alejandro — AI Safety + Societal Impact Portfolio",
    description:
      "Runtime verification for AI safety and behavioral observability for societal impact.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
