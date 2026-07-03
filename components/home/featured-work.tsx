'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Atlas — AI Support Agent',
    category: 'AI Automation',
    image: '/images/project-saas.png',
    description: 'An AI agent that handles customer support end-to-end, cutting response time from hours to seconds.',
  },
  {
    title: 'Flowline — Ops Automation',
    category: 'AI Workflow',
    image: '/images/project-ecommerce.png',
    description: 'Automated back-office workflows that connect the tools a team already uses and remove the busywork.',
  },
  {
    title: 'Ledger — Fintech App',
    category: 'Mobile App',
    image: '/images/project-fintech.png',
    description: 'A finance experience tuned for speed, clarity, and trust across the full onboarding flow.',
  },
]

export function FeaturedWork() {
  return (
    <section className="bg-background px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-primary">
              · Featured Work ·
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight md:text-4xl">
              Projects with shape, momentum, and a clear point of view.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Selected builds where the product, interface, and delivery story all landed with intent.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-[1.6rem] border border-white/10 bg-card transition-colors duration-300 hover:border-primary/40"
            >
              <Link href="/products" className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    className="object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,168,0,0.2),transparent_65%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.28em] text-primary backdrop-blur">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-xl font-semibold text-foreground">{project.title}</h3>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-foreground transition group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
