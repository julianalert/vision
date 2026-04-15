"use client";

import { useEffect, useRef } from "react";
import type { Dictionary } from "../[lang]/dictionaries";

type Props = {
  dict: Dictionary["taskWidget"];
};

export default function TaskWidget({ dict }: Props) {
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
      <p className="widget-label">{dict.label}</p>
      <div className="task-list" ref={listRef}>
        {dict.tasks.map((task, i) => (
          <div key={i} className={`task-item${task.done ? " done" : ""}`}>
            <div className="task-check" />
            <span>{task.text}</span>
            <span className={`task-tag${task.done ? "" : " orange"}`}>
              {task.done ? dict.autoTag : task.tag}
            </span>
          </div>
        ))}
      </div>
      <div className="widget-footer">
        <span className="widget-footer-text">
          <strong>{dict.footerNum}</strong>
          {dict.footerText}
        </span>
        <span className="widget-badge">{dict.footerBadge}</span>
      </div>
    </div>
  );
}
