import Image from "next/image";

const logos = [
  { name: "Molotov TV", file: "/logos/molotov.png" },
  { name: "ASICS",      file: "/logos/asics.png"   },
  { name: "PIF",        file: "/logos/pif.png"      },
  { name: "Whirlpool",  file: "/logos/whirlpool.png"},
];

export default function TrustedBy() {
  return (
    <div className="trusted-bar">
      <div className="trusted-inner">
        <span className="trusted-label">Trusted by teams from</span>
        <div className="trusted-logos">
          {logos.map((logo) => (
            <Image
              key={logo.name}
              src={logo.file}
              alt={logo.name}
              width={140}
              height={44}
              className="trusted-logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
