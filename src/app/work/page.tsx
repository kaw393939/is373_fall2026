import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/portfolio";
import { PageIntro } from "@/components/page-intro";
export const metadata = { title: "Work" };
export default function Work() {
  return (
    <div className="section-pad">
      <PageIntro
        number="PORTFOLIO / SELECTED WORK"
        title="Show the work. Share the thinking."
      >
        <p>
          Three sample briefs to show how a case study can work. Replace these
          with your own projects, contributions, and evidence.
        </p>
      </PageIntro>
      <div className="work-list">
        {projects.map((project, i) => (
          <Link href={`/work/${project.slug}`} key={project.slug}>
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={800}
              height={560}
            />
            <div>
              <p className="eyebrow">0{i + 1} / SAMPLE BRIEF</p>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <p className="small-note">{project.discipline}</p>
              <span className="text-link">View the case-study structure ↗</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
