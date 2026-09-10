import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/portfolio";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return {
    title: projects.find((p) => p.slug === slug)?.title ?? "Project not found",
  };
}
export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return (
    <div className="section-pad">
      <Link className="text-link" href="/work">
        ← All work
      </Link>
      <div className="page-intro">
        <p className="eyebrow">SAMPLE BRIEF / {project.discipline}</p>
        <h1>{project.title}</h1>
        <p className="intro-copy">{project.summary}</p>
      </div>
      <Image
        className="case-cover"
        src={project.image}
        alt={project.imageAlt}
        width={800}
        height={560}
        priority
      />
      <div className="callout">
        <strong>This is a teaching example.</strong>
        <p>
          Replace this brief with your real work. Add your role, collaborators,
          timeline, research, screenshots, and source or demo links. The cover
          is an illustration, not a screenshot of a finished product.
        </p>
      </div>
      <div className="case-sections">
        {[
          ["01", "The question", project.problem],
          ["02", "The process", project.process],
          ["03", "The outcome", project.outcome],
          ["04", "The reflection", project.reflection],
        ].map(([n, title, copy]) => (
          <section key={n}>
            <p className="eyebrow">{n}</p>
            <h2>{title}</h2>
            <p>{copy}</p>
          </section>
        ))}
      </div>
      <Link className="text-link" href="/studio">
        Learn how to replace this project ↗
      </Link>
    </div>
  );
}
