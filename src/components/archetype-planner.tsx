"use client";
import { useState } from "react";
import { useHydrated } from "@/lib/use-hydrated";
import { archetypes } from "@/content/archetypes";
import { Button } from "./ui/button";
export function ArchetypePlanner() {
  const hydrated = useHydrated();
  const [selected, setSelected] = useState("Creator");
  const [audience, setAudience] = useState("a future internship team");
  const [evidence, setEvidence] = useState("");
  const item = archetypes.find((a) => a.name === selected)!;
  function download() {
    const text = `MY PORTFOLIO BRAND BRIEF\n\nAudience: ${audience || "To define"}\nPrimary archetype: ${item.name}\nVoice: ${item.voice}\nPromise: ${item.promise}\nEvidence I can show: ${evidence || "To define"}\nWatch out for: ${item.risk}\n\nArchetypes are creative prompts, not personality diagnoses.\n`;
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "portfolio-brand-brief.txt";
    link.click();
    URL.revokeObjectURL(url);
  }
  return (
    <section className="exercise" id="planner">
      <p className="eyebrow">YOUR TURN / BRAND BRIEF</p>
      <h2>Choose a voice. Back it up.</h2>
      <div className="compare-grid">
        <div className="form-stack">
          <label>
            Primary archetype
            <select
              disabled={!hydrated}
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              {archetypes.map((a) => (
                <option key={a.name}>{a.name}</option>
              ))}
            </select>
          </label>
          <label>
            Who do you want to reach?
            <input
              disabled={!hydrated}
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              maxLength={200}
            />
          </label>
          <label>
            What real project supports this promise?
            <textarea
              disabled={!hydrated}
              value={evidence}
              onChange={(e) => setEvidence(e.target.value)}
              placeholder="Describe evidence from your own work…"
              maxLength={1500}
              rows={4}
            />
          </label>
        </div>
        <div className="brief-preview">
          <p className="eyebrow">YOUR WORKING DIRECTION</p>
          <h3>{item.name}</h3>
          <p>
            For {audience || "your audience"}, your voice is{" "}
            {item.voice.toLowerCase()}.
          </p>
          <p>
            <strong>Your promise:</strong> {item.promise}
          </p>
          <p>
            <strong>Show it:</strong> {evidence || item.evidence}
          </p>
          <p>
            <strong>Visual starting point:</strong> {item.direction}.
          </p>
        </div>
      </div>
      <Button disabled={!hydrated} onClick={download}>
        Download your brief ↓
      </Button>
      <p className="small-note">
        Your entries stay in this page until you leave or reload. Download the
        brief to keep them.
      </p>
    </section>
  );
}
