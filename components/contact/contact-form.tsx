'use client'

import { useState, type FormEvent } from 'react'
import { Check, Send } from 'lucide-react'

const fieldClass =
  'w-full border-b border-white/15 bg-transparent px-0 pb-3 pt-1 text-base text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary'

const labelClass = 'mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-muted-foreground'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    window.setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 900)
  }

  if (submitted) {
    return (
      <div className="glow-border h-full rounded-[2rem]">
        <div className="flex h-full min-h-[24rem] flex-col items-center justify-center rounded-[2rem] bg-card p-10 text-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-primary/15 text-primary">
            <Check className="size-7" />
          </span>
          <h3 className="mt-6 font-heading text-2xl font-bold text-foreground">Message sent.</h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Thanks for reaching out. We’ll get back to you within one business day.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="glow-border rounded-[2rem]">
      <form onSubmit={handleSubmit} className="rounded-[2rem] bg-card p-8 md:p-10">
        <div className="flex flex-col gap-6">
          <div>
            <label htmlFor="name" className={labelClass}>
              Name
            </label>
            <input id="name" name="name" type="text" required placeholder="Your name" className={fieldClass} />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input id="email" name="email" type="email" required placeholder="you@company.com" className={fieldClass} />
          </div>

          <div>
            <label htmlFor="projectType" className={labelClass}>
              Project Type
            </label>
            <select id="projectType" name="projectType" className={`${fieldClass} [&>option]:bg-[#101010]`}>
              <option value="ai-automation">AI automation</option>
              <option value="website">Website</option>
              <option value="app">Mobile app</option>
              <option value="other">Something else</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell us about your project..."
              className={`${fieldClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_28px_rgba(245,168,0,0.5)]"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="dot-pulse inline-flex h-2.5 w-2.5 rounded-full bg-current" />
                <span className="dot-pulse inline-flex h-2.5 w-2.5 rounded-full bg-current" />
                <span className="dot-pulse inline-flex h-2.5 w-2.5 rounded-full bg-current" />
              </span>
            ) : (
              <>
                Send Message
                <Send className="size-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
