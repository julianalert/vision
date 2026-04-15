import Image from "next/image";
import { Zap, Mail, RefreshCw, PenLine, Target, BarChart2 } from "lucide-react";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import { buildAlternates, buildCanonical } from "../meta";
import TeamSection from "../../components/TeamSection";
import FAQ from "../../components/FAQ";
import LanguagePicker from "../../components/LanguagePicker";

const serviceIcons = [Zap, Mail, RefreshCw, PenLine, Target, BarChart2];

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.startups.meta.title,
    description: dict.startups.meta.description,
    alternates: {
      canonical: buildCanonical(lang, "/startups"),
      languages: buildAlternates("/startups").languages,
    },
  };
}

export default async function Startups({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const d = dict.startups;

  return (
    <>
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
          <a href="#results" className="btn-ghost">{d.hero.cta2}</a>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-section">
        <div className="stats-inner">
          {d.stats.map((s) => (
            <div key={s.num} className="stat-box">
              <span className="stat-num">{s.num}</span>
              <span className="stat-desc">{s.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PAIN POINTS */}
      <section className="section">
        <p className="section-label">{d.pain.label}</p>
        <h2>
          {d.pain.h2_before}
          <em>{d.pain.h2_em}</em>
        </h2>
        <p className="section-sub">{d.pain.sub}</p>

        <div className="pain-grid">
          {d.pain.items.map((item) => (
            <div key={item.num} className="pain-card" data-num={item.num}>
              <h3>{item.h3}</h3>
              <p>{item.p}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* HOW IT WORKS */}
      <section className="section" id="how">
        <p className="section-label">{d.how.label}</p>
        <h2>
          {d.how.h2_line1}
          <br />
          <span className="dim">{d.how.h2_dim}</span>
        </h2>
        <p className="section-sub">{d.how.sub}</p>

        <div className="how-grid">
          {d.how.steps.map((step) => (
            <div key={step.num} className="how-card">
              <div className="how-card-num">{step.num}</div>
              <h3>{step.h3}</h3>
              <p>{step.p}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* SERVICES */}
      <section className="section" id="services">
        <p className="section-label">{d.services.label}</p>
        <h2>
          {d.services.h2_line1}
          <br />
          <span className="dim">{d.services.h2_dim}</span>
        </h2>
        <p className="section-sub">{d.services.sub}</p>

        <div className="services-grid">
          {d.services.items.map((item, i) => {
            const Icon = serviceIcons[i];
            return (
              <div key={i} className="service-card">
                <div className="service-icon">{Icon && <Icon />}</div>
                <h3>{item.h3}</h3>
                <p>{item.p}</p>
                <span className="service-tag">{item.tag}</span>
              </div>
            );
          })}
        </div>
      </section>

      <div className="divider" />

      {/* RESULTS */}
      <section className="section" id="results">
        <p className="section-label">{d.results.label}</p>
        <h2>
          {d.results.h2_before}
          <em>{d.results.h2_em}</em>
        </h2>
        <p className="section-sub">{d.results.sub}</p>

        <div className="results-grid">
          {d.results.items.map((item, i) => (
            <div key={i} className="result-card">
              <span className="result-tag">{item.tag}</span>
              <div className="result-metric">{item.metric}</div>
              <div className="result-label">{item.label}</div>
              <div className="result-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* TESTIMONIALS */}
      <section className="section">
        <p className="section-label">{d.testimonials.label}</p>
        <h2>{d.testimonials.h2}</h2>
        <p className="section-sub">{d.testimonials.sub}</p>

        <div className="testimonial-grid">
          {d.testimonials.items.map((t, i) => (
            <div key={i} className="testimonial-card">
              <blockquote>
                &ldquo;{t.quote_before}
                <strong>{t.quote_strong}</strong>&rdquo;
              </blockquote>
              <div className="t-attr">
                <div className="t-avatar">
                  <Image
                    src={i === 0 ? "/images/testimonials/simran.png" : "/images/testimonials/christophel.jpeg"}
                    alt={t.name}
                    width={36}
                    height={36}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* FOR WHO */}
      <section className="section">
        <p className="section-label">{d.forWho.label}</p>
        <h2>
          {d.forWho.h2_line1}
          <br />
          <span className="dim">{d.forWho.h2_dim}</span>
        </h2>
        <p className="section-sub">{d.forWho.sub}</p>

        <div className="for-who-grid">
          <div className="for-who-card">
            <h3>
              {d.forWho.rightCard.h3_before}
              <em>{d.forWho.rightCard.h3_em}</em>
            </h3>
            <ul className="for-who-list">
              {d.forWho.rightCard.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="for-who-card not-for">
            <h3>
              {d.forWho.wrongCard.h3_before}
              <span className="dim">{d.forWho.wrongCard.h3_dim}</span>
              {d.forWho.wrongCard.h3_after}
            </h3>
            <ul className="for-who-list">
              {d.forWho.wrongCard.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="divider" />

      <TeamSection dict={dict.teamSection} />

      {/* CTA */}
      <section className="cta-section" id="cta">
        <div>
          <h2>
            {d.cta.h2_line1}
            <br />
            <em>{d.cta.h2_em}</em>
          </h2>
          <p>{d.cta.p}</p>
        </div>
        <div className="cta-right">
          <a href={`/${lang}/qualify`} className="btn-light">{d.cta.btn}</a>
          <span className="cta-note">{d.cta.note}</span>
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
    </>
  );
}
