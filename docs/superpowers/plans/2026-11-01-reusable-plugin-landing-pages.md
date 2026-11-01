# Reusable Plugin Landing Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a reusable, data-driven Astro landing-page system and publish Rupanta Media Converter as its first plugin page.

**Architecture:** A typed plugin catalogue feeds an Astro dynamic route through `getStaticPaths()`. Focused shared components render the approved navigation, hero preview, feature/workflow content, requirements, FAQ, and calls to action while `BaseLayout` supplies per-page SEO metadata.

**Tech Stack:** Astro 6, TypeScript, Tailwind CSS 4, static HTML/CSS

**Spec:** `docs/superpowers/specs/2026-11-01-reusable-plugin-landing-pages-design.md`

## Global Constraints

- Use the existing Astro 6 and Tailwind CSS 4 setup; add no dependencies.
- Preserve homepage output and behavior.
- Reuse the existing brand colors, typography, focus styles, footer, and global background.
- Generate `/plugins/rupanta-media-converter/` statically.
- Use official WordPress.org and verified source links.
- Keep all plugin-specific content in typed data.

## Review Focus

- Unknown plugin slugs must produce no generated page rather than a partially rendered template; verify the build output contains only catalogue slugs.
- Missing optional preview log lines must not break the preview; verify a fixture with an empty `logs` array builds.
- Long feature and FAQ text must wrap without horizontal overflow; verify at 390px viewport width.
- External calls to action must remain usable with keyboard focus and descriptive text; verify tab navigation in the production preview.
- The dynamic route must not alter homepage anchor navigation; compare the built homepage header links before and after implementation.

---

### Task 1: Define the plugin catalogue

**Files:**
- Create: `src/data/plugins.ts`
- Create: `src/data/plugins.test.ts`

**Interfaces:**
- Produces: `PluginLandingData`, `PluginPreviewMetric`, `PluginFeature`, `PluginWorkflowStep`, `PluginFaq`, and `plugins: PluginLandingData[]`.
- Produces: `getPluginBySlug(slug: string): PluginLandingData | undefined`.

- [ ] **Step 1: Write the catalogue test**

Assert that slugs are unique, required strings are non-empty, URLs use HTTPS, Rupanta has exactly four trust statements and four workflow steps, and `getPluginBySlug('rupanta-media-converter')` resolves the correct definition.

- [ ] **Step 2: Run the test and verify it fails**

Run: `node --test --experimental-strip-types src/data/plugins.test.ts`

Expected: FAIL because `src/data/plugins.ts` does not exist.

- [ ] **Step 3: Implement the typed catalogue**

Add the interfaces and Rupanta data using:

- slug: `rupanta-media-converter`
- canonical: `https://gautamsiddhartha.com.np/plugins/rupanta-media-converter/`
- WordPress.org: `https://wordpress.org/plugins/lightweight-modern-media/`
- source: `https://plugins.svn.wordpress.org/lightweight-modern-media/`
- primary headline: `Modern images.`
- accent headline: `Without the overhead.`

Keep preview metrics and log lines data-driven so an empty `logs` array remains valid.

- [ ] **Step 4: Run the catalogue test**

Run: `node --test --experimental-strip-types src/data/plugins.test.ts`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/data/plugins.ts src/data/plugins.test.ts
git commit -m "feat: add typed plugin landing data"
```

### Task 2: Extend shared SEO metadata

**Files:**
- Modify: `src/layouts/BaseLayout.astro`

**Interfaces:**
- Consumes: existing `title`, `description`, and `canonical` props.
- Produces: optional `image?: string` and `twitterCard?: 'summary' | 'summary_large_image'` props without changing existing defaults.

- [ ] **Step 1: Capture the existing homepage metadata**

Run `npm run build`, then record the homepage title, canonical URL, Open Graph title/description/URL, and Twitter card from `dist/index.html`.

- [ ] **Step 2: Add optional image metadata**

Render `og:image` and `twitter:image` only when `image` is supplied. Preserve `summary` as the existing default Twitter card.

- [ ] **Step 3: Verify homepage metadata is unchanged**

Run: `npm run build`

Expected: PASS, with the captured homepage metadata unchanged.

- [ ] **Step 4: Commit**

```bash
git add src/layouts/BaseLayout.astro
git commit -m "feat: support product page social metadata"
```

### Task 3: Build reusable plugin components

**Files:**
- Create: `src/components/plugins/PluginHeader.astro`
- Create: `src/components/plugins/PluginHero.astro`
- Create: `src/components/plugins/PluginDetails.astro`
- Create: `src/components/plugins/PluginFaq.astro`
- Create: `src/components/plugins/PluginLandingPage.astro`

**Interfaces:**
- Consumes: `plugin: PluginLandingData` in `PluginLandingPage.astro`.
- Produces: a complete semantic plugin landing page body, excluding `BaseLayout`.

- [ ] **Step 1: Add a temporary compile fixture**

Create `src/pages/plugin-component-check.astro` that imports Rupanta data and renders `PluginLandingPage`.

- [ ] **Step 2: Run the build and verify it fails**

Run: `npm run build`

Expected: FAIL because the plugin components do not exist.

- [ ] **Step 3: Implement `PluginHeader.astro` and `PluginHero.astro`**

Use the approved sticky product navigation, primary WordPress.org action, two-column hero, and data-driven admin preview. Preserve the site logo link to `/` and render log rows only when provided.

- [ ] **Step 4: Implement `PluginDetails.astro` and `PluginFaq.astro`**

Render trust statements, feature cards, sequential workflow, compatibility, requirements, and native `details`/`summary` FAQ controls from the typed data.

- [ ] **Step 5: Implement `PluginLandingPage.astro`**

Compose the focused components, final download CTA, and existing `Footer`. Use the approved `max-w-6xl`, navy surfaces, orange accents, responsive grids, and semantic section IDs.

- [ ] **Step 6: Run the component fixture build**

Run: `npm run build`

Expected: PASS and `dist/plugin-component-check/index.html` contains the Rupanta headline, feature content, FAQ controls, and official WordPress.org URL.

- [ ] **Step 7: Remove the temporary fixture and rebuild**

Delete `src/pages/plugin-component-check.astro`, run `npm run build`, and confirm the temporary route is absent.

- [ ] **Step 8: Commit**

```bash
git add src/components/plugins
git commit -m "feat: add reusable plugin landing components"
```

### Task 4: Add the static plugin route

**Files:**
- Create: `src/pages/plugins/[slug].astro`

**Interfaces:**
- Consumes: `plugins: PluginLandingData[]` and `PluginLandingPage`.
- Produces: one static page per catalogue record through `getStaticPaths()`.

- [ ] **Step 1: Create a route-output assertion**

Add a temporary verification script at `scripts/verify-plugin-pages.mjs` that asserts the built Rupanta file exists, contains one `h1`, includes the canonical and WordPress.org links, and does not generate an unknown-plugin directory.

- [ ] **Step 2: Run the verification and verify it fails**

Run: `npm run build && node scripts/verify-plugin-pages.mjs`

Expected: FAIL because the dynamic route does not exist.

- [ ] **Step 3: Implement `getStaticPaths()` and page metadata**

Map each catalogue record to `{ params: { slug }, props: { plugin } }`, render `BaseLayout` with plugin SEO props, and render `PluginLandingPage`.

- [ ] **Step 4: Verify route output**

Run: `npm run build && node scripts/verify-plugin-pages.mjs`

Expected: PASS, generating `dist/plugins/rupanta-media-converter/index.html` only for the known plugin slug.

- [ ] **Step 5: Commit**

```bash
git add src/pages/plugins/[slug].astro scripts/verify-plugin-pages.mjs
git commit -m "feat: generate reusable plugin landing routes"
```

### Task 5: Validate production presentation

**Files:**
- Modify only files from Tasks 1–4 if verification reveals a scoped defect.

**Interfaces:**
- Consumes: production build output.
- Produces: verified desktop and mobile Rupanta landing page with unchanged homepage behavior.

- [ ] **Step 1: Run complete automated verification**

Run:

```bash
npm ci
node --test --experimental-strip-types src/data/plugins.test.ts
npm run build
node scripts/verify-plugin-pages.mjs
```

Expected: all commands exit `0`.

- [ ] **Step 2: Preview the production build**

Run `npm run preview -- --host 127.0.0.1` and inspect `/plugins/rupanta-media-converter/` at desktop width and 390px mobile width.

- [ ] **Step 3: Verify visual and interaction criteria**

Confirm no horizontal overflow, readable wrapped copy, working in-page navigation, visible keyboard focus, native FAQ interaction, correct external links, and reduced-motion behavior.

- [ ] **Step 4: Verify homepage regression**

Inspect `/` and confirm its header anchors, hero, project cards, and footer remain unchanged.

- [ ] **Step 5: Inspect the final diff**

Run `git diff --check` and `git status --short`; confirm there are no generated `dist/`, debug files, prototype files, or unrelated edits.

- [ ] **Step 6: Commit scoped verification fixes if needed**

```bash
git add <only-scoped-files>
git commit -m "fix: polish reusable plugin landing pages"
```

