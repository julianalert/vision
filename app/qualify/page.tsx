import QualifyForm from "../components/QualifyForm";

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
