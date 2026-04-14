"use client";

import { useEffect, useRef } from "react";

export default function TaskWidget() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!listRef.current) return;
    const items = Array.from(
      listRef.current.querySelectorAll<HTMLElement>(".task-item:not(.done)")
    );
    const timers = items.map((item, i) => {
      const delay = 1800 + i * 600 + 2000;
      return setTimeout(() => item.classList.add("done"), delay);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="hero-right">
      <p className="widget-label">Tasks running right now</p>
      <div className="task-list" ref={listRef}>
        <div className="task-item done">
          <div className="task-check" />
          <span>Invoice sent to Harwick &amp; Co</span>
          <span className="task-tag">Auto</span>
        </div>
        <div className="task-item done">
          <div className="task-check" />
          <span>Lead from contact form qualified &amp; routed</span>
          <span className="task-tag">Auto</span>
        </div>
        <div className="task-item done">
          <div className="task-check" />
          <span>Weekly performance report compiled</span>
          <span className="task-tag">Auto</span>
        </div>
        <div className="task-item done">
          <div className="task-check" />
          <span>Follow-up sent to 3 cold leads (day 7)</span>
          <span className="task-tag">Auto</span>
        </div>
        <div className="task-item">
          <div className="task-check" />
          <span>Onboarding email sequence — new signup</span>
          <span className="task-tag orange">Running</span>
        </div>
        <div className="task-item">
          <div className="task-check" />
          <span>Monday recap email — scheduled 6pm</span>
          <span className="task-tag orange">Running</span>
        </div>
      </div>
      <div className="widget-footer">
        <span className="widget-footer-text">
          <strong>14 hrs</strong> saved this week
        </span>
        <span className="widget-badge">All systems running</span>
      </div>
    </div>
  );
}
