import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
export const metadata = { title: "Field guide" };
export default function Learn() {
  return (
    <div className="section-pad">
      <PageIntro
        number="01 / THE FIELD GUIDE"
        title="Good work starts with why."
      >
        <p>
          Build more than a good-looking page. Learn how visual choices,
          persuasive communication, and brand personality work together.
        </p>
      </PageIntro>
      <div className="lesson-links">
        {[
          [
            "01",
            "Persuasion",
            "Communicate your value with Robert Cialdini’s seven principles. Make a compelling case without making things up.",
            "/learn/persuasion",
            "7 principles",
          ],
          [
            "02",
            "Design styles",
            "Explore a century of order and resistance, from the Bauhaus to contemporary web design.",
            "/learn/design-styles",
            "10 illustrated directions",
          ],
          [
            "03",
            "Brand archetypes",
            "Choose a useful character for your portfolio, then express it through language and evidence.",
            "/learn/archetypes",
            "12 archetypes",
          ],
        ].map(([n, title, copy, href, meta]) => (
          <Link href={href} key={n}>
            <span className="big-number">{n}</span>
            <div>
              <p className="eyebrow">{meta}</p>
              <h2>{title}</h2>
              <p>{copy}</p>
            </div>
            <span className="link-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        ))}
      </div>
      <div className="exercise">
        <h2>Put the pieces together.</h2>
        <p>
          Choose an audience, one design direction, and one primary archetype.
          Then use two persuasion principles to explain a real project. Your
          design choices should support the story your evidence tells.
        </p>
        <Link className="text-link" href="/studio">
          Start in the theme studio ↗
        </Link>
      </div>
    </div>
  );
}
