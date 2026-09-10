import { PageIntro } from "@/components/page-intro";
import { archetypes } from "@/content/archetypes";
import { ArchetypePlanner } from "@/components/archetype-planner";
export const metadata = { title: "Brand archetypes" };
export default function Archetypes() {
  return (
    <div className="section-pad">
      <PageIntro
        number="04 / BRAND ARCHETYPES"
        title="What character does your work reveal?"
      >
        <p>
          A brand archetype is a storytelling lens. Use it to make your
          portfolio’s voice and choices more consistent, then support that story
          with real work.
        </p>
      </PageIntro>
      <div className="callout">
        <strong>A creative framework, not a personality test.</strong>
        <p>
          Margaret Mark and Carol S. Pearson popularized this branding framework
          in <em>The Hero and the Outlaw</em> (2001). Names vary across
          adaptations: Everyperson is also called Regular Guy/Gal, and Outlaw is
          often called Rebel. These are prompts, not universal categories or
          guaranteed marketing outcomes.
        </p>
        <a
          className="source-link"
          href="https://carolspearson.com/books-page/the-hero-and-the-outlaw-building-extraordinary-brands-through-the-power-of-archetypes"
        >
          Read about Mark and Pearson’s framework ↗
        </a>
      </div>
      <div className="section-heading">
        <h2>12 ways to tell your story.</h2>
        <a className="text-link" href="#planner">
          Build your brand brief ↓
        </a>
      </div>
      <div className="archetype-grid">
        {archetypes.map((a, i) => (
          <article key={a.name}>
            <div className="project-meta">
              <span>
                {" "}
                {String(i + 1).padStart(2, "0")} / {a.motive}
              </span>
              <span aria-hidden="true">✳</span>
            </div>
            <h2>{a.name}</h2>
            <p className="lead-small">{a.promise}</p>
            <h3>Voice</h3>
            <p>{a.voice}.</p>
            <h3>Portfolio evidence</h3>
            <p>{a.evidence}</p>
            <h3>Watch out for</h3>
            <p>{a.risk}.</p>
          </article>
        ))}
      </div>
      <ArchetypePlanner />
      <p className="reading-note">
        An archetype does not dictate a theme. A Creator can use a Swiss grid,
        and a Sage can use an expressive cover. Choose the visual language that
        serves your audience and evidence.
      </p>
    </div>
  );
}
