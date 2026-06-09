import { useEffect } from 'react'
import { Reveal } from './ui/Reveal'

interface GhlFormEmbedProps {
  formId: string
  title: string
  minHeight?: number
}

export function GhlFormEmbed({ formId, title, minHeight = 700 }: GhlFormEmbedProps) {
  const src = `https://api.leadconnectorhq.com/widget/form/${formId}`
  const iframeId = `inline-${formId}`

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://link.msgsndr.com/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      script.remove()
    }
  }, [])

  return (
    <Reveal variant="fade-up">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-sm">
        <iframe
          src={src}
          title={title}
          id={iframeId}
          className="w-full border-0"
          style={{ minHeight: `${minHeight}px` }}
        />
      </div>
    </Reveal>
  )
}
