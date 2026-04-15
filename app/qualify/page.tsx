import QualifyForm from "../components/QualifyForm";
import FAQ from "../components/FAQ";

const qualifyFAQ = [
  {
    q: "What happens after I submit this form?",
    a: "We review your submission personally, usually within 1 business day. If we think we can genuinely help, we'll reach out to schedule a 30-minute call. If we don't think it's the right fit, we'll tell you that too.",
  },
  {
    q: "Is the audit really free? What's the catch?",
    a: "It's free. No catch. We do it because it's the fastest way to figure out if working together makes sense, for both sides. If it's not a fit, you still walk away knowing exactly where you're losing time.",
  },
  {
    q: "How long is the audit call?",
    a: "30 minutes. You walk us through a typical week, we ask a few questions, and by the end you'll have a clear picture of what's automatable and what the impact would be.",
  },
  {
    q: "Will I be pressured to sign anything?",
    a: "No. The audit is a conversation. We'll share what we found and what we'd recommend. If you want to move forward, great. If not, no hard feelings and no follow-up emails chasing you.",
  },
  {
    q: "What if I'm not sure which type of business I am (SMB vs startup)?",
    a: "Don't worry about it. Just describe your situation in the form. We'll figure out the right approach based on what you tell us.",
  },
];

export const metadata = {
  title: "See if you qualify — vision",
  description:
    "Tell us a bit about your business and we'll let you know if we're a good fit.",
};

export default function QualifyPage() {
  return (
    <div className="pg-qualify">
      {/* NAV */}
      <nav>
        <a href="/" className="nav-logo">vision</a>
        <div className="nav-right">
          <a href="/smb" className="nav-link">For businesses</a>
          <a href="/startups" className="nav-link">For startups</a>
          <a href="/qualify" className="btn-nav">See if I qualify</a>
        </div>
      </nav>

      {/* FORM */}
      <section className="qualify-section">
        <div className="qualify-intro">
          <p className="section-label">Quick application</p>
          <h1>See if you qualify</h1>
          <p className="qualify-sub">
            Fill in a few details about your business. We review every
            submission personally and will only reach out if we think we can
            genuinely help. No pitch, no spam.
          </p>
        </div>

        <div className="qualify-card">
          <QualifyForm />
        </div>
      </section>

      <FAQ items={qualifyFAQ} />

      {/* FOOTER */}
      <footer>
        <span className="footer-logo">vision</span>
        <div className="footer-links">
          <a href="/smb" className="footer-link">For businesses</a>
          <a href="/startups" className="footer-link">For startups</a>
          <a href="/qualify" className="footer-link">See if I qualify</a>
        </div>
        <span className="footer-note">© 2026 vision. All rights reserved.</span>
      </footer>
    </div>
  );
}
