import fs from 'fs'
import path from 'path'

function decodeEntities(s) {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
}

function cleanHtml(html) {
  return decodeEntities(html)
    .replace(/\sclass="ng-star-inserted"/g, '')
    .replace(/<span>/g, '')
    .replace(/<\/span>/g, '')
    .replace(/<strong>/g, '<strong>')
    .trim()
}

function extractLegal(slug) {
  const html = fs.readFileSync(`temp-${slug}.html`, 'utf8')
  const match = html.match(/<div[^>]*class="brxe-text"[^>]*>([\s\S]*?)<\/div><\/div><\/section><\/main>/)
  return match ? cleanHtml(match[1]) : ''
}

const outDir = 'src/data/legal'
fs.mkdirSync(outDir, { recursive: true })

for (const slug of ['privacy-policy', 'terms-of-service']) {
  const content = extractLegal(slug)
  fs.writeFileSync(path.join(outDir, `${slug}.html`), content)
  console.log(slug, content.length, 'chars')
}
