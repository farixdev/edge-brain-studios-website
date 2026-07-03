'use client'

import { Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '@/components/contact/contact-form'
import { motion } from 'framer-motion'

const channels = [
  { icon: Phone, label: 'Phone', value: '+92 327 0944766', href: 'tel:+923270944766' },
  { icon: Mail, label: 'Email', value: 'edgebrainstudios@gmail.com', href: 'mailto:edgebrainstudios@gmail.com' },

]

export default function ContactClient() {
  return (
    <>
      <section className="relative overflow-hidden bg-background px-6 pb-20 pt-40 text-foreground md:pb-24 md:pt-48 lg:px-8">
        <div className="tech-grid pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,168,0,0.14),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl">
          <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-primary">· Contact ·</p>
          <h1 className="mt-4 max-w-4xl font-heading text-[clamp(2.5rem,5vw,4.2rem)] font-bold uppercase leading-[0.95] tracking-[-0.03em]">
            <span className="gradient-text">Let’s build something that leaves a mark.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Whether it’s AI automation, a website, or a new app, we’re ready to shape it with intent.
          </p>
        </div>
      </section>

      <section className="bg-background px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-ink p-8 text-foreground md:p-10"
          >
            <div className="tech-grid pointer-events-none absolute inset-0 opacity-60" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/15 blur-[90px]" />
            <div className="relative">
              <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-primary">
                · Direct channel ·
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold leading-tight">Reach us directly.</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We’re happy to talk through the brief, the timing, and the best way to approach the build.
              </p>

              <ul className="mt-8 flex flex-col gap-6">
                {channels.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                        {label}
                      </p>
                      {href ? (
                        <a href={href} className="mt-1 block break-all text-base font-medium hover:text-primary">
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 text-base font-medium">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-10 border-t border-white/10 pt-6">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-muted-foreground">Follow us</p>
              <a
                href="https://www.instagram.com/edgebrainstudios/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="EdgeBrain Studios on Instagram"
                className="mt-4 inline-flex size-11 items-center justify-center rounded-full border border-white/15 text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="size-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
