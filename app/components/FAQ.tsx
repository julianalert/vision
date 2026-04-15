"use client";

import { useState } from "react";

export type FAQItem = {
  q: string;
  a: string;
};

type Props = {
  items: FAQItem[];
  label: string;
  title: string;
};

export default function FAQ({ items, label, title }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq-section">
      <div className="faq-inner">
        <p className="section-label">{label}</p>
        <h2>{title}</h2>
        <div className="faq-list">
          {items.map((item, i) => (
            <div
              key={i}
              className={`faq-item${open === i ? " faq-open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {item.q}
                <span className="faq-icon">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="faq-answer">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
