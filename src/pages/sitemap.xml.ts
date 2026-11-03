import type { APIRoute } from 'astro'
import { plugins } from '../data/plugins'

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://gautamsiddhartha.com.np/')
  const paths = ['/', ...plugins.map((plugin) => `/plugins/${plugin.slug}/`)]

  const entries = paths
    .map((path) => `  <url>
    <loc>${escapeXml(new URL(path, origin).href)}</loc>
  </url>`)
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  })
}
