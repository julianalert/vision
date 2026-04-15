import Image from "next/image";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import { buildAlternates, buildCanonical } from "./meta";
import TaskWidget from "../components/TaskWidget";
import TrustedBy from "../components/TrustedBy";
import TeamSection from "../components/TeamSection";
import FAQ from "../components/FAQ";
import LanguagePicker from "../components/LanguagePicker";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.home.meta.title,
    description: dict.home.meta.description,
    alternates: {
      canonical: buildCanonical(lang),
      languages: buildAlternates().languages,
    },
  };
}

export default async function Home({ params }: Props) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const d = dict.home;

  return (
    <div className="pg-home">
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
        <div className="hero-left">
          <div className="hero-tag">{d.hero.tag}</div>
          <h1>
            {d.hero.h1_start}
            <em>{d.hero.h1_em}</em>
            {d.hero.h1_end}
          </h1>
          <p className="hero-sub">{d.hero.sub}</p>
          <div className="hero-cta">
            <a href="#profiles" className="btn-primary">{d.hero.cta1}</a>
            <a href="#what" className="btn-ghost">{d.hero.cta2}</a>
          </div>
        </div>
        <TaskWidget dict={dict.taskWidget} />
      </section>

      {/* NUMBERS BAR */}
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

      <TrustedBy label={dict.trustedBy.label} />

      {/* WHAT WE DO */}
      <section className="section" id="what">
        <p className="section-label">{d.what.label}</p>
        <h2>
          {d.what.h2_line1}
          <br />
          <em>{d.what.h2_em}</em>
        </h2>
        <p className="section-sub">{d.what.sub}</p>

        <div className="examples-grid">
          {d.what.examples.map((ex, i) => (
            <div key={i} className="example-card">
              <div className="example-before" data-label={d.what.beforeLabel}>
                {ex.before}
              </div>
              <span className="example-arrow">↓</span>
              <div className="example-after" data-label={d.what.afterLabel}>
                {ex.after}
              </div>
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
          <em>{d.how.h2_em}</em>
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

      {/* WHO IT'S FOR */}
      <section className="section" id="profiles">
        <p className="section-label">{d.profiles.label}</p>
        <h2>
          {d.profiles.h2_line1}
          <br />
          <em>{d.profiles.h2_em}</em>
        </h2>
        <p className="section-sub">{d.profiles.sub}</p>

        <div className="profiles-grid">
          <a href={`/${lang}/smb`} className="profile-card">
            <p className="profile-eyebrow">{d.profiles.smb.eyebrow}</p>
            <h3>
              {d.profiles.smb.h3_line1}
              <br />
              <em>{d.profiles.smb.h3_em}</em>
            </h3>
            <p>{d.profiles.smb.p}</p>
            <div className="profile-tags">
              {d.profiles.smb.tags.map((tag) => (
                <span key={tag} className="profile-tag">{tag}</span>
              ))}
            </div>
          </a>

          <a href={`/${lang}/startups`} className="profile-card">
            <p className="profile-eyebrow">{d.profiles.startups.eyebrow}</p>
            <h3>
              {d.profiles.startups.h3_line1}
              <br />
              <em>{d.profiles.startups.h3_em}</em>
            </h3>
            <p>{d.profiles.startups.p}</p>
            <div className="profile-tags">
              {d.profiles.startups.tags.map((tag) => (
                <span key={tag} className="profile-tag">{tag}</span>
              ))}
            </div>
          </a>
        </div>
      </section>

      <div className="divider" />

      {/* TESTIMONIAL */}
      <section className="section">
        <div className="testimonial-block">
          <blockquote>
            &ldquo;{d.testimonial.quote_before}
            <strong>{d.testimonial.quote_strong}</strong>&rdquo;
          </blockquote>
          <div className="t-attr">
            <div className="t-avatar">
              <Image
                src="/images/testimonials/christophel.jpeg"
                alt={d.testimonial.name}
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
              <div className="t-name">{d.testimonial.name}</div>
              <div className="t-role">{d.testimonial.role}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <TeamSection dict={dict.teamSection} />

      {/* CTA */}
      <section className="pg-home-cta" id="cta">
        <h2>
          {d.cta.h2_line1}
          <br />
          <em>{d.cta.h2_em}</em>
        </h2>
        <p>{d.cta.p}</p>
        <a href={`/${lang}/qualify`} className="btn-primary">{d.cta.btn}</a>
        <span className="cta-note">{d.cta.note}</span>
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
