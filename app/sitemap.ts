import type { MetadataRoute } from "next";
import { locales } from "./[lang]/dictionaries";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://visionbds.com";

const routes = ["", "/smb", "/startups", "/qualify", "/team"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((lang) =>
    routes.map((route) => ({
      url: `${siteUrl}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    }))
  );
}
