import fs from 'fs'

const files = ['temp-contact-us.html']
for (const file of files) {
  const h = fs.readFileSync(file, 'utf8')
  const imgs = [...h.matchAll(/https:\/\/evolvebroker\.ai\/wp-content\/uploads\/[^"'\s)]+/g)]
    .map((m) => m[0])
    .filter((u) => /\.(png|jpe?g|webp)/i.test(u))
  console.log(`\n${file}:`)
  ;[...new Set(imgs)].forEach((u) => console.log(u))

  const bg = [...h.matchAll(/background-image:\s*url\(([^)]+)\)/g)]
  console.log('\nbackground-image:')
  bg.forEach((m) => console.log(m[1]))
}
