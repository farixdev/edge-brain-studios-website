import { HomeHero } from '@/components/home/hero'
import { WhatWeDo } from '@/components/home/what-we-do'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { FeaturedWork } from '@/components/home/featured-work'
import { CtaBanner } from '@/components/cta-banner'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <WhatWeDo />
      <WhyChooseUs />
      <FeaturedWork />
      <CtaBanner />
    </>
  )
}
