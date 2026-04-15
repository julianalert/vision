import Image from "next/image";

const team = [
  {
    name: "Clément Bernard",
    role: "Co-founder, Marketing & Growth",
    bio: "12 years in content strategy and search marketing. Built and scaled digital audiences across sport, finance, and tech. Knows exactly which marketing tasks should never require a human.",
    image: "/images/clementb.jpeg",
    linkedin: "https://www.linkedin.com/in/clementbernard-/",
  },
  {
    name: "Clément Samson",
    role: "Co-founder, Strategy & Business Development",
    bio: "International business development leader with 11 years across consulting and high-growth ventures. Formerly at Arthur D. Little and Tasama (PIF). Identifies the operational gaps worth fixing.",
    image: "/images/clements.jpeg",
    linkedin: "https://www.linkedin.com/in/cl%C3%A9ment-samson123/",
  },
  {
    name: "Julien Devoir",
    role: "Co-founder, Product & Systems",
    bio: "14 years building digital products and growth systems. Formerly Head of Product at Request Network and growth lead at Molotov TV. Designs the automations so they actually work in the real world.",
    image: "/images/juliend.jpeg",
    linkedin: "https://www.linkedin.com/in/juliendevoir/",
  },
];

export default function TeamSection({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;
  return (
    <section className="team-section">
      <div className="team-intro">
        <p className="section-label">The team</p>
        <Heading>Built by people who&apos;ve <em>done this before</em></Heading>
        <p className="team-sub">
          Three co-founders with backgrounds in product, marketing, and strategy.
          We started vision because we kept seeing the same hours being wasted
          across every business we worked with.
        </p>
      </div>

      <div className="team-grid">
        {team.map((person) => (
          <div key={person.name} className="team-card">
            <div className="team-avatar-wrap">
              <Image
                src={person.image}
                alt={person.name}
                width={80}
                height={80}
                className="team-avatar"
              />
            </div>
            <div className="team-info">
              <div className="team-name">{person.name}</div>
              <div className="team-role">{person.role}</div>
              <p className="team-bio">{person.bio}</p>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="team-linkedin"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
