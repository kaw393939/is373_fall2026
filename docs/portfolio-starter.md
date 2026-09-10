# Make this portfolio yours

[Back to README](../README.md) · [Start with discovery](discovery.md)

This starter combines a student portfolio with an optional learning library. All sample projects are **teaching briefs**, not claims about completed work.

## First edits

1. Edit `src/content/portfolio.ts` for your name, introduction, contact address, and project data.
2. Update the homepage in `src/app/page.tsx` with your own headline and selected work.
3. Replace the IS373 branding in `src/components/header.tsx` and `src/app/layout.tsx`; update the metadata there too.
4. Add original project images to `public/`. Set each project’s `image` to a local path such as `/my-project.png` and its `imageAlt` to a meaningful description. The homepage, work index, and case-study page all use those fields. Current covers use an 800 × 560 aspect ratio; update the render dimensions if you use a different ratio.
5. Keep a unique, URL-safe `slug` per project. The dynamic case-study route automatically generates a page for each entry. Add role, dates, links, screenshots, and collaborators to the data and template as your work develops.
6. Keep, adapt, or remove the field guide and studio before publishing your own portfolio. Update their navigation links when removing routes.

## Theme architecture

- `src/lib/themes.ts`: theme registry, initial default, validated IDs, storage key.
- `src/app/globals.css`: neutral foundation, theme overrides, shared components and responsive layout.
- `src/components/theme-picker.tsx`: accessible native select and larger preview buttons.
- `src/app/layout.tsx`: a small script applies a saved theme before the page paints. The saved theme overrides the code default in that browser. Storage errors fall back safely; selecting a theme still works for the current session.

Brutalist is the shipped default. Base provides neutral light styling; Swiss and Punk are alternate directions. All theme selectors operate on the same document attribute. Preferences persist locally and synchronize between tabs. The implementation does not send preferences to a server.

To add a theme:

1. Add `{ id: 'my-theme', name: 'My theme', description: '…' }` to `themes`.
2. Add `:root[data-theme='my-theme']` overrides to `globals.css`. Start with the colors, then border weight, radius, fonts, and heading weight. Unspecified values inherit the neutral base, not another theme.
3. Add `.swatch-my-theme` to style its studio preview.
4. Optionally set `defaultTheme` to the new ID. Choose the theme in the UI or clear the saved preference when testing a new code default.
5. Test body text, buttons, focus rings, input borders, mobile layout, and imagery. Color changes alone do not fully reproduce a historical design movement.

Semantic tokens are exposed to Tailwind v4 (`bg-background`, `text-foreground`, `bg-primary`, `text-primary-foreground`, `border-border`, etc.). Prefer these to hard-coded component colors. Theme swatches and historical illustrations intentionally retain their own example palettes.

## Components

`components.json` configures shadcn/ui's manual-install conventions and aliases. `src/components/ui/button.tsx` is an owned, shadcn-compatible button using Radix Slot, class-variance-authority, and the shared `cn` helper. It supports `default`, `outline`, and `ghost` variants, `sm` size, disabled state, and `asChild` for links. Other controls use labeled native HTML. This starter installs only the small foundation it uses.

To add a shadcn component, run `npx shadcn@latest add <component>` and review the generated code and dependencies. Do not overwrite an existing customized component without inspecting the change. Its styles should use the existing semantic tokens. Additional components can require new tokens or dependencies; test them in every theme.

## Learning content and illustrations

- `src/content/design-styles.ts`: dates, descriptions, comparisons, activities, and source URLs.
- `src/content/archetypes.ts`: twelve archetypes with original portfolio prompts.
- `src/app/learn/persuasion/page.tsx`: seven principles, original examples, and an exercise.
- `public/styles/*.svg`: ten original editable teaching illustrations, not historical reproductions. These may be adapted within student projects. They have no external image dependencies; museum links provide historical context.

The guide is a selected European/North American graphic-design timeline, not an exhaustive global history. Date ranges overlap. Brand archetypes are creative planning aids, not personality diagnoses. The brand brief is generated in the browser; download it before leaving to preserve your entries.

## Verification

```sh
npm run check
npm run build
npx playwright install chromium --only-shell   # one-time browser install
npm run test:e2e
```

Stop any other local Next.js development process before running the browser suite, since Next.js uses a shared development lock. Browser tests start a server on port 3100. They cover route/image loading, case-study 404s, all four themes, reload and cross-tab persistence, blocked storage, history filters, brief downloads, keyboard skipping, viewport overflow, and automated accessibility checks. Automated checks do not replace manual review.

Keep using the repository's Docker setup: [run the app](run-the-app.md). For local Node development, use Node 24 and `npm ci`.

Use `npm run format` to format the source, or `npm run format:check` to check formatting. The CI workflow runs formatting, lint, types, browser tests, and the existing production Docker checks.
