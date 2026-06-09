import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { pipeline } from 'stream/promises'
import { Readable } from 'stream'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const assetsDir = path.join(root, 'public', 'assets')

const assets = [
  { url: 'https://evolvebroker.ai/wp-content/uploads/2026/03/Untitled-design-1-1024x724.png', dest: 'images/logo-header.png' },
  { url: 'https://evolvebroker.ai/wp-content/uploads/2025/08/Evolve-Broker-Effi-Inverted-1024x473.png', dest: 'images/logo-footer.png' },
  { url: 'https://evolvebroker.ai/wp-content/uploads/2026/03/EBCRM-powered-by-Effi-Logo-white-bg-1.png', dest: 'images/logo-effi.png' },
  { url: 'https://evolvebroker.ai/wp-content/uploads/2026/03/Reclaim-your-Time.-Empowering-you-to-deliver-Property-and-Wealth-Strategies-that-your-clients-Deserve.-1-1024x173.png', dest: 'images/hero-tagline.png' },
  { url: 'https://evolvebroker.ai/wp-content/uploads/2026/03/GHL-Banner-4-1-1024x576.png', dest: 'images/hero-background.png' },
  { url: 'https://evolvebroker.ai/wp-content/uploads/2026/03/Homepage-section-asset-1-1024x1024.jpeg', dest: 'images/section-sound-like-you.jpeg' },
  { url: 'https://evolvebroker.ai/wp-content/uploads/2026/03/1-1-819x1024.png', dest: 'images/victor-lagos.png' },
  { url: 'https://evolvebroker.ai/wp-content/uploads/2025/08/cropped-Evolve-Logo-Mark-Full-Colour-scaled-1-32x32.png', dest: 'favicon/favicon-32x32.png' },
  { url: 'https://evolvebroker.ai/wp-content/uploads/2025/08/cropped-Evolve-Logo-Mark-Full-Colour-scaled-1-192x192.png', dest: 'favicon/favicon-192x192.png' },
  { url: 'https://evolvebroker.ai/wp-content/uploads/2025/08/cropped-Evolve-Logo-Mark-Full-Colour-scaled-1-180x180.png', dest: 'favicon/apple-touch-icon.png' },
  { url: 'https://evolvebroker.ai/wp-content/uploads/2025/08/Inter_24pt-Light.ttf', dest: 'fonts/Inter-Light.ttf' },
  { url: 'https://evolvebroker.ai/wp-content/uploads/2025/08/Inter_24pt-Regular.ttf', dest: 'fonts/Inter-Regular.ttf' },
  { url: 'https://evolvebroker.ai/wp-content/uploads/2025/08/Inter_24pt-Bold.ttf', dest: 'fonts/Inter-Bold.ttf' },
  { url: 'https://evolvebroker.ai/wp-content/uploads/2025/08/Inter_24pt-Italic.ttf', dest: 'fonts/Inter-Italic.ttf' },
  { url: 'https://evolvebroker.ai/wp-content/uploads/2025/08/Outfit-Light.ttf', dest: 'fonts/Outfit-Light.ttf' },
  { url: 'https://evolvebroker.ai/wp-content/uploads/2025/08/Outfit-Regular.ttf', dest: 'fonts/Outfit-Regular.ttf' },
  { url: 'https://evolvebroker.ai/wp-content/uploads/2025/08/Outfit-Bold.ttf', dest: 'fonts/Outfit-Bold.ttf' },
  { url: 'https://evolvebroker.ai/wp-content/uploads/2026/03/Geist-Regular.ttf', dest: 'fonts/Geist-Regular.ttf' },
  { url: 'https://evolvebroker.ai/wp-content/uploads/2026/03/TAKE-4-6192.mp4', dest: 'video/platform-overview.mp4' },
  { url: 'https://evolvebroker.ai/wp-content/uploads/2026/04/Nectar-Presentation_ver-2-1-1024x576.png', dest: 'images/contact-hero.png' },
  { url: 'https://assets.cdn.filesafe.space/yF88KZm5PIr4SLHf0wBp/media/699707984c250265ef84a934.png', dest: 'images/insights-hero.png' },
  { url: 'https://evolvebroker.ai/wp-content/uploads/2026/04/Imagery-for-Evolve-Broker-busy-serious-broker-768x1024.png', dest: 'images/nfbd26-broker.png' },
]

async function download(url, dest) {
  const filePath = path.join(assetsDir, dest)
  fs.mkdirSync(path.dirname(filePath), { recursive: true })

  if (fs.existsSync(filePath)) {
    const size = fs.statSync(filePath).size
    const minSize = dest.endsWith('.mp4') ? 90 * 1024 * 1024 : 1
    if (size >= minSize) {
      console.log(`skip ${dest}`)
      return
    }
    console.log(`re-downloading incomplete ${dest} (${(size / 1024 / 1024).toFixed(1)} MB)...`)
  } else {
    console.log(`downloading ${dest}...`)
  }
  const res = await fetch(url)
  if (!res.ok || !res.body) throw new Error(`Failed ${url}: ${res.status}`)

  await pipeline(Readable.fromWeb(res.body), fs.createWriteStream(filePath))
  const size = fs.statSync(filePath).size
  console.log(`saved ${dest} (${(size / 1024).toFixed(1)} KB)`)
}

for (const asset of assets) {
  await download(asset.url, asset.dest)
}

console.log('\nAll assets downloaded.')
