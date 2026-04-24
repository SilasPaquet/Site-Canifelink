"use client";

import { useState } from "react";

export default function FaqAccordion({ items }) {
  const [openIdx, setOpenIdx] = useState(null);

  function toggle(i) {
    setOpenIdx((prev) => (prev === i ? null : i));
  }

  return (
    <div className="faq-list" role="list">
      {items.map((item, i) => (
        <div
          key={i}
          className={`faq-item${openIdx === i ? " open" : ""}`}
          role="listitem"
        >
          <button
            className="faq-q"
            aria-expanded={openIdx === i}
            onClick={() => toggle(i)}
          >
            {item.q}
            <span className="faq-icon" aria-hidden="true">
              +
            </span>
          </button>
          <div className="faq-a">{item.a}</div>
        </div>
      ))}
    </div>
  );
}
