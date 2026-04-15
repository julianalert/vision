import { locales } from "./dictionaries";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://visionbds.com";

/**
 * Build the `alternates` block for Next.js `generateMetadata`.
 * Pass the path WITHOUT locale prefix, e.g. "" for home, "/smb" for the SMB page.
 */
export function buildAlternates(path: string = "") {
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${siteUrl}/${l}${path}`])
  ) as Record<string, string>;

  // x-default points to the English version (the default locale)
  languages["x-default"] = `${siteUrl}/en${path}`;

  return {
    canonical: undefined, // let each page set its own canonical via the lang param
    languages,
  };
}

export function buildCanonical(lang: string, path: string = "") {
  return `${siteUrl}/${lang}${path}`;
}
