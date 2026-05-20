# Portfolio V2 Strategy

## Positioning

- Senior / Principal-level DevOps Engineer with cloud architecture, platform engineering and infrastructure specialization.
- Immediate signal: hands-on operator with architectural judgment, not a generic portfolio owner.
- Recruiter reading: credible for international roles that need reliability, scale, security and execution depth.

## Design Direction

- Visual language: dark, premium, minimal, atmospheric.
- Brand references: modern software companies, but adapted to personal technical authority.
- Mood: infrastructure intelligence, control planes, operational clarity, software-grade polish.
- Avoided patterns: generic card grids, freelancer aesthetics, oversaturated gradients, template hero blocks.

## Visual System

- Primary background: near-black blue surfaces with layered radial lighting.
- Accent colors:
  - `#7DD3FC` for signal, interaction and technical highlights.
  - `#22D3EE` for emphasis and active states.
  - `#818CF8` for depth and ambient contrast.
  - `#34D399` for status and operational health.
- Typography:
  - Primary: Space Grotesk.
  - Secondary / technical UI: JetBrains Mono.
- Motion:
  - Slow ambient movement.
  - Soft rise-in transitions per section.
  - Floating infrastructure nodes.
  - Command palette keyboard interaction for premium UX.

## Conceptual Wireframe

1. Hero
   - Strong title with strategic one-line positioning.
   - Premium CTA pair.
   - Technical metrics.
   - Abstract architecture visualization.
2. About
   - Engineering philosophy and operating principles.
3. Experience
   - Impact-oriented company cards with architecture and reliability framing.
4. Stack
   - Capability-based ecosystem grouping instead of raw icons.
5. Projects
   - Case-study style system descriptions.
6. Knowledge
   - Certifications, research direction and expertise clusters.
7. Writing
   - Prepared article surface for future authority building.
8. Contact
   - Opportunity-focused final CTA with strong recruiter framing.

## Component Hierarchy

- `app/layout.tsx`
- `app/page.tsx`
- `components/portfolio-page.tsx`
- `components/architecture-map.tsx`
- `components/command-palette.tsx`
- `components/section-heading.tsx`
- `lib/site-data.ts`

## UX Rationale

- The hero compresses credibility, operating range and technical sophistication into the first screen.
- Section ordering mirrors how a technical hiring manager evaluates senior profiles:
  - strategic identity
  - engineering mindset
  - execution history
  - technical range
  - proof through projects
  - knowledge depth
  - contact readiness
- The command palette and technical UI cues make the site feel like software, not marketing.

## Content Strategy

- Copy is written as engineering positioning.
- No generic motivation language.
- Technologies appear only in the context of operating capabilities.
- Experience emphasizes system outcomes and operating environment quality.
- Projects are framed around problem, architecture and implementation style.

## SEO Structure

- Strong metadata title with role keywords.
- Long-form description focused on cloud, platform, security and reliability.
- Open Graph and Twitter metadata configured.
- Canonical URL configured.
- `robots.txt` and `sitemap.xml` added.
- Structured data via `Person` schema.

## Cloudflare Deployment Strategy

- Next.js configured with `output: "export"` for static output.
- Final deploy artifact is the `out/` folder.
- Works well for Cloudflare Pages or the current static-hosting flow behind Cloudflare.
- No Vercel-specific runtime assumptions.

## Responsiveness Strategy

- Large-screen layout prioritizes impact and editorial whitespace.
- Tablet layout preserves hierarchy without collapsing into dense grids.
- Mobile layout keeps hero strong while stacking metrics and content panels cleanly.

## Suggested Next Iterations

- Add a real blog backed by MDX or a lightweight headless CMS.
- Create a custom social preview image aligned to the site brand.
- Add GitHub activity ingestion for selected repositories.
- Add a filtered project detail system with dedicated pages.
- Add recruiter-focused downloadable one-page resume variant.

