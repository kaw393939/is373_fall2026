import Link from "next/link";

export default function Home() {
  return (
    <div className="shell">
      <header className="header">
        <Link className="wordmark" href="/" aria-label="IS373 home">IS<span>373</span></Link>
        <span className="semester">Fall 2026</span>
      </header>
      <main id="main">
        <p className="eyebrow">01 / THE STARTING POINT</p>
        <h1>Hello, world<span className="accent">.</span></h1>
        <p className="intro">Every great project starts somewhere.<br />This one starts here.</p>
        <div className="links">
          <a className="button" href="https://github.com/kaw393939/is373_fall2026">View repository <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="https://nextjs.org/docs">Next.js documentation <span aria-hidden="true">↗</span></a>
        </div>
        <section className="foundation" aria-label="Project foundation">
          <div><span className="number">01</span><h2>Next.js</h2><p>App Router & React</p></div>
          <div><span className="number">02</span><h2>TypeScript</h2><p>A foundation with strict types</p></div>
          <div><span className="number">03</span><h2>Docker</h2><p>Consistent from dev to production</p></div>
        </section>
      </main>
      <footer><span>IS373 / Fall 2026</span><span>Built to build on.</span></footer>
    </div>
  );
}
