"use client";

import { useState } from "react";
import { ToolkitIcon } from "./ToolkitIcon";
import type { SkillCategory } from "@/lib/content";

type SkillCardProps = {
  category: SkillCategory;
  index: number;
  descriptions: Record<string, string>;
};

function SkillIllustration({ kind }: { kind: SkillCategory["id"] }) {
  return (
    <svg
      className="skill-illustration"
      viewBox="0 0 160 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      {kind === "frontend" ? (
        <>
          <rect x="24" y="16" width="112" height="72" rx="3" />
          <path d="M24 33h112M34 25h2m5 0h2m5 0h2" />
          <path
            className="skill-art-primary"
            d="m65 48-14 12 14 12m30-24 14 12-14 12m-10-28-10 34"
            strokeWidth="1.5"
          />
        </>
      ) : kind === "design" || kind === "visual" ? (
        <>
          <path strokeDasharray="3 4" d="M13 50h134M80 4v92" />
          <rect
            x="48"
            y="18"
            width="64"
            height="64"
            className="skill-art-rotate"
          />
          <circle cx="80" cy="50" r="23" className="skill-art-primary" />
          {[
            [48, 18],
            [112, 18],
            [48, 82],
            [112, 82],
          ].map(([x, y]) => (
            <rect
              key={`${x}-${y}`}
              x={x - 3}
              y={y - 3}
              width="6"
              height="6"
              className="skill-art-handle"
            />
          ))}
        </>
      ) : (
        <>
          <path strokeDasharray="3 4" d="M36 50h88M80 50V20" />
          <circle cx="36" cy="50" r="15" />
          <circle cx="124" cy="50" r="15" />
          <circle cx="80" cy="20" r="10" />
          <path
            className="skill-art-primary"
            d="m30 50 4 4 8-9m32-25 4 4 7-8m33 34 4 4 8-9"
            strokeWidth="1.5"
          />
          <path d="M36 75v9h88v-9" />
          <circle className="skill-art-node" cx="80" cy="84" r="3" />
        </>
      )}
    </svg>
  );
}

export function SkillCard({ category, index, descriptions }: SkillCardProps) {
  const [selected, setSelected] = useState(category.skills[0]);
  const panelId = `skill-detail-${category.id}`;
  return (
    <article
      data-reveal
      className={`skill-card skill-card-interactive ${index === 0 ? "skill-card-featured" : ""}`}
      aria-labelledby={`skill-title-${category.id}`}
    >
      <div className="skill-card-top">
        <span className="eyebrow">
          {String(index + 1).padStart(2, "0")} / {category.caption}
        </span>
        <span className="skill-card-plus" aria-hidden="true">
          ↗
        </span>
      </div>
      <div className="skill-art">
        <SkillIllustration kind={category.id} />
      </div>
      <h3
        id={`skill-title-${category.id}`}
        className="text-xl font-medium tracking-tight"
      >
        {category.label}
      </h3>
      <div
        className="skill-choices"
        role="group"
        aria-label={`${category.label} skills`}
      >
        {category.skills.map((skill) => (
          <button
            type="button"
            key={skill}
            className="skill-chip"
            aria-pressed={selected === skill}
            aria-controls={panelId}
            onClick={() => setSelected(skill)}
          >
            <ToolkitIcon name={skill} />
            <span>{skill}</span>
          </button>
        ))}
      </div>
      <div
        id={panelId}
        className="skill-detail"
        aria-live="polite"
        aria-atomic="true"
      >
        <div key={selected} className="skill-detail-copy">
          <p className="eyebrow mb-2">{selected}</p>
          <p>{descriptions[selected]}</p>
        </div>
      </div>
      <div className="skill-card-bottom">
        <span className="skill-status-dot" aria-hidden="true" />
        <span>Select a skill to explore</span>
        <span className="ml-auto font-mono" aria-hidden="true">
          {String(category.skills.indexOf(selected) + 1).padStart(2, "0")} /{" "}
          {String(category.skills.length).padStart(2, "0")}
        </span>
      </div>
    </article>
  );
}
