import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { StyleGallery } from "@/components/style-gallery";
export const metadata: Metadata = { title: "Design styles" };
export default function DesignStyles() {
  return (
    <div className="section-pad">
      <PageIntro number="02 / DESIGN HISTORY" title="Order. Rebellion. Repeat.">
        <p>
          A visual field guide from Bauhaus to today. Learn what each approach
          values, what it reacts to, and how to use it with intention.
        </p>
      </PageIntro>
      <div className="callout">
        <strong>History is a conversation, not a straight line.</strong>
        <p>
          These are selected, overlapping movements in a largely European and
          North American graphic-design history—not a complete global survey.
          “Modernist” names a historical outlook; it does not simply mean
          “current.” Today, ordered systems and expressive reactions coexist.
        </p>
        <p>
          The images are original teaching studies, not historical artifacts.
          Follow the museum and research links for original works and deeper
          context.
        </p>
      </div>
      <StyleGallery />
      <section className="exercise">
        <p className="eyebrow">STUDIO EXERCISE / 30 MINUTES</p>
        <h2>One brief. Two arguments.</h2>
        <p>
          Design the same project cover twice: once with Swiss order, once with
          New Wave disruption. Keep the words and images constant. Ask a
          classmate what they notice first, what they understand, and which
          version fits your audience.
        </p>
      </section>
    </div>
  );
}
