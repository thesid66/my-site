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

console.log('Plugin page verification passed.')
