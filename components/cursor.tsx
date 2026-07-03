'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Minimal custom cursor: a precise dot at the pointer plus a soft lagging ring.
 * Grows when hovering interactive elements. Disabled on touch devices and when
 * the user prefers reduced motion, so the native cursor is never taken away
 * from people who need it.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const [down, setDown] = useState(false)
  const [overText, setOverText] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 350, damping: 34, mass: 0.6 })
  const ringY = useSpring(y, { stiffness: 350, damping: 34, mass: 0.6 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return

    setEnabled(true)
    document.documentElement.classList.add('cursor-none')

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = e.target as Element | null
      // Over text fields, defer to the native caret (I-beam) and hide the custom cursor.
      setOverText(!!target?.closest('input:not([type="button"]):not([type="submit"]), textarea, [contenteditable="true"]'))
      setActive(!!target?.closest('a, button, select, [data-cursor="hover"]'))
    }
    const onDown = () => setDown(true)
    const onUp = () => setDown(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    return () => {
      document.documentElement.classList.remove('cursor-none')
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] transition-opacity duration-200"
      style={{ opacity: overText ? 0 : 1 }}
    >
      {/* Precise dot */}
      <motion.span
        className="absolute left-0 top-0 block h-1.5 w-1.5 rounded-full bg-primary"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: down ? 0.6 : active ? 0 : 1 }}
        transition={{ duration: 0.18 }}
      />
      {/* Lagging ring */}
      <motion.span
        className="absolute left-0 top-0 block rounded-full border"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: active ? 46 : 30,
          height: active ? 46 : 30,
          borderColor: active ? 'rgba(245,168,0,0.9)' : 'rgba(245,245,244,0.35)',
          backgroundColor: active ? 'rgba(245,168,0,0.12)' : 'rgba(245,168,0,0)',
          scale: down ? 0.85 : 1,
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      />
    </div>
  )
}
