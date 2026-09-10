import { PageIntro } from "@/components/page-intro";
export const metadata = { title: "Persuasion" };
const principles = [
  [
    "Reciprocity",
    "People often feel inclined to return a benefit.",
    "Publish a useful lesson from a project: a reusable component, a checklist, or a clear explanation.",
    "Share something genuinely useful without requiring an email address or implying a debt.",
  ],
  [
    "Commitment & consistency",
    "People tend to act in ways that fit commitments they have freely made.",
    "Let visitors move from a short project summary to a full case study, then choose whether to contact you.",
    "Offer small, voluntary next steps. Do not trap visitors in a funnel or preselect consent.",
  ],
  [
    "Social proof",
    "Others’ actions can inform decisions, especially when a situation is uncertain.",
    "Add a real collaborator quote with permission, or link to public contributions.",
    "Use attributable evidence. Never invent testimonials, user counts, or client logos.",
  ],
  [
    "Authority",
    "Relevant expertise can make a message more credible.",
    "Show your technical decisions, a working demo, and what you personally contributed.",
    "Name your actual role. A student project can demonstrate skill without pretending to be client work.",
  ],
  [
    "Liking",
    "Connection and positive regard can support influence.",
    "Write an About page in your own voice and explain the kinds of problems you care about.",
    "Be warm and specific. Avoid manufactured similarity or flattering the reader to get agreement.",
  ],
  [
    "Scarcity",
    "Limited availability can affect perceived value.",
    "If your availability is actually limited, state a clear date or realistic project capacity.",
    "Use only truthful limits. A student portfolio usually does not need a countdown or urgency message.",
  ],
  [
    "Unity",
    "A shared sense of identity can shape how people respond.",
    "Explain a real connection to the community a project serves and credit collaborators.",
    "Invite belonging without excluding outsiders or claiming identities you do not hold.",
  ],
];
export default function Persuasion() {
  return (
    <div className="section-pad">
      <PageIntro number="03 / PERSUASION" title="Earn attention. Build trust.">
        <p>
          Robert Cialdini’s principles help explain why people say yes. Use them
          to help visitors understand your work and make an informed choice.
        </p>
      </PageIntro>
      <div className="callout">
        <strong>Seven principles, applied thoughtfully.</strong>
        <p>
          Earlier editions of <em>Influence</em> described six principles; the
          expanded framework includes Unity. These are context-dependent
          tendencies, not guarantees. The portfolio applications below are
          teaching examples.
        </p>
        <a
          className="source-link"
          href="https://www.influenceatwork.com/7-principles-of-persuasion/"
        >
          Source: Cialdini’s Influence at Work ↗
        </a>
      </div>
      <div className="principle-list">
        {principles.map(([name, meaning, example, boundary], i) => (
          <article key={name}>
            <span className="big-number">0{i + 1}</span>
            <div>
              <h2>{name}</h2>
              <p>{meaning}</p>
            </div>
            <div>
              <h3>In your portfolio</h3>
              <p>{example}</p>
              <h3>Keep it honest</h3>
              <p>{boundary}</p>
            </div>
          </article>
        ))}
      </div>
      <section className="exercise">
        <p className="eyebrow">TRY IT / REWRITE YOUR PROJECT INTRO</p>
        <h2>Make the evidence do the talking.</h2>
        <div className="compare-grid">
          <div>
            <h3>Vague claim</h3>
            <p>“I’m an innovative designer who creates amazing experiences.”</p>
          </div>
          <div>
            <h3>Specific, if supported by your work</h3>
            <p>
              “I redesigned a campus event finder after interviewing five
              students. Here are the navigation problems they identified and how
              my prototype addresses them.”
            </p>
          </div>
        </div>
        <p>
          Use your real research numbers, explain limitations, and link to the
          work. Ask a peer which version helps them assess your contribution.
        </p>
      </section>
    </div>
  );
}
