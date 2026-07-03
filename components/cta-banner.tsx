import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CtaBanner({
  title = 'Ready to build something great?',
  subtitle = "Tell us about your idea and we'll help you ship it faster than you thought possible.",
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <section className="px-6 py-20 lg:px-8">
      <Reveal
        as="section"
        className="glow-border relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem]"
      >
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0d0d0d] px-8 py-16 text-center md:px-16 md:py-20">
          <div className="tech-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[110px] glow-pulse" />
          <div className="relative">
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-primary">
              · Let’s talk ·
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl text-balance font-heading text-3xl font-bold text-foreground md:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted-foreground md:text-lg">{subtitle}</p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_32px_rgba(245,168,0,0.5)]"
            >
              Get in Touch
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
