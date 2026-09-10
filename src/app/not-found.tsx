import Link from "next/link";
export default function NotFound() {
  return (
    <div className="section-pad page-intro">
      <p className="eyebrow">404 / NOT FOUND</p>
      <h1>A different direction.</h1>
      <p>
        This page does not exist. Head back to the work and pick another
        project.
      </p>
      <Link className="text-link" href="/work">
        Explore the work ↗
      </Link>
    </div>
  );
}
