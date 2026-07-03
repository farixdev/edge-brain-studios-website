import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { ServiceRows } from '@/components/products/service-rows'
import { CtaBanner } from '@/components/cta-banner'

export const metadata: Metadata = {
  title: 'Services — AI Automation, Web & App Development | EdgeBrain Studios',
  description:
    'AI automation, website development, app development, and maintenance & support from EdgeBrain Studios.',
}

const focusCards = [
  ['AI', 'Agents and automation that remove repetitive work'],
  ['Web', 'Launch-ready websites and product systems'],
  ['App', 'Native-feeling apps that stay fast and reliable'],
  ['Support', 'Maintenance that keeps releases steady'],
]

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products & Services"
        title="What we build for ambitious teams"
        subtitle="From AI automation to launch support, we design software with the kind of clarity and pace that lets good ideas become real momentum."
      />

      <section className="bg-background px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="glow-border rounded-[1.8rem]">
            <div className="rounded-[1.8rem] bg-card p-8">
              <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-primary">
                · Delivery focus ·
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold leading-tight md:text-4xl">
                A compact studio model with full-stack reach.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                We cover the build from the first sketch to the production layer, keeping the work cohesive instead of
                fragmented.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {focusCards.map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-primary/40"
              >
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.35em] text-primary">{title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink px-6 py-24 text-foreground lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-primary">
              · Our services ·
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight md:text-4xl">
              Every service is built to fit a single, stronger product story.
            </h2>
          </div>
          <ServiceRows />
        </div>
      </section>

      <CtaBanner
        title="Have a project in mind?"
        subtitle="Let’s talk about how we can shape the product, the experience, and the build around it."
      />
    </>
  )
}
