import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "../globals.css";
import { locales, hasLocale } from "./dictionaries";
import { notFound } from "next/navigation";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "vision.",
  description: "AI automation agency.",
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${instrumentSerif.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
