# The long-term vision

[Back to README](../README.md) · [Current phase](project-overview.md)

The long-term outcome is a professional home on the web that students can maintain, expand, and use to communicate their value. The first phase establishes a direction and familiarity with the existing application. Later work can add capabilities when they serve that direction.

## How the pieces could connect

| Element | Purpose | Current status |
| --- | --- | --- |
| Homepage | Explain who you are, what you offer, and where to go next | Starter exists; personalize it |
| Portfolio and case studies | Show contribution, decisions, and evidence | Sample briefs and templates exist |
| About | Explain interests, background, and direction | Starter exists; personalize it |
| GitHub | Make code, documentation, and development history inspectable | Repository exists; personal profile integration is future work |
| LinkedIn | Connect the site with a professional network and identity | Future connection |
| Blog | Share learning, tutorials, and project reflections | Future capability |
| QR code | Connect a résumé or in-person introduction to the website | Future capability, after a stable public URL exists |
| CMS | Support structured editing, media, drafts, and publishing | Later course phase, after discovery |

A future journey might be: résumé QR code → website introduction → relevant case study → GitHub evidence → contact or LinkedIn connection. The same message should remain recognizable across those surfaces. Each link needs a purpose; adding more destinations is not automatically better.

## A possible sequence

1. **Discover and understand:** run the app, complete a brief, learn Docker, and make a small verified edit with AI assistance.
2. **Develop evidence:** replace sample briefs with actual work and refine your message through feedback.
3. **Connect and publish:** agree on a public hosting approach, verify contact/profile links, and test the visitor journey. A local Docker container alone does not make a site public.
4. **Expand content management:** introduce a blog and then CMS concepts and tools when the class reaches that stage. Decide architecture and services at that time.

For a later QR code, use a public address that you control and expect to keep. A phone scanning `localhost` will point to the phone itself, not your computer. Verify the printed code on a separate device after publication.

The current local content records offer a concrete starting point for later conversations about content structure. They are not a CMS with an editor, approval process, or publishing workflow. There is no need to choose a CMS or implement future services during discovery.
