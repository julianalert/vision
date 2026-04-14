import TaskWidget from "./components/TaskWidget";

export default function Home() {
  return (
    <div className="pg-home">
      {/* NAV */}
      <nav>
        <a href="/" className="nav-logo">vision</a>
        <div className="nav-right">
          <a href="/smb" className="nav-link">For businesses</a>
          <a href="/startups" className="nav-link">For startups</a>
          <a href="#cta" className="btn-nav">Get a free audit</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-tag">AI automation agency</div>
          <h1>
            We make the repetitive parts of your business{" "}
            <em>disappear</em>
          </h1>
          <p className="hero-sub">
            Whatever your team does manually, over and over — we automate it.
            So the people you pay to think can stop doing the work you pay
            machines for.
          </p>
          <div className="hero-cta">
            <a href="#profiles" className="btn-primary">
              Find what&apos;s right for you →
            </a>
            <a href="#what" className="btn-ghost">
              See what we do
            </a>
          </div>
        </div>
        <TaskWidget />
      </section>

      <div className="divider" />

      {/* NUMBERS BAR */}
      <div className="stats-section">
        <div className="stats-inner">
          <div className="stat-box">
            <span className="stat-num">12+ hrs</span>
            <span className="stat-desc">saved per week on average</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">3 weeks</span>
            <span className="stat-desc">to first automation live</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">$30K+</span>
            <span className="stat-desc">in annual labor saved per client</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">zero</span>
            <span className="stat-desc">new software your team needs to learn</span>
          </div>
        </div>
      </div>

      {/* WHAT WE DO */}
      <section className="section" id="what">
        <p className="section-label">What we do</p>
        <h2>
          We take tasks off people&apos;s plates.
          <br />
          <em>Permanently.</em>
        </h2>
        <p className="section-sub">
          We don&apos;t sell &ldquo;AI strategy.&rdquo; We build the specific
          thing that makes a specific task stop requiring a human.
        </p>

        <div className="examples-grid">
          <div className="example-card">
            <div className="example-before">
              Someone manually fills the same client info into 4 different forms
            </div>
            <span className="example-arrow">↓</span>
            <div className="example-after">
              Client fills it once. It populates everywhere automatically.
            </div>
          </div>
          <div className="example-card">
            <div className="example-before">
              Leads sit in the inbox for hours before anyone responds
            </div>
            <span className="example-arrow">↓</span>
            <div className="example-after">
              Every lead gets a personalised reply in under 2 minutes.
            </div>
          </div>
          <div className="example-card">
            <div className="example-before">
              Monday morning starts with copy-pasting numbers into a spreadsheet
            </div>
            <span className="example-arrow">↓</span>
            <div className="example-after">
              Your report is waiting in your inbox before you wake up.
            </div>
          </div>
          <div className="example-card">
            <div className="example-before">
              Someone has to remember to follow up with every prospect manually
            </div>
            <span className="example-arrow">↓</span>
            <div className="example-after">
              Follow-ups go out at the right time, automatically, for every
              lead.
            </div>
          </div>
          <div className="example-card">
            <div className="example-before">
              New client onboarding is different every time depending on who&apos;s
              free
            </div>
            <span className="example-arrow">↓</span>
            <div className="example-after">
              Every client gets the same smooth experience, triggered
              automatically.
            </div>
          </div>
          <div className="example-card">
            <div className="example-before">
              Invoicing takes half a day every week because it&apos;s all done by
              hand
            </div>
            <span className="example-arrow">↓</span>
            <div className="example-after">
              Job completed → invoice created → invoice sent. Nobody touches it.
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* HOW IT WORKS */}
      <section className="section" id="how">
        <p className="section-label">How it works</p>
        <h2>
          Simple process.
          <br />
          <em>Real results in weeks.</em>
        </h2>
        <p className="section-sub">
          We&apos;ve done this enough times to make it fast. You don&apos;t need to
          figure out what to automate — that&apos;s our job.
        </p>

        <div className="how-grid">
          <div className="how-card">
            <div className="how-card-num">01</div>
            <h3>Free audit — we find where you&apos;re bleeding hours</h3>
            <p>
              One 45-minute call. You walk us through a typical week. We
              identify the 3 tasks that are costing you the most time and are
              easiest to automate. No commitment, no jargon.
            </p>
          </div>
          <div className="how-card">
            <div className="how-card-num">02</div>
            <h3>You approve the plan before we build anything</h3>
            <p>
              We send you a plain-English document: here&apos;s the task, here&apos;s how
              we&apos;d automate it, here&apos;s how many hours a week that frees up. You
              sign off before a single line of code is written.
            </p>
          </div>
          <div className="how-card">
            <div className="how-card-num">03</div>
            <h3>We build it, it runs, you forget it exists</h3>
            <p>
              Within 3 weeks the first automation is live. Your team doesn&apos;t
              need to change how they work. We monitor it and keep it running.
              The task just stops being a task.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* WHO IT'S FOR */}
      <section className="section" id="profiles">
        <p className="section-label">Who it&apos;s for</p>
        <h2>
          Two kinds of businesses.
          <br />
          <em>Both wasting hours they shouldn&apos;t be.</em>
        </h2>
        <p className="section-sub">
          We&apos;ve built solutions for both. Pick whichever sounds more like you
          — the page will speak your language.
        </p>

        <div className="profiles-grid">
          <a href="/smb" className="profile-card">
            <p className="profile-eyebrow">For small &amp; medium businesses</p>
            <h3>
              You run the business.
              <br />
              <em>Stop running the admin.</em>
            </h3>
            <p>
              Plumbers, agencies, retailers, practices, studios. If your team is
              doing the same things manually every week — invoicing, reporting,
              onboarding, following up — we make those stop.
            </p>
            <div className="profile-tags">
              <span className="profile-tag">Invoicing</span>
              <span className="profile-tag">Lead follow-up</span>
              <span className="profile-tag">Reporting</span>
              <span className="profile-tag">Client onboarding</span>
              <span className="profile-tag">Scheduling</span>
            </div>
          </a>

          <a href="/startups" className="profile-card">
            <p className="profile-eyebrow">For early-stage &amp; scaling startups</p>
            <h3>
              Stop doing marketing
              <br />
              <em>at midnight.</em>
            </h3>
            <p>
              Seed to Series A. If you&apos;re a founder still writing cold emails
              yourself, or your one marketer is drowning in tasks a system
              should handle — we build the engine so you don&apos;t have to run it.
            </p>
            <div className="profile-tags">
              <span className="profile-tag">Outbound prospecting</span>
              <span className="profile-tag">Lead nurturing</span>
              <span className="profile-tag">Content engine</span>
              <span className="profile-tag">User onboarding</span>
              <span className="profile-tag">Attribution</span>
            </div>
          </a>
        </div>
      </section>

      <div className="divider" />

      {/* TESTIMONIAL */}
      <section className="section">
        <div className="testimonial-block">
          <blockquote>
            &ldquo;I didn&apos;t care if it was AI or someone in an office somewhere. I
            just wanted to stop having my team do the same thing four times
            every time we got a new customer. They fixed it in two weeks. I
            haven&apos;t thought about it since.&rdquo;
          </blockquote>
          <div className="t-attr">
            <div className="t-avatar">SR</div>
            <div>
              <div className="t-name">Sarah R.</div>
              <div className="t-role">
                Owner, independent retail business — 8 employees
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pg-home-cta" id="cta">
        <h2>
          Not sure where to start?
          <br />
          <em>That&apos;s what the audit is for.</em>
        </h2>
        <p>
          Book a free 45-minute call. We&apos;ll find the tasks eating your team&apos;s
          time and tell you exactly what&apos;s automatable, how long it takes, and
          what it saves. No pitch, no commitment.
        </p>
        <a href="#" className="btn-primary">
          Book my free audit →
        </a>
        <span className="cta-note">
          45 minutes. No commitment. Just a straight answer.
        </span>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="footer-logo">vision</span>
        <div className="footer-links">
          <a href="/smb" className="footer-link">For businesses</a>
          <a href="/startups" className="footer-link">For startups</a>
          <a href="#cta" className="footer-link">Get a free audit</a>
        </div>
        <span className="footer-note">© 2026 vision. All rights reserved.</span>
      </footer>
    </div>
  );
}
