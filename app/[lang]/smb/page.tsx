import { ClipboardList, Bell, BarChart2, FileText, PhoneMissed, Repeat2 } from "lucide-react";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import { buildAlternates, buildCanonical } from "../meta";
import TeamSection from "../../components/TeamSection";
import FAQ from "../../components/FAQ";
import LanguagePicker from "../../components/LanguagePicker";

const problemIcons = [ClipboardList, Bell, BarChart2, FileText, PhoneMissed, Repeat2];

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.smb.meta.title,
    description: dict.smb.meta.description,
    alternates: {
      canonical: buildCanonical(lang, "/smb"),
      languages: buildAlternates("/smb").languages,
    },
  };
}

export default async function SMB({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const d = dict.smb;

  return (
    <div className="pg-smb">
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

      {/* HERO */}
      <section className="hero">
        <div className="hero-tag">{d.hero.tag}</div>
        <h1>
          {d.hero.h1_line1}
          <br />
          {d.hero.h1_line2_before}
          <em>{d.hero.h1_line2_em}</em>
        </h1>
        <p className="hero-sub">{d.hero.sub}</p>
        <div className="hero-cta">
          <a href={`/${lang}/qualify`} className="btn-primary">{d.hero.cta1}</a>
          <a href="#wins" className="btn-ghost">{d.hero.cta2}</a>
        </div>
        <div className="stats-row">
          {d.stats.map((s) => (
            <div key={s.num} className="stat-box">
              <span className="stat-num">{s.num}</span>
              <span className="stat-desc">{s.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* PROBLEMS */}
      <section className="section">
        <p className="section-label">{d.problems.label}</p>
        <h2>{d.problems.h2}</h2>
        <p className="section-sub">{d.problems.sub}</p>

        <div className="problems-grid">
          {d.problems.items.map((item, i) => {
            const Icon = problemIcons[i];
            return (
              <div key={i} className="problem-card">
                <span className="problem-emoji">{Icon && <Icon />}</span>
                <h3>{item.h3}</h3>
                <p>{item.p}</p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="divider" />

      {/* HOW IT WORKS */}
      <section className="section" id="how">
        <div className="how-section">
          <div className="how-sticky">
            <p className="section-label">{d.how.label}</p>
            <h2>
              {d.how.h2_line1}
              <br />
              <em>{d.how.h2_em}</em>
            </h2>
            <p className="section-sub">{d.how.sub}</p>
          </div>

          <div className="how-steps">
            {d.how.steps.map((step) => (
              <div key={step.num} className="how-step">
                <span className="step-num">{step.num}</span>
                <div className="step-content">
                  <h3>{step.h3}</h3>
                  <p>{step.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* QUICK WINS */}
      <section className="section" id="wins">
        <p className="section-label">{d.wins.label}</p>
        <h2>
          {d.wins.h2_before}
          <em>{d.wins.h2_em}</em>
        </h2>
        <p className="section-sub">{d.wins.sub}</p>

        <div className="wins-grid">
          {d.wins.items.map((item, i) => (
            <div key={i} className="win-card">
              <span className="win-tag">{item.tag}</span>
              <h3>{item.h3}</h3>
              <p>{item.p}</p>
              <div className="win-saving">{item.saving}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* TESTIMONIAL */}
      <section className="section">
        <div className="testimonial">
          <blockquote>&ldquo;{d.testimonial.quote}&rdquo;</blockquote>
          <p className="testimonial-attr">
            <strong>{d.testimonial.attr.split(",")[0]}</strong>
            {d.testimonial.attr.slice(d.testimonial.attr.indexOf(","))}
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* INDUSTRIES */}
      <section className="section">
        <p className="section-label">{d.industries.label}</p>
        <h2>
          {d.industries.h2_before}
          <em>{d.industries.h2_em}</em>
        </h2>
        <p className="section-sub">{d.industries.sub}</p>

        <div className="industries-wrap">
          {d.industries.items.map((item) => (
            <span key={item} className="ind-pill">{item}</span>
          ))}
        </div>
      </section>

      <div className="divider" />

      <TeamSection dict={dict.teamSection} />

      {/* CTA */}
      <section className="cta-section" id="cta">
        <h2>
          {d.cta.h2_line1}
          <br />
          <em>{d.cta.h2_em}</em>
        </h2>
        <p>{d.cta.p}</p>
        <a href={`/${lang}/qualify`} className="btn-primary">{d.cta.btn}</a>
        <p className="cta-note">{d.cta.note}</p>
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
