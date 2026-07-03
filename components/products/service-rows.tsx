'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const rows = [
  {
    title: 'AI Automation',
    featured: true,
    image: '/images/service-uiux.png',
    description:
      'Our main focus. We build AI agents, chatbots, and workflow automation that handle repetitive work — from customer support to internal operations — so your team can do more with less.',
    points: ['AI agents & assistants', 'Workflow automation', 'Chatbots & integrations'],
  },
  {
    title: 'Website Development',
    image: '/images/service-web.png',
    description:
      'Fast, responsive, and accessible websites and web apps built with modern frameworks like Next.js and React.',
    points: ['Responsive design', 'SEO optimized', 'Blazing fast performance'],
  },
  {
    title: 'App Development',
    image: '/images/service-mobile.png',
    description:
      'Cross-platform and native mobile apps that deliver a smooth, native-feeling experience on every device.',
    points: ['iOS & Android', 'Offline support', 'Push notifications'],
  },
  {
    title: 'Maintenance & Support',
    image: '/images/service-support.png',
    description: 'We keep your product healthy with proactive monitoring, updates, and rapid support.',
    points: ['24/7 monitoring', 'Regular updates', 'Dedicated support'],
  },
]

export function ServiceRows() {
  return (
    <div className="flex flex-col gap-12">
      {rows.map((row, index) => {
        const reversed = index % 2 === 1
        return (
          <motion.div
            key={row.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-card p-6 md:grid-cols-[1.05fr_0.95fr] md:p-8"
          >
            <div
              className={`relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 ${
                reversed ? 'md:order-2' : ''
              }`}
            >
              <Image
                src={row.image || '/placeholder.svg'}
                alt={row.title}
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-transparent to-transparent" />
            </div>

            <div className={reversed ? 'md:order-1' : ''}>
              <div className="flex items-center gap-3">
                <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-primary">
                  0{index + 1}
                </p>
                {row.featured && (
                  <span className="rounded-full bg-primary px-3 py-1 text-[0.58rem] font-bold uppercase tracking-[0.3em] text-primary-foreground">
                    Main service
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-heading text-2xl font-bold text-foreground md:text-3xl">{row.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{row.description}</p>
              <ul className="mt-6 flex flex-col gap-2.5">
                {row.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="size-3" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
