import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const rupantaPath = resolve('dist/plugins/rupanta-media-converter/index.html')
const unknownPath = resolve('dist/plugins/not-a-real-plugin')

assert.ok(existsSync(rupantaPath), 'Rupanta landing page was not generated')
assert.ok(!existsSync(unknownPath), 'An unknown plugin route was generated')

const html = readFileSync(rupantaPath, 'utf8')
const h1Count = (html.match(/<h1\b/g) ?? []).length

assert.equal(h1Count, 1, 'Rupanta page must contain exactly one h1')
assert.match(
  html,
  /<link rel="canonical" href="https:\/\/gautamsiddhartha\.com\.np\/plugins\/rupanta-media-converter\/">/,
  'Rupanta canonical URL is missing'
)
assert.match(
  html,
  /https:\/\/wordpress\.org\/plugins\/lightweight-modern-media\//,
  'Official WordPress.org URL is missing'
)
assert.match(html, /<details\b/, 'Accessible FAQ disclosure controls are missing')

for (const screenshot of ['converter', 'settings']) {
  const url = `/images/rupanta/${screenshot}.webp`
  assert.ok(html.includes(`src="${url}"`), `The ${screenshot} screenshot is missing from the page`)
  assert.ok(existsSync(resolve(`dist${url}`)), `The ${screenshot} file is missing from the build`)
}
assert.match(html, /href="\/#projects"/, 'Portfolio projects link is missing')

const guideRoute = '/guides/convert-images-to-webp-wordpress/'
const guideCanonical = `https://gautamsiddhartha.com.np${guideRoute}`
assert.ok(html.includes(`href="${guideRoute}"`), 'Rupanta landing page does not link to the WebP guide')

const guide = readFileSync(resolve(`dist${guideRoute}index.html`), 'utf8')
assert.equal((guide.match(/<h1\b/g) ?? []).length, 1, 'The WebP guide must contain exactly one h1')
assert.ok(guide.includes(`rel="canonical" href="${guideCanonical}"`), 'The WebP guide canonical is missing')
assert.match(guide, /href="\/plugins\/rupanta-media-converter\/"/, 'The WebP guide does not link back to Rupanta')
assert.ok(readFileSync(resolve('dist/sitemap.xml'), 'utf8').includes(`<loc>${guideCanonical}</loc>`), 'The WebP guide is missing from the sitemap')

const socialImagePath = '/images/rupanta/social-preview.jpg'
const socialImageUrl = `https://gautamsiddhartha.com.np${socialImagePath}`
assert.ok(existsSync(resolve(`dist${socialImagePath}`)), 'Rupanta sharing image is missing from the build')
for (const page of [html, guide]) {
  assert.ok(page.includes(`property="og:image" content="${socialImageUrl}"`), 'Open Graph image is missing')
  assert.ok(page.includes(`name="twitter:image" content="${socialImageUrl}"`), 'Social card image is missing')
  assert.match(page, /name="twitter:card" content="summary_large_image"/, 'Large social card is missing')
}

console.log('Plugin and WebP guide verification passed.')
