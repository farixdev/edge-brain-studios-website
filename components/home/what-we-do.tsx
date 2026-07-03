'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Bot, Code2, Smartphone } from 'lucide-react'

const aiCapabilities = [
  'AI agents & assistants',
  'Workflow automation',
  'Chatbots & support bots',
  'Data & tool integrations',
]

const supportingServices = [
  {
    title: 'Website Development',
    icon: Code2,
    description: 'Fast, modern websites and web apps built to convert — clean design, solid engineering.',
    tags: ['Next.js', 'React', 'SEO'],
  },
  {
    title: 'App Development',
    icon: Smartphone,
    description: 'Cross-platform mobile apps that feel native, stay fast, and ship on schedule.',
    tags: ['iOS', 'Android', 'React Native'],
  },
]

const cardMotion = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
}

export function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-24 text-foreground md:py-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          {...cardMotion}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
        >
          <div>
            <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-primary">
              · What we do ·
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight md:text-4xl">
              Three ways we help you move faster.
            </h2>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm leading-relaxed text-muted-foreground md:p-8">
            We lead with AI automation — intelligent systems that handle the repetitive work — then back it with sharp
            websites and apps so your whole product stays cohesive.
          </div>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {/* Featured — AI Automation */}
          <motion.article
            {...cardMotion}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-[2rem] bg-primary p-8 text-primary-foreground lg:col-span-2 md:p-10"
          >
            <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-black/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(0,0,0,0.6)_1px,transparent_1px)] [background-size:22px_22px]" />
            <div className="relative grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a0a0a] text-primary">
                    <Bot className="size-6" />
                  </span>
                  <span className="rounded-full bg-[#0a0a0a] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-primary">
                    Main service
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-3xl font-bold leading-tight md:text-4xl">AI Automation</h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-primary-foreground/80">
                  We build AI agents, chatbots, and workflow automation that do the repetitive work for you — so your
                  team focuses on what actually matters.
                </p>
                <Link
                  href="/products"
                  className="group/btn mt-8 inline-flex items-center gap-2 rounded-full bg-[#0a0a0a] px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5"
                >
                  Explore AI Automation
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
              <ul className="grid gap-3">
                {aiCapabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-center gap-3 rounded-2xl border border-black/15 bg-black/[0.06] px-4 py-3 text-sm font-medium"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0a0a0a]" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>

          {/* Supporting services */}
          {supportingServices.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.title}
                {...cardMotion}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="glow-border group relative overflow-hidden rounded-[2rem]"
              >
                <div className="relative h-full rounded-[2rem] bg-card p-8">
                  <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_right,rgba(245,168,0,0.12),transparent_55%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/12 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.35em] text-primary">0{index + 2}</p>
                    <h3 className="mt-3 font-heading text-2xl font-semibold">{service.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
