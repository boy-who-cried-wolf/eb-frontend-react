import { type FormEvent, useState } from 'react'
import { links } from '../data/assets'
import { Button } from './ui/Button'
import { Reveal } from './ui/Reveal'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const phone = String(data.get('phone') ?? '')
    const message = String(data.get('message') ?? '')

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      '',
      message,
    ].join('\n')

    window.location.href = `${links.email}?subject=${encodeURIComponent('Evolve Broker contact')}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Reveal variant="fade-up">
        <div className="brand-card mx-auto max-w-xl text-center">
          <p className="text-lg font-medium text-brand-burgundy">Thank you for reaching out.</p>
          <p className="mt-2 text-slate-muted">
            Your email client should open with your message. If it does not, email us at{' '}
            <a href={links.email} className="text-brand-coral underline underline-offset-2">
              admin@evolvedecosystem.com
            </a>
            .
          </p>
        </div>
      </Reveal>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="brand-card mx-auto max-w-xl space-y-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-800">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Full Name"
            className="w-full rounded-xl border border-black/10 bg-brand-cream/50 px-4 py-3 text-navy-950 outline-none transition focus:border-brand-burgundy/40 focus:ring-2 focus:ring-brand-burgundy/10"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-800">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Email Address"
            className="w-full rounded-xl border border-black/10 bg-brand-cream/50 px-4 py-3 text-navy-950 outline-none transition focus:border-brand-burgundy/40 focus:ring-2 focus:ring-brand-burgundy/10"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy-800">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="Phone Number"
            className="w-full rounded-xl border border-black/10 bg-brand-cream/50 px-4 py-3 text-navy-950 outline-none transition focus:border-brand-burgundy/40 focus:ring-2 focus:ring-brand-burgundy/10"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-800">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="How can we help you?"
            className="w-full resize-y rounded-xl border border-black/10 bg-brand-cream/50 px-4 py-3 text-navy-950 outline-none transition focus:border-brand-burgundy/40 focus:ring-2 focus:ring-brand-burgundy/10"
          />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
  )
}
