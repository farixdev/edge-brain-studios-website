'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/logo'

const links = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 lg:px-6">
      <nav
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-5',
          scrolled
            ? 'border border-white/10 bg-[#0c0c0c]/80 shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl'
            : 'border border-transparent bg-transparent',
        )}
      >
        <Link href="/" aria-label="EdgeBrain Studios home" className="relative z-10">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const activeLink = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    activeLink ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {activeLink && (
                    <span className="absolute inset-0 rounded-full border border-white/10 bg-white/5" />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>

        <Link
          href="/contact"
          className="group hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_28px_rgba(245,168,0,0.5)] md:inline-flex"
        >
          Start a Project
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-[#0c0c0c]/95 p-3 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                    pathname === link.href
                      ? 'bg-primary/15 text-primary'
                      : 'text-muted-foreground hover:bg-white/5 hover:text-foreground',
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-1">
              <Link
                href="/contact"
                className="block rounded-xl bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Start a Project
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
