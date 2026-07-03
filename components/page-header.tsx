'use client'

import { motion } from 'framer-motion'

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle: string
}) {
  return (
    <section className="relative overflow-hidden bg-background px-6 pb-20 pt-40 text-foreground md:pb-28 md:pt-48 lg:px-8">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,168,0,0.14),transparent_60%)]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-6xl"
      >
        <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-heading text-[clamp(2.6rem,5vw,4.3rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em]">
          <span className="gradient-text">{title}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
        <div className="mt-8 h-[2px] w-24 bg-primary" />
      </motion.div>
    </section>
  )
}
