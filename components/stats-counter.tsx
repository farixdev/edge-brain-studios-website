'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])

  return value
}

function Stat({ value, suffix, label, active }: { value: number; suffix?: string; label: string; active: boolean }) {
  const count = useCountUp(value, active)
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center transition-colors duration-300 hover:border-primary/40"
    >
      <div className="font-heading text-5xl font-bold text-primary md:text-6xl">
        {count}
        {suffix}
      </div>
      <div className="mt-3 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">{label}</div>
    </motion.div>
  )
}

const stats = [
  { value: 120, suffix: '+', label: 'Projects Delivered' },
  { value: 80, suffix: '+', label: 'Happy Clients' },
  { value: 6, suffix: '', label: 'Years of Experience' },
]

export function StatsCounter() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <div ref={ref} className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {stats.map((stat) => (
        <Stat key={stat.label} {...stat} active={inView} />
      ))}
    </div>
  )
}
