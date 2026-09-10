# Project map and agent handoff

[Back to README](../README.md)

## Read first

Read `AGENTS.md`, the README, and `docs/project-overview.md`. If a student has created `docs/my-discovery-brief.md`, read it before changing their message or design. Do not assume that file exists or supply answers on the student's behalf.

This is the discovery phase of a CMS course. The working app is a local-content portfolio starter. The roadmap is context, not authorization to implement future capabilities. Supplemental guidance belongs in Markdown linked from the README.

## Where things live

| Location | Responsibility |
| --- | --- |
| `src/content/portfolio.ts` | Profile text and sample project records |
| `src/app/page.tsx` | Homepage message and selected work |
| `src/app/about/page.tsx` | About presentation and optional email link |
| `src/app/work/page.tsx` | Work index |
| `src/app/work/[slug]/page.tsx` | Case-study template generated from project data |
| `src/app/layout.tsx` | Shared shell, metadata, footer, initial theme script |
| `src/components/header.tsx` | Brand and navigation |
| `src/lib/themes.ts` | Theme registry and default |
| `src/app/globals.css` | Semantic theme tokens and shared responsive styles |
| `src/components/ui/button.tsx` | Owned shadcn-compatible button |
| `src/app/learn/` and `src/content/` | Existing lessons and educational records |
| `src/app/studio/page.tsx` | Theme previews and customization instructions |
| `public/styles/` | Original SVG teaching illustrations |
| `Dockerfile` and Compose files | Development and production environments |
| `tests/portfolio.spec.ts` | Browser checks, including themes and accessibility |
| `docs/` | Setup, discovery, AI, Docker, and project guidance |

Personalization currently spans several files: changing the profile name does not automatically replace the header, footer, homepage, or metadata. See [Make this portfolio yours](portfolio-starter.md) for the complete checklist. There is currently no blog route, CMS, or QR feature. Do not describe planned features as implemented.

## Implementation conventions

Read the installed Next.js guides before framework changes as required by AGENTS.md. Most pages are server-rendered components; interactive controls use small client components. Keep project slugs unique. Use semantic theme variables, meaningful image descriptions, and real evidence. Keep the neutral Base theme usable when adding overrides.

Preserve existing user changes. Prefer small edits within the established structure over introducing a new framework. Update documentation when behavior changes. Commands and verification details are in [Development reference](development.md); browser test setup is in [Make this portfolio yours](portfolio-starter.md).

## Handoff format

```text
Objective:
Student audience and desired action:
Decisions and reasons:
Files changed:
Checks run and results:
Known limitations / checks not run:
Next bounded task:
```

Do not put credentials, private student records, or unnecessary personal details in a handoff. Keep the handoff factual and distinguish project state from suggestions.
