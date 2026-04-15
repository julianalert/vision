import Image from "next/image";
import type { Dictionary } from "../[lang]/dictionaries";

type Props = {
  dict: Dictionary["teamSection"];
  headingLevel?: "h1" | "h2";
};

const linkedinUrls = [
  "https://www.linkedin.com/in/clementbernard-/",
  "https://www.linkedin.com/in/cl%C3%A9ment-samson123/",
  "https://www.linkedin.com/in/juliendevoir/",
];

const images = [
  "/images/clementb.jpeg",
  "/images/clements.jpeg",
  "/images/juliend.jpeg",
];

export default function TeamSection({ dict, headingLevel = "h2" }: Props) {
  const Heading = headingLevel;
  return (
    <section className="team-section">
      <div className="team-intro">
        <p className="section-label">{dict.label}</p>
        <Heading>
          {dict.h2_before}
          <em>{dict.h2_em}</em>
        </Heading>
        <p className="team-sub">{dict.sub}</p>
      </div>

      <div className="team-grid">
        {dict.members.map((person, i) => (
          <div key={person.name} className="team-card">
            <div className="team-avatar-wrap">
              <Image
                src={images[i]}
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
                href={linkedinUrls[i]}
                target="_blank"
                rel="noopener noreferrer"
                className="team-linkedin"
              >
                {dict.linkedin}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
