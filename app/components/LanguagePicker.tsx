"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const locales = ["en", "fr"] as const;
type Locale = (typeof locales)[number];

export default function LanguagePicker({ lang }: { lang: string }) {
  const pathname = usePathname();

  const getLocalizedPath = (targetLang: Locale): string => {
    // pathname looks like /en/smb or /fr/qualify
    const segments = pathname.split("/");
    segments[1] = targetLang;
    return segments.join("/") || "/";
  };

  return (
    <div className="lang-picker">
      {locales.map((l) => (
        <Link
          key={l}
          href={getLocalizedPath(l)}
          className={`lang-option${l === lang ? " lang-active" : ""}`}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
