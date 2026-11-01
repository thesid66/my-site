# Reusable Plugin Landing Pages Design

## Intent

Add a reusable landing-page system to the Astro portfolio so Rupanta Media Converter can have a polished product page now and additional WordPress plugins can be added later by supplying structured content rather than rebuilding the layout.

## Goals

- Publish Rupanta at `/plugins/rupanta-media-converter/`.
- Match the current navy, orange, grid, typography, spacing, and translucent-panel visual system.
- Make each plugin page static, responsive, accessible, and search-engine friendly.
- Keep plugin-specific copy and links in structured data.
- Reuse one page template for future plugins.
- Give WordPress.org installation the primary call to action and an optional verified source link the secondary action.

## Non-goals

- Do not add a CMS, database, or client-side framework.
- Do not redesign the homepage.
- Do not create a plugin-directory index until more than one plugin exists.
- Do not add animation beyond the site's existing restrained enhancement patterns.

## Constraints

- Continue using Astro 6 and Tailwind CSS 4 with no new runtime dependencies.
- Preserve the existing `BaseLayout`, global tokens, homepage, header, and footer behavior.
- The route must be statically generated from typed data.
- External calls to action must use verified official URLs; do not imply that the portfolio repository is the plugin source.
- The design must respect visible keyboard focus and `prefers-reduced-motion`.

## Approaches

### Dedicated Rupanta page

Smallest initial implementation, but every future plugin would duplicate page structure and visual behavior. Rejected because multiple plugin pages are planned.

### Reusable data-driven plugin pages — selected

Use a typed plugin definition, a dynamic Astro route, and shared plugin components. This adds a modest initial structure but makes subsequent plugin pages primarily a content-and-assets task.

## Information Architecture

Each page contains:

1. Plugin-specific navigation.
2. Product hero with a configurable admin-interface preview.
3. Four concise trust statements.
4. Feature grid.
5. Four-step workflow.
6. Compatibility and server requirements.
7. Accessible FAQ disclosure list.
8. Final WordPress.org download call to action and optional verified source link.
9. Existing site footer.

## Data Model

Each plugin definition supplies its slug, name, badge, headline, accent line, description, WordPress.org URL, optional source URL, SEO metadata, trust statements, preview statistics and log lines, features, workflow, compatibility list, requirements, and FAQs. The first definition is `rupanta-media-converter`.

## Visual Direction

- Reuse `#F08252` as the action and emphasis color.
- Reuse the deep navy background, subtle grid, white/surface borders, rounded panels, and Inter stack.
- Let the plugin interface preview be the memorable visual element; surrounding sections remain quieter.
- Keep headings left-aligned and readable, with body lines below 80 characters where practical.
- Avoid generic stock artwork and decorative gradients that do not explain the product.

## SEO and Accessibility

- Unique title, description, canonical URL, Open Graph metadata, and Twitter metadata per plugin.
- One `h1`, ordered section headings, semantic lists, real links, and native `details`/`summary` FAQ controls.
- Descriptive labels for the product preview and external actions.
- Mobile layout must avoid horizontal overflow and preserve touch-target sizes.

## Acceptance Criteria

- `/plugins/rupanta-media-converter/` builds successfully and contains the approved visual structure.
- Homepage output and navigation remain unchanged.
- Adding a second plugin requires one data record and no duplicated page markup.
- WordPress.org and optional source links point to verified Rupanta destinations.
- Desktop and mobile views are visually checked from a production build.

