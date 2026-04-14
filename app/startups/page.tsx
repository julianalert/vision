import { Zap, Mail, RefreshCw, PenLine, Target, BarChart2 } from "lucide-react";

export default function Home() {
  return (
    <>
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
        <div className="hero-tag">For early-stage &amp; scaling startups</div>

        <h1>
        Your marketing engine running 
          <br />
          24/7  <em>without the headcount</em>
        </h1>

        <p className="hero-sub">
        We build automated marketing systems that generate leads, nurture them, and convert them while your team stays focused on building the product.
        </p>

        <div className="hero-cta">
          <a href="#cta" className="btn-primary">Book a free strategy call →</a>
          <a href="#results" className="btn-ghost">See what&apos;s possible</a>
        </div>


      </section>

      {/* STATS BAR */}
      <div className="stats-section">
        <div className="stats-inner">
          <div className="stat-box">
            <span className="stat-num">3.8×</span>
            <span className="stat-desc">average pipeline increase in 90 days</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">62%</span>
            <span className="stat-desc">reduction in cost per qualified lead</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">49 hrs</span>
            <span className="stat-desc">of marketing automated per week</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">21 days</span>
            <span className="stat-desc">from kickoff to first system live</span>
          </div>
        </div>
      </div>

      {/* PAIN POINTS */}
      <section className="section">
        <p className="section-label">The problem</p>
        <h2>Does any of this <em>sound familiar?</em></h2>
        <p className="section-sub">
          Not &ldquo;challenges&rdquo; or &ldquo;friction points.&rdquo; Just the actual thoughts running through your
          head at the end of a long day.
        </p>

        <div className="pain-grid">
          <div className="pain-card" data-num="01">
            <h3>&ldquo;We basically live off referrals and I have no idea what happens when they dry up&rdquo;</h3>
            <p>Word of mouth is great until it isn&apos;t. And you have no system to replace it.</p>
          </div>
          <div className="pain-card" data-num="02">
            <h3>&ldquo;I keep saying I&apos;ll sort the marketing next week. It&apos;s been three months.&rdquo;</h3>
            <p>It&apos;s always the thing that gets pushed. There&apos;s always something more urgent. And the pipeline stays empty.</p>
          </div>
          <div className="pain-card" data-num="03">
            <h3>&ldquo;Someone filled in our contact form four days ago and I just saw it now&rdquo;</h3>
            <p>By the time anyone followed up, they&apos;d already booked a call with someone else. That keeps happening.</p>
          </div>
          <div className="pain-card" data-num="04">
            <h3>&ldquo;I know I should be posting on LinkedIn but I genuinely don&apos;t have time to sit and write&rdquo;</h3>
            <p>You open a blank post, stare at it for ten minutes, and close the tab. Every week.</p>
          </div>
          <div className="pain-card" data-num="05">
            <h3>&ldquo;There are like 80 leads in our CRM that nobody has touched since January&rdquo;</h3>
            <p>They showed up, got one email, and then nothing. Some of them were probably ready to buy by now.</p>
          </div>
          <div className="pain-card" data-num="06">
            <h3>&ldquo;Honestly I don&apos;t know which of our channels is actually bringing in customers&rdquo;</h3>
            <p>You spend money on ads, post content, send emails — and have no idea what&apos;s working or what to double down on.</p>
          </div>
          <div className="pain-card" data-num="07">
            <h3>&ldquo;Every new user gets a slightly different onboarding depending on who&apos;s free that day&rdquo;</h3>
            <p>It works, sort of, but it&apos;s held together with manual effort. Scale that by 10x and it falls apart.</p>
          </div>
          <div className="pain-card" data-num="08">
            <h3>&ldquo;I&apos;m the founder and I&apos;m still writing cold emails myself at 11pm&rdquo;</h3>
            <p>You know this isn&apos;t scalable. You just haven&apos;t had time to fix it yet. That&apos;s exactly why you&apos;re here.</p>
          </div>
          <div className="pain-card" data-num="09">
            <h3>&ldquo;We hired a marketer but they spend all their time on stuff a system should be doing&rdquo;</h3>
            <p>Scheduling posts, pulling reports, sending follow-ups. You didn&apos;t hire them for that.</p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* HOW IT WORKS */}
      <section className="section" id="how">
        <p className="section-label">How it works</p>
        <h2>
          We build the system.
          <br />
          <span className="dim">You run the company.</span>
        </h2>
        <p className="section-sub">Three phases. Done in less than 30 days. Running indefinitely after that.</p>

        <div className="how-grid">
          <div className="how-card">
            <div className="how-card-num">01</div>
            <h3>Diagnose &amp; map your growth engine</h3>
            <p>We audit your current funnel, identify where leads are leaking, and map out exactly which automations will move the needle fastest for your stage.</p>
          </div>
          <div className="how-card">
            <div className="how-card-num">02</div>
            <h3>Build the systems, not just the campaigns</h3>
            <p>We build automated pipelines, lead capture, enrichment, nurturing, scoring, handoff to sales, that run 24/7 without anyone managing them.</p>
          </div>
          <div className="how-card">
            <div className="how-card-num">03</div>
            <h3>Optimise on real data, every month</h3>
            <p>We monitor, test, and iterate. You get a monthly report showing exactly what&apos;s working, what changed, and what&apos;s next.</p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SERVICES */}
      <section className="section" id="services">
        <p className="section-label">What we build</p>
        <h2>
          Marketing systems that
          <br />
          <span className="dim">don&apos;t need babysitting</span>
        </h2>
        <p className="section-sub">
          Each system targets a specific growth bottleneck. We deploy the ones that matter most for your stage.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon"><Zap /></div>
            <h3>Instant lead response &amp; qualification</h3>
            <p>The moment a lead fills a form or books a demo, they get a personalised response, get scored, and land in the right sequence — in under 2 minutes.</p>
            <span className="service-tag">Pipeline velocity</span>
          </div>
          <div className="service-card">
            <div className="service-icon"><Mail /></div>
            <h3>Outbound prospecting on autopilot</h3>
            <p>ICP-targeted prospect lists built and enriched automatically. Personalised multi-touch sequences that feel human but run themselves.</p>
            <span className="service-tag">Outbound</span>
          </div>
          <div className="service-card">
            <div className="service-icon"><RefreshCw /></div>
            <h3>Long-term nurture sequences</h3>
            <p>Leads who aren&apos;t ready today get nurtured for 90 days with content relevant to their stage and pain point. They come back warmer.</p>
            <span className="service-tag">Retention</span>
          </div>
          <div className="service-card">
            <div className="service-icon"><PenLine /></div>
            <h3>Content &amp; LinkedIn engine</h3>
            <p>A weekly content pipeline generated from your POV, your voice, your insights — reviewed and published without you writing from scratch.</p>
            <span className="service-tag">Inbound</span>
          </div>
          <div className="service-card">
            <div className="service-icon"><Target /></div>
            <h3>User onboarding automation</h3>
            <p>Every new signup gets the same great onboarding experience, triggered sequences, check-in emails, and activation nudges based on what they&apos;ve done.</p>
            <span className="service-tag">Activation</span>
          </div>
          <div className="service-card">
            <div className="service-icon"><BarChart2 /></div>
            <h3>Full-funnel attribution dashboard</h3>
            <p>One dashboard showing where your leads come from, how they progress, and what converts. No more guessing which channels are worth it.</p>
            <span className="service-tag">Visibility</span>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* RESULTS */}
      <section className="section" id="results">
        <p className="section-label">Real results</p>
        <h2>
          Specific problems we&apos;ve <em>already fixed</em>
        </h2>
        <p className="section-sub">
          Not vague &ldquo;growth outcomes.&rdquo; Actual annoying things that were eating founders&apos; time — and aren&apos;t anymore.
        </p>

        <div className="results-grid">
          <div className="result-card">
            <span className="result-tag">B2B SaaS — Seed stage</span>
            <div className="result-metric">0→40</div>
            <div className="result-label">demos booked per month, founder stopped writing cold emails himself</div>
            <div className="result-desc">He was spending 2 hours a night prospecting manually. We built a system that finds the right people, personalises outreach, and books calls without him touching it.</div>
          </div>
          <div className="result-card">
            <span className="result-tag">Dev tools — Series A</span>
            <div className="result-metric">4.2×</div>
            <div className="result-label">trial-to-paid conversion, signups stopped going quiet after day 3</div>
            <div className="result-desc">Users would sign up, poke around, and disappear. We built triggered emails based on what they did and didn&apos;t do in the product. Most never needed a sales call after that.</div>
          </div>
          <div className="result-card">
            <span className="result-tag">Marketplace — Pre-seed</span>
            <div className="result-metric">-71%</div>
            <div className="result-label">cost per qualified lead, sales team stopped wasting calls on bad leads</div>
            <div className="result-desc">They were spending half their day on calls that went nowhere. We built automatic scoring so they only talk to people who&apos;ve already shown they&apos;re serious.</div>
          </div>
          <div className="result-card">
            <span className="result-tag">HR Tech — Series A</span>
            <div className="result-metric">11 hrs</div>
            <div className="result-label">freed per week, their one marketer finally got to do actual marketing</div>
            <div className="result-desc">She was spending her whole week scheduling posts, pulling reports, and sending follow-ups by hand. We automated all of it. She now works on strategy instead.</div>
          </div>
          <div className="result-card">
            <span className="result-tag">Fintech — Seed</span>
            <div className="result-metric">2 min</div>
            <div className="result-label">lead response time, inbound leads stopped going cold before anyone replied</div>
            <div className="result-desc">Someone would fill in the contact form and hear nothing for hours. We built instant enrichment and a personalised response that goes out in under 2 minutes. Demo bookings up 38%.</div>
          </div>
          <div className="result-card">
            <span className="result-tag">B2B SaaS — Pre-seed</span>
            <div className="result-metric">$0</div>
            <div className="result-label">ad spend, 200 waitlist signups in 6 weeks, entirely organic</div>
            <div className="result-desc">No budget, no agency, no growth hacker. Just a LinkedIn content engine built around the founder&apos;s actual opinions, and a simple referral loop. Six weeks.</div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* TESTIMONIALS */}
      <section className="section">
        <p className="section-label">From founders</p>
        <h2>In their words</h2>
        <p className="section-sub">
          Founders who were doing marketing manually, or not at all, before we stepped in.
        </p>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <blockquote>
              &ldquo;I was writing cold emails at 11pm because nobody else was doing it and I didn&apos;t know
              how to fix that. Three weeks after we started working together, I hadn&apos;t thought about
              outreach once. <strong>The meetings were just showing up.</strong>&rdquo;
            </blockquote>
            <div className="t-attr">
              <div className="t-avatar">JK</div>
              <div>
                <div className="t-name">Jamie K.</div>
                <div className="t-role">Co-founder &amp; CEO, Stackly (B2B SaaS, Seed)</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <blockquote>
              &ldquo;Our marketer is really good. But she was spending her whole week doing things a
              spreadsheet and a few automations could do. I felt guilty about it.{" "}
              <strong>Now she actually does what I hired her for.</strong>&rdquo;
            </blockquote>
            <div className="t-attr">
              <div className="t-avatar">ML</div>
              <div>
                <div className="t-name">Maya L.</div>
                <div className="t-role">VP Growth, Meridian (HR Tech, Series A)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FOR WHO */}
      <section className="section">
        <p className="section-label">Is this for you?</p>
        <h2>
          Right fit.
          <br />
          <span className="dim">Wrong fit.</span>
        </h2>
        <p className="section-sub">We&apos;d rather be honest upfront than waste your time or ours.</p>

        <div className="for-who-grid">
          <div className="for-who-card">
            <h3>This is for you <em>if:</em></h3>
            <ul className="for-who-list">
              <li>You&apos;re a founder still doing marketing tasks yourself and you&apos;re tired of it</li>
              <li>You have customers but no real system for finding more of them</li>
              <li>Leads are coming in but falling through the cracks because nobody follows up fast enough</li>
              <li>You&apos;ve got one marketer and they&apos;re stuck doing things a robot should be doing</li>
              <li>You want something built properly, not a patchwork of Zapier automations</li>
              <li>You want to see results in weeks, not after a 6-month &ldquo;strategy phase&rdquo;</li>
            </ul>
          </div>
          <div className="for-who-card not-for">
            <h3>This is <span className="dim">not</span> for you if:</h3>
            <ul className="for-who-list">
              <li>You&apos;re still figuring out what you&apos;re building and who it&apos;s for</li>
              <li>You want someone to run your marketing completely hands-off with no input from you</li>
              <li>You need a rebrand or visual identity work, that&apos;s not what we do</li>
              <li>You&apos;re looking for the cheapest possible option</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="cta">
        <div>
          <h2>
            Still writing your own
            <br />
            cold emails <em>at midnight?</em>
          </h2>
          <p>
            Book a free 30-minute call. We&apos;ll look at what&apos;s eating your time, where leads are
            slipping through, and tell you exactly what we&apos;d fix first and what that would change.
          </p>
        </div>
        <div className="cta-right">
          <a href="#" className="btn-light">Book a free 30-minute call →</a>
          <span className="cta-note">No pitch deck. No commitment. Just a straight conversation.</span>
        </div>
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
    </>
  );
}
