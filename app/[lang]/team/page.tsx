import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import TeamSection from "../../components/TeamSection";
import LanguagePicker from "../../components/LanguagePicker";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: `${dict.teamSection.label} — vision`,
    description: dict.teamSection.sub,
  };
}

export default async function TeamPage({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <div>
      {/* NAV */}
      <nav>
        <a href={`/${lang}`} className="nav-logo">vision</a>
        <div className="nav-right">
          <a href={`/${lang}/smb`} className="nav-link">{dict.nav.forBusinesses}</a>
          <a href={`/${lang}/startups`} className="nav-link">{dict.nav.forStartups}</a>
          <a href={`/${lang}/qualify`} className="btn-nav">{dict.nav.qualify}</a>
          <LanguagePicker lang={lang} />
        </div>
      </nav>

      <TeamSection dict={dict.teamSection} headingLevel="h1" />

      {/* FOOTER */}
      <footer>
        <span className="footer-logo">vision</span>
        <div className="footer-links">
          <a href={`/${lang}/smb`} className="footer-link">{dict.footer.forBusinesses}</a>
          <a href={`/${lang}/startups`} className="footer-link">{dict.footer.forStartups}</a>
          <a href={`/${lang}/qualify`} className="footer-link">{dict.footer.qualify}</a>
        </div>
        <span className="footer-note">{dict.footer.copyright}</span>
      </footer>
    </div>
  );
}
