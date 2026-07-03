'use client'

import { motion } from 'framer-motion'
import { Gauge, Layers, Users } from 'lucide-react'
import { StatsCounter } from '@/components/stats-counter'

const values = [
  {
    title: 'Fast by default',
    label: 'Velocity',
    icon: Gauge,
    description: 'We move from idea to prototype quickly, so momentum stays intact while quality rises.',
  },
  {
    title: 'Built with intent',
    label: 'Craft',
    icon: Layers,
    description: 'Every interface, agent, and interaction is shaped for clarity, not spectacle.',
  },
  {
    title: 'Partner-led delivery',
    label: 'Trust',
    icon: Users,
    description: 'You get direct access to the people building the work, not a chain of handoffs.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-ink px-6 py-24 text-foreground md:py-32 lg:px-8">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-primary">
            · Why EdgeBrain ·
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-tight md:text-4xl">
            A studio built for sharp products and even sharper execution.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We don’t overcomplicate the process. We focus on the essential moves that help products ship, learn, and
            grow.
          </p>
          <div className="mt-8 h-[2px] w-24 bg-primary" />
        </motion.div>

        <div className="space-y-4">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1, type: 'spring', stiffness: 100, damping: 15 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-primary/40 hover:bg-white/[0.05] md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.35em] text-primary">0{index + 1}</p>
                      <h3 className="mt-2 font-heading text-2xl font-semibold">{value.title}</h3>
                    </div>
                  </div>
                  <span className="rounded-full border border-primary/40 px-3 py-1 text-sm font-medium text-primary">
                    {value.label}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-6xl">
        <StatsCounter />
      </div>
    </section>
  )
}
