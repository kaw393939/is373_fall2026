# Working with AI on your portfolio

[Back to README](../README.md) · [Project map](project-map.md)

AI helps you develop this project; it is not a required feature inside the website. No API key or paid integration is needed by the starter application. Follow your instructor's rules for tool access, attribution, and submitted work.

## A repeatable collaboration loop

1. **Explain:** give the agent the audience, goal, relevant files, and constraints.
2. **Ask for a small change:** make the intended result concrete enough to inspect.
3. **Review:** read the diff, inspect the page, and ask about anything you cannot explain.
4. **Verify:** check the relevant behavior and run the appropriate repository checks.
5. **Record:** note the decision, evidence, remaining uncertainty, and next step.

Use your discovery brief as context. “Make this professional” leaves too much open. “Help an internship reviewer find my contribution and project evidence” gives the agent a purpose.

## Example first prompt

> Read AGENTS.md, README.md, docs/project-map.md, and my discovery brief if it exists. Summarize the current phase before editing. I want to improve my About introduction for a web-development internship audience. Suggest concise language based only on facts I provide, then update the introduction in src/content/portfolio.ts. Preserve the current theme and page structure. Show me what changed and how to check it. Do not add a CMS or new integrations.

## Ask for explanations, not just output

Ask which component renders a piece of content, why a change belongs in a particular file, and what could break. Ask the agent to distinguish observations from assumptions. You should be able to explain the final change in your own words.

Review factual claims as carefully as code. Do not let an agent invent employers, testimonials, research participants, performance numbers, or credentials. Check sources for educational content. Keep passwords and private personal information out of prompts and committed files.

## Verify at the right level

For a copy edit, read the result and inspect the affected page. For a layout or interaction change, check a narrow screen, keyboard operation, and affected themes. Use the lint/type checks and production build described in [Development reference](development.md). The existing browser suite checks important interactions; a passing test does not judge the quality of your personal message.

Save work in small Git commits when you understand it. Inspect `git status` and `git diff` first; do not include unrelated changes or secrets. Discuss public publishing separately from local editing.

## Help the next agent

Keep `docs/my-discovery-brief.md` up to date. At a stopping point, write a short handoff with: the objective, decisions made, relevant files, checks actually run, unresolved issues, and the next task. Report an unrun check as unrun.

Repository instructions belong in AGENTS.md; personal communication choices belong in your brief. The [project map](project-map.md) explains their relationship. Documentation should make a new agent useful without requiring the original chat history.
