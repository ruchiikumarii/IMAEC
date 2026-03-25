import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { TrustBar } from "@/components/sections/trust-bar"
import { AboutSection } from "@/components/sections/about"
import { CapabilitiesSection } from "@/components/sections/capabilities"
import { ProductsSection } from "@/components/sections/products"
import { IndustriesSection } from "@/components/sections/industries"
import { ManufacturingSection } from "@/components/sections/manufacturing"
import { GlobalPresenceSection } from "@/components/sections/global-presence"
import { BrandFilmSection } from "@/components/sections/brand-film"
import { WhyImaecSection } from "@/components/sections/why-imaec"
import { CtaSection } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <CapabilitiesSection />
      <ProductsSection />
      <IndustriesSection />
      <ManufacturingSection />
      <GlobalPresenceSection />
      <BrandFilmSection />
      <WhyImaecSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
