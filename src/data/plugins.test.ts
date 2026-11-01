import assert from 'node:assert/strict'
import test from 'node:test'

import { getPluginBySlug, plugins } from './plugins.ts'

test('plugin catalogue contains valid unique entries', () => {
  const slugs = plugins.map((plugin) => plugin.slug)

  assert.equal(new Set(slugs).size, slugs.length)

  for (const plugin of plugins) {
    assert.ok(plugin.slug.trim())
    assert.ok(plugin.name.trim())
    assert.ok(plugin.headline.trim())
    assert.ok(plugin.accentHeadline.trim())
    assert.ok(plugin.description.trim())
    assert.ok(plugin.seo.title.trim())
    assert.ok(plugin.seo.description.trim())

    for (const url of [plugin.canonical, plugin.wordpressUrl, plugin.sourceUrl].filter(Boolean)) {
      assert.match(url as string, /^https:\/\//)
    }
  }
})

test('Rupanta has the approved landing-page structure', () => {
  const rupanta = getPluginBySlug('rupanta-media-converter')

  assert.ok(rupanta)
  assert.equal(rupanta.name, 'Rupanta Media Converter')
  assert.equal(rupanta.headline, 'Modern images.')
  assert.equal(rupanta.accentHeadline, 'Without the overhead.')
  assert.equal(rupanta.trustStatements.length, 4)
  assert.equal(rupanta.workflow.length, 4)
  assert.deepEqual(rupanta.preview.logs.slice(0, 0), [])
})

test('unknown plugin slugs do not resolve', () => {
  assert.equal(getPluginBySlug('not-a-real-plugin'), undefined)
})
