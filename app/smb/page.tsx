export default function SMB() {
  return (
    <div className="pg-smb">
      {/* NAV */}
      <nav>
        <span className="nav-logo">vision</span>
        <div className="nav-right">
          <a href="#how" className="nav-link">How it works</a>
          <a href="#wins" className="nav-link">Examples</a>
          <a href="#audit" className="btn-nav">Get a free audit</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-tag">For small and mid-size businesses</div>

        <h1>
          Stop losing hours to tasks
          <br />
          your team <em>shouldn&apos;t be doing</em>
        </h1>

        <p className="hero-sub">
          We find the repetitive work bleeding your business dry and make it disappear.
          No jargon, no fluff. Just time and money back.
        </p>

        <div className="hero-cta">
          <a href="#audit" className="btn-primary">Show me what I can save →</a>
          <a href="#wins" className="btn-ghost">See real examples</a>
        </div>

        <div className="stats-row">
          <div className="stat-box">
            <span className="stat-num">12+ hrs</span>
            <span className="stat-desc">saved per week, on average</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">6 weeks</span>
            <span className="stat-desc">to first result, guaranteed</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">$30K+</span>
            <span className="stat-desc">in annual labor saved per client</span>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PROBLEMS */}
      <section className="section">
        <p className="section-label">The problem</p>
        <h2>Does any of this sound familiar?</h2>
        <p className="section-sub">
          These aren&apos;t &ldquo;business problems.&rdquo; They&apos;re just hours being quietly stolen from you
          every single week.
        </p>

        <div className="problems-grid">
          <div className="problem-card">
            <span className="problem-emoji">📋</span>
            <h3>Copying the same data into multiple places</h3>
            <p>Your team fills in the same client info in 3 different systems. Every single time. Manually.</p>
          </div>
          <div className="problem-card">
            <span className="problem-emoji">📧</span>
            <h3>Chasing people for updates</h3>
            <p>Half your week is follow-up emails and Slack messages just checking if things got done.</p>
          </div>
          <div className="problem-card">
            <span className="problem-emoji">📊</span>
            <h3>Building the same report every Monday morning</h3>
            <p>Someone sits down and copy-pastes numbers into a spreadsheet. Before any real work starts.</p>
          </div>
          <div className="problem-card">
            <span className="problem-emoji">🧾</span>
            <h3>Invoicing that eats your evenings</h3>
            <p>Creating, sending, and chasing invoices takes hours every single week.</p>
          </div>
          <div className="problem-card">
            <span className="problem-emoji">📞</span>
            <h3>Leads that fall through the cracks</h3>
            <p>New enquiries come in and someone has to manually log them, or they just get lost.</p>
          </div>
          <div className="problem-card">
            <span className="problem-emoji">🔁</span>
            <h3>&ldquo;We always do it this way&rdquo;</h3>
            <p>If your team has a routine they do the same way every time, it can probably run itself.</p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* HOW IT WORKS */}
      <section className="section" id="how">
        <div className="how-section">
          <div className="how-sticky">
            <p className="section-label">How it works</p>
            <h2>
              Three steps,
              <br />
              then it <em>runs itself</em>
            </h2>
            <p className="section-sub">
              We don&apos;t ask you to change how you work or learn new software. We just remove the
              parts that shouldn&apos;t require a human in the first place.
            </p>
          </div>

          <div className="how-steps">
            <div className="how-step">
              <span className="step-num">1</span>
              <div className="step-content">
                <h3>We audit your biggest time-wasters, free</h3>
                <p>
                  One 30-minute call. You walk us through your week. We tell you exactly where
                  you&apos;re bleeding hours and what it would take to fix it. No commitment, no jargon.
                </p>
              </div>
            </div>
            <div className="how-step">
              <span className="step-num">2</span>
              <div className="step-content">
                <h3>You approve before we build anything</h3>
                <p>
                  We send you a plain-English breakdown: here&apos;s the task, here&apos;s how it gets
                  automated, here&apos;s how many hours a week that frees up. You decide what to move
                  forward with.
                </p>
              </div>
            </div>
            <div className="how-step">
              <span className="step-num">3</span>
              <div className="step-content">
                <h3>We build it, hand it over, and it just works</h3>
                <p>
                  Within weeks, that task is just gone. Your team doesn&apos;t need to learn anything
                  new. We stay on to make sure it keeps running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* QUICK WINS */}
      <section className="section" id="wins">
        <p className="section-label">Quick wins</p>
        <h2>
          Real problems we&apos;ve <em>already solved</em>
        </h2>
        <p className="section-sub">
          Not hypothetical case studies. Actual workflows we removed for businesses like yours.
        </p>

        <div className="wins-grid">
          <div className="win-card">
            <span className="win-tag">Retail / Finance</span>
            <h3>One form, filled everywhere</h3>
            <p>
              Client fills in their details once. A bot automatically fills the same info into 4
              different finance applications. No one touches it again.
            </p>
            <div className="win-saving">Saves 3 hrs per client application</div>
          </div>
          <div className="win-card">
            <span className="win-tag">Services</span>
            <h3>Invoices that send themselves</h3>
            <p>
              When a job is marked complete, the invoice gets created and sent automatically. The
              end-of-week invoice pile just disappears.
            </p>
            <div className="win-saving">Saves 4 hrs every week</div>
          </div>
          <div className="win-card">
            <span className="win-tag">Any business</span>
            <h3>Reports that write themselves</h3>
            <p>
              Every morning, your key numbers are compiled and waiting in your inbox. No
              spreadsheet, no copy-pasting, no mental load.
            </p>
            <div className="win-saving">Saves 5 hrs every week</div>
          </div>
          <div className="win-card">
            <span className="win-tag">Tradespeople</span>
            <h3>Enquiries logged automatically</h3>
            <p>
              New messages hit your inbox and get instantly added to your job list with all the
              details extracted. Nothing falls through the cracks.
            </p>
            <div className="win-saving">Zero missed leads</div>
          </div>
          <div className="win-card">
            <span className="win-tag">Post-production</span>
            <h3>End-of-day recap, automated</h3>
            <p>
              Room usage, job status, and notes pulled together and emailed to the team every
              evening. Without anyone doing it manually.
            </p>
            <div className="win-saving">Saves 1 hr every day</div>
          </div>
          <div className="win-card">
            <span className="win-tag">Real estate</span>
            <h3>Follow-ups that never slip</h3>
            <p>
              When a client goes quiet, they get a follow-up automatically at the right time. When
              they respond, it lands in your CRM, tagged and ready.
            </p>
            <div className="win-saving">30% more leads converted</div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* TESTIMONIAL */}
      <section className="section">
        <div className="testimonial">
          <blockquote>
            &ldquo;I didn&apos;t care what technology they used. I just wanted to stop having my team
            manually fill out the same form four times per customer. They fixed it in two weeks. I
            gave my best employee her afternoons back.&rdquo;
          </blockquote>
          <p className="testimonial-attr">
            <strong>Sarah M.</strong>, Owner, independent car dealership, 12 employees
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* INDUSTRIES */}
      <section className="section">
        <p className="section-label">Who this is for</p>
        <h2>
          Anyone whose team is doing things <em>manually that they shouldn&apos;t be</em>
        </h2>
        <p className="section-sub">
          We&apos;ve worked with businesses across every industry. If it&apos;s repetitive, it can probably
          run itself.
        </p>

        <div className="industries-wrap">
          <span className="ind-pill">Plumbers &amp; tradespeople</span>
          <span className="ind-pill">Real estate agents</span>
          <span className="ind-pill">Car dealerships</span>
          <span className="ind-pill">Post-production studios</span>
          <span className="ind-pill">Retail stores</span>
          <span className="ind-pill">Landscapers</span>
          <span className="ind-pill">Accountants</span>
          <span className="ind-pill">Property managers</span>
          <span className="ind-pill">Healthcare practices</span>
          <span className="ind-pill">Recruitment firms</span>
          <span className="ind-pill">Logistics companies</span>
          <span className="ind-pill">Any business with repetitive admin</span>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="audit">
        <h2>
          Find out what you&apos;re
          <br />
          <em>losing every week</em>
        </h2>
        <p>
          Book a free 30-minute audit. We&apos;ll tell you exactly which tasks are automatable, how
          many hours they&apos;re costing you, and what it would take to fix them.
        </p>
        <a href="#" className="btn-primary">Book my free audit →</a>
        <p className="cta-note">No commitment. No jargon. Just a straight answer on what you can save.</p>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="footer-logo">vision</span>
        <span className="footer-note">© 2026 vision. All rights reserved.</span>
      </footer>
    </div>
  );
}
