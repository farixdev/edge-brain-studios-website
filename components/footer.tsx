import Link from 'next/link'
import { Instagram, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { Logo } from '@/components/logo'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { href: '/products', label: 'AI Automation' },
  { href: '/products', label: 'Website Development' },
  { href: '/products', label: 'App Development' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink text-foreground">
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.7fr_0.9fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              An AI automation, web, and app studio based in Pakistan, building sharp, high-performance products for
              ambitious teams.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-primary">Navigate</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-primary">Services</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-primary">Contact</h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-primary" />
                <a href="tel:+923270944766" className="hover:text-primary">
                  +92 327 0944766
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-primary" />
                <a href="mailto:edgebrainstudios@gmail.com" className="hover:text-primary">
                  edgebrainstudios@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-4 shrink-0 text-primary" />
                <span>Pakistan</span>
              </li>
            </ul>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="EdgeBrain Studios on Instagram"
              className="mt-6 inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Instagram className="size-5" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© 2026 EdgeBrain Studios. All rights reserved.</span>
          <Link href="/contact" className="inline-flex items-center gap-1 hover:text-primary">
            Start a project
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
