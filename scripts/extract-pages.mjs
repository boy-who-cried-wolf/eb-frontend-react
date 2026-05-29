import fs from 'fs'

const pages = ['contact-us', 'privacy-policy', 'terms-of-service', 'join-waitlist', 'nfbd26']

for (const p of pages) {
  const h = fs.readFileSync(`temp-${p}.html`, 'utf8')
  const title = h.match(/<title>([^<]+)<\/title>/)?.[1]
  const headings = [...h.matchAll(/<h[1-6][^>]*class="brxe-heading"[^>]*>([\s\S]*?)<\/h[1-6]>/g)].map((m) =>
    m[1].replace(/<[^>]+>/g, '').trim(),
  )
  const textBlocks = [...h.matchAll(/class="brxe-text(?:-basic)?"[^>]*>([\s\S]*?)<\/div>/g)]
    .map((m) => m[1].replace(/<[^>]+>/g, '').trim())
    .filter((t) => t.length > 20 && t.length < 500)
    .slice(0, 8)

  console.log(`\n=== ${p} ===`)
  console.log('title:', title)
  console.log('headings:', headings.slice(0, 6))
  console.log('text:', textBlocks.slice(0, 4))
}
