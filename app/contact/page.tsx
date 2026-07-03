import type { Metadata } from 'next'
import ContactClient from './contact-client'

export const metadata: Metadata = {
  title: 'Contact — EdgeBrain Studios',
  description:
    'Get in touch with EdgeBrain Studios about AI automation, web, or app projects. Call +92 327 0944766 or email edgebrainstudios@gmail.com.',
}

export default function ContactPage() {
  return <ContactClient />
}
