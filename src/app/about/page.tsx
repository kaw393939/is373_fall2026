import { portfolio } from "@/content/portfolio";
import { PageIntro } from "@/components/page-intro";
import Link from "next/link";
export const metadata = { title: "About" };
export default function About() {
  return (
    <div className="section-pad">
      <PageIntro
        number="PORTFOLIO / ABOUT"
        title={`Hello. I’m ${portfolio.name}.`}
      >
        <p>{portfolio.role}</p>
      </PageIntro>
      <div className="about-grid">
        <div className="about-monogram" aria-hidden="true">
          YOU<span>IN THE MAKING ↗</span>
        </div>
        <div>
          <h2>
            A point of view,
            <br />
            always in progress.
          </h2>
          <p className="lead-small">{portfolio.intro}</p>
          <h3>Make this introduction specific</h3>
          <p>
            Tell visitors what you are learning, which problems interest you,
            and what you bring to a team. A short, honest story is more useful
            than a list of superlatives.
          </p>
          <h3>Let’s connect</h3>
          {portfolio.email ? (
            <a className="text-link" href={`mailto:${portfolio.email}`}>
              {portfolio.email} ↗
            </a>
          ) : (
            <p>
              Add your email in <code>src/content/portfolio.ts</code> to enable
              your contact link.
            </p>
          )}
          <p>
            <Link className="text-link" href="/work">
              Explore the sample work ↗
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
