'use client'

import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'
import { useEffect, useMemo, useRef, useState, type MouseEvent } from 'react'
import { ArrowRight, Bot, Check, Sparkles } from 'lucide-react'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const marqueeItems = ['AI Automation', 'AI Agents', 'Websites', 'Mobile Apps', 'Chatbots', 'Workflows', 'Integrations']

const agentLog = [
  { label: 'Ticket received', tone: 'muted' },
  { label: 'Classifying intent…', tone: 'muted' },
  { label: 'Drafting reply with context', tone: 'muted' },
  { label: 'Auto-resolved in 1.2s', tone: 'done' },
]

export function HomeHero() {
  const [isTouch, setIsTouch] = useState(false)
  const heroRef = useRef<HTMLElement | null>(null)
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springX = useSpring(cursorX, { stiffness: 150, damping: 20 })
  const springY = useSpring(cursorY, { stiffness: 150, damping: 20 })
  const { scrollYProgress } = useScroll()
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -80])

  useEffect(() => {
    const checkTouch = () => setIsTouch(window.matchMedia('(pointer: coarse)').matches)
    checkTouch()
    window.addEventListener('resize', checkTouch)
    return () => window.removeEventListener('resize', checkTouch)
  }, [])

  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    const rect = heroRef.current?.getBoundingClientRect()
    if (!rect) return
    cursorX.set(event.clientX - rect.left)
    cursorY.set(event.clientY - rect.top)
  }

  const glowStyle = useMemo(
    () => ({ left: springX, top: springY, transform: 'translate(-50%, -50%)' }),
    [springX, springY],
  )

  return (
    <section
      ref={heroRef}
      onMouseMove={handlePointerMove}
      className="relative overflow-hidden bg-background text-foreground"
    >
      {/* Backdrop layers */}
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ y: parallaxY }}>
        <div className="tech-grid absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <div className="absolute -top-32 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,168,0,0.16),transparent_60%)]" />
        <div className="ambient-blob absolute right-[6%] top-[14%] hidden h-64 w-64 rounded-full bg-primary/20 blur-[120px] sm:block" />
      </motion.div>

      {!isTouch && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute z-10 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(245,168,0,0.28),transparent_68%)] blur-3xl"
          style={glowStyle}
        />
      )}

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-24 pt-36 md:px-8 md:pb-32 md:pt-48 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-52"
      >
        <div className="flex flex-col items-start">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-foreground/80 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 dot-pulse" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            AI Automation · Web · Apps
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-7 font-heading text-[clamp(2.75rem,7vw,5.5rem)] font-bold uppercase leading-[0.92] tracking-[-0.04em]"
          >
            <span className="gradient-text">We Build</span>{' '}
            <span className="gradient-text">Software &amp;</span>{' '}
            <span className="relative inline-block text-primary">
              AI
              <svg viewBox="0 0 260 70" className="pointer-events-none absolute left-0 top-[92%] h-6 w-full text-primary" aria-hidden>
                <path
                  d="M8 52C58 34 116 24 174 30C211 34 242 44 252 56"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray="8 12"
                  className="animate-[dash_1.4s_ease-out_forwards]"
                  style={{ strokeDashoffset: 260 }}
                />
              </svg>
            </span>{' '}
            <span className="gradient-text">That Ships.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            EdgeBrain Studios builds AI automation, websites, and apps — intelligent systems that do the repetitive
            work, wrapped in products people actually enjoy using.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_32px_rgba(245,168,0,0.5)]"
            >
              Start a Project
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-white/30 hover:bg-white/10"
            >
              Explore Services
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div>
              <span className="font-heading text-xl font-bold text-foreground">120+</span> projects shipped
            </div>
            <span className="h-8 w-px bg-white/10" />
            <div>
              <span className="font-heading text-xl font-bold text-foreground">80+</span> happy clients
            </div>
          </motion.div>
        </div>

        {/* AI agent visual */}
        <motion.div variants={item} className="relative">
          <div className="glow-border float-y rounded-[1.75rem]">
            <div className="rounded-[1.75rem] bg-[#0d0d0d]/90 p-5 backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Bot className="size-5" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-foreground">Support Agent</p>
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-primary">● live</p>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                </div>
              </div>

              <div className="mt-5 space-y-2.5">
                {agentLog.map((line, index) => (
                  <motion.div
                    key={line.label}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.35, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className={`flex items-center gap-3 rounded-xl border px-3.5 py-2.5 text-sm ${
                      line.tone === 'done'
                        ? 'border-primary/40 bg-primary/10 text-foreground'
                        : 'border-white/10 bg-white/[0.03] text-muted-foreground'
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        line.tone === 'done' ? 'bg-primary text-primary-foreground' : 'bg-white/10 text-foreground/60'
                      }`}
                    >
                      {line.tone === 'done' ? <Check className="size-3" /> : <Sparkles className="size-3" />}
                    </span>
                    {line.label}
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl bg-white/[0.03] px-3.5 py-2.5">
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Resolution time
                </span>
                <span className="font-heading text-lg font-bold text-primary">1.2s</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Marquee strip */}
      <div className="relative border-y border-white/10 bg-white/[0.02] py-4">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-[marquee_22s_linear_infinite] gap-10 pr-10 text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">
            {[...marqueeItems, ...marqueeItems].map((label, index) => (
              <span key={`${label}-${index}`} className="flex items-center gap-10 whitespace-nowrap">
                {label}
                <span className="h-1 w-1 rounded-full bg-primary" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
