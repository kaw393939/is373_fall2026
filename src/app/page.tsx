import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/portfolio";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> YOUR PORTFOLIO STARTS HERE / 001
          </p>
          <h1>
            BUILD
            <br />
            SOMETHING
            <span className="hero-last">
              YOURS<span className="accent-dot">.</span>
            </span>
          </h1>
          <p>
            A little structure. A lot of possibility.
            <br />A starting point for your work, your ideas, your point of
            view.
          </p>
          <div className="button-row">
            <Button asChild>
              <Link href="/studio">
                Make it yours <span aria-hidden="true">↗</span>
              </Link>
            </Button>
            <Link className="text-link" href="/work">
              Explore the sample work ↗
            </Link>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <span className="art-label">OPEN TO POSSIBILITIES</span>
          <svg viewBox="0 0 400 400">
            <path
              d="M70 320 320 70M100 70h220v220"
              fill="none"
              stroke="currentColor"
              strokeWidth="60"
            />
          </svg>
          <span className="art-bottom">IDEAS → INTO ACTION</span>
        </div>
      </section>
      <div className="ticker">
        <span>THINK CLEARLY.</span>
        <span>MAKE BOLDLY.</span>
        <span>KEEP EXPLORING.</span>
        <span aria-hidden="true">↗</span>
      </div>
      <section className="section-pad">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / THE WORK</p>
            <h2>Start with a question.</h2>
          </div>
          <Link className="text-link" href="/work">
            All sample projects ↗
          </Link>
        </div>
        <div className="project-grid">
          {projects.map((project, i) => (
            <Link
              className="project-card"
              href={`/work/${project.slug}`}
              key={project.slug}
            >
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={800}
                  height={560}
                />
              </div>
              <div className="project-meta">
                <span>0{i + 1} / SAMPLE PROJECT</span>
                <span aria-hidden="true">↗</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.discipline}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="learning-grid" aria-label="Learning paths">
        {[
          [
            "02",
            "Design has a history.",
            "From Bauhaus order to punk disruption. Find the visual language that fits your work.",
            "/learn/design-styles",
            "Explore design styles",
          ],
          [
            "03",
            "Make your work matter.",
            "Use Cialdini’s principles to communicate value with clarity, evidence, and respect.",
            "/learn/persuasion",
            "Learn persuasion",
          ],
          [
            "04",
            "Find your character.",
            "Explore 12 brand archetypes and turn your values into a recognizable voice.",
            "/learn/archetypes",
            "Find your archetype",
          ],
        ].map(([n, title, copy, href, label]) => (
          <article key={n}>
            <span className="big-number">{n}</span>
            <h2>{title}</h2>
            <p>{copy}</p>
            <Link className="text-link" href={href}>
              {label} ↗
            </Link>
          </article>
        ))}
      </section>
      <section className="closing">
        <p className="eyebrow">SAME FOUNDATION. DIFFERENT ATTITUDE.</p>
        <h2>
          Change the theme.
          <br />
          Keep your point of view.
        </h2>
        <Button asChild variant="outline">
          <Link href="/studio">Open the theme studio ↗</Link>
        </Button>
      </section>
    </>
  );
}
