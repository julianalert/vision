import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import QualifyForm from "../../components/QualifyForm";
import FAQ from "../../components/FAQ";
import LanguagePicker from "../../components/LanguagePicker";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: dict.qualify.meta.title, description: dict.qualify.meta.description };
}

export default async function QualifyPage({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const d = dict.qualify;

  return (
    <div className="pg-qualify">
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

      {/* FORM */}
      <section className="qualify-section">
        <div className="qualify-intro">
          <p className="section-label">{d.intro.label}</p>
          <h1>{d.intro.h1}</h1>
          <p className="qualify-sub">{d.intro.sub}</p>
        </div>

        <div className="qualify-card">
          <QualifyForm dict={d.form} lang={lang} />
        </div>
      </section>

      <FAQ
        items={d.faqItems}
        label={dict.faqSection.label}
        title={dict.faqSection.title}
      />

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
