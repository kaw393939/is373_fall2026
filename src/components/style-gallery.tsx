"use client";
import Image from "next/image";
import { useState } from "react";
import { useHydrated } from "@/lib/use-hydrated";
import { designStyles } from "@/content/design-styles";
export function StyleGallery() {
  const hydrated = useHydrated();
  const [filter, setFilter] = useState("All");
  const filters = [
    "All",
    "Modernist foundations",
    "Reactions & experiments",
    "Contemporary directions",
  ];
  const visible = designStyles.filter(
    (style) => filter === "All" || style.family === filter,
  );
  return (
    <>
      <div className="filter-row" aria-label="Filter design movements">
        {filters.map((item) => (
          <button
            type="button"
            disabled={!hydrated}
            key={item}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="eyebrow" aria-live="polite">
        {visible.length} DESIGN DIRECTIONS / CHRONOLOGICAL ORDER
      </p>
      <div className="style-list">
        {visible.map((style) => (
          <article className="style-entry" key={style.id} id={style.id}>
            <figure>
              <Image
                src={`/styles/${style.id}.svg`}
                alt={`${style.name} study illustrating ${style.cues.toLowerCase()}`}
                width={800}
                height={560}
              />
              <figcaption>
                Original teaching illustration · {style.name}
              </figcaption>
            </figure>
            <div>
              <p className="eyebrow">
                {style.dates} / {style.family}
              </p>
              <h2>{style.name}</h2>
              <p className="lead-small">{style.idea}</p>
              <p>{style.description}</p>
              <p className="style-cues">{style.cues}</p>
              <h3>What it responds to</h3>
              <p>{style.response}</p>
              <h3>Try it in your portfolio</h3>
              <p>{style.application}</p>
              <a className="source-link" href={style.source}>
                {style.sourceName} ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
