import fs from 'fs'

function extractMainContent(file) {
  const html = fs.readFileSync(file, 'utf8')
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? ''
  const blocks = [...main.matchAll(/<div[^>]*class="brxe-text[^"]*"[^>]*>([\s\S]*?)<\/div>/g)]
  return blocks
    .map((m) => m[1])
    .map((h) =>
      h
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        .trim(),
    )
    .filter((h) => h.length > 50 && !h.includes('Privacy Policy') && !h.includes('Contact Us:'))
}

for (const page of ['privacy-policy', 'terms-of-service']) {
  const blocks = extractMainContent(`temp-${page}.html`)
  console.log(page, 'blocks:', blocks.length, 'chars:', blocks.join('').length)
  fs.writeFileSync(`scripts/legal-${page}.html`, blocks.join('\n'))
}
