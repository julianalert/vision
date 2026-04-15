import TeamSection from "../components/TeamSection";

export const metadata = {
  title: "Team — vision",
  description: "The people behind vision.",
};

export default function TeamPage() {
  return (
    <div>
      {/* NAV */}
      <nav>
        <a href="/" className="nav-logo">vision</a>
        <div className="nav-right">
          <a href="/smb" className="nav-link">For businesses</a>
          <a href="/startups" className="nav-link">For startups</a>
          <a href="/qualify" className="btn-nav">See if I qualify</a>
        </div>
      </nav>

      <TeamSection headingLevel="h1" />

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
