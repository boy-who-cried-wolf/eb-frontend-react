import fs from 'fs'

const html = fs.readFileSync('temp-home.html', 'utf8')
const urls = [
  ...new Set(
    [...html.matchAll(/https:\/\/evolvebroker\.ai\/wp-content\/uploads\/[^"'\s<>\\]+/g)].map((m) =>
      m[0].split('?')[0],
    ),
  ),
]

urls.sort()
urls.forEach((u) => console.log(u))
console.error(`\nTotal: ${urls.length}`)
