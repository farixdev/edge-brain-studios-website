'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Compass, Globe, Gem, Sparkles, Zap } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { CtaBanner } from '@/components/cta-banner'

const values = [
  { title: 'Craft', icon: Gem, text: 'Every release is treated like a piece of work with a point of view.' },
  { title: 'Clarity', icon: Sparkles, text: 'We simplify complex products until they feel obvious to use.' },
  { title: 'Momentum', icon: Zap, text: 'We build the first version fast and keep refining with discipline.' },
]

export default function AboutClient() {
  return (
    <>
      <PageHeader
        eyebrow="About EdgeBrain Studios"
        title="Built in Pakistan. Shaped for the world."
        subtitle="We’re a compact team of engineers and designers building AI automation, websites, and apps that feel considered, sharp, and ready to grow."
      />

      <section className="bg-background px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-primary">
              · Our story ·
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight md:text-4xl">
              We believe great software should feel as deliberate as the business behind it.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              EdgeBrain Studios started with a simple premise: the best products come from focused teams who care about
              both the technology and the human experience around it.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glow-border relative rounded-[2rem]"
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-card p-6">
              <div className="absolute right-4 top-4 h-24 w-24 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10">
                <Image
                  src="/images/about-team.png"
                  alt="EdgeBrain Studios team"
                  fill
                  className="object-cover opacity-90"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-ink px-6 py-24 text-foreground lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-primary">· Values ·</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-primary/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-semibold">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-24 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[2rem] border border-white/10 bg-card p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-2xl">
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-primary">
              · Location ·
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight md:text-4xl">
              Based in Pakistan, building for teams across the world.
            </h2>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-foreground">
              <Compass className="size-4 text-primary" />
              Pakistan 🇵🇰
            </div>
            <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
              <Globe className="size-4 text-primary" />
              Remote collaboration, global clients, punctual delivery.
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want to work with us?"
        subtitle="We’d love to hear about your project and explore how we can help."
      />
    </>
  )
}
