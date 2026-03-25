import { AnimatedSection } from "@/components/animated-section"

const quickLinks = ["About Us", "Capabilities", "Products", "Industries", "Global Presence", "Contact"]

const certifications = ["WHO-GMP Certified", "ISO 9001:2015", "ISO 13485", "CE Marking"]

export function Footer() {
  return (
    <footer className="relative bg-[#0f1f3d] text-white">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#16a34a] via-[#1e3a6e] to-[#16a34a]" />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <AnimatedSection variant="up">
            <div>
              <h3 className="font-serif text-2xl font-bold tracking-widest">IMAEC</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                Integrated pharmaceutical and hygiene manufacturing company delivering quality products for global healthcare markets.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="up" delay={80}>
            <div>
              <h4 className="mb-4 text-sm font-bold tracking-widest text-white/70">QUICK LINKS</h4>
              <ul className="space-y-2 text-sm text-white/80">
                {quickLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="transition-colors duration-300 hover:text-[#16a34a]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="up" delay={140}>
            <div>
              <h4 className="mb-4 text-sm font-bold tracking-widest text-white/70">CERTIFICATIONS</h4>
              <ul className="space-y-2 text-sm text-white/80">
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="up" delay={200}>
            <div>
              <h4 className="mb-4 text-sm font-bold tracking-widest text-white/70">CONTACT</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="mailto:info@imaecpharma.com" className="transition-colors duration-300 hover:text-[#16a34a]">
                    info@imaecpharma.com
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors duration-300 hover:text-[#16a34a]">
                    Download Company Profile
                  </a>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-xs text-white/65">
          <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <p>© 2026 IMAEC Pharma. All rights reserved.</p>
            <p>
              <a href="#" className="transition-colors duration-300 hover:text-[#16a34a]">Privacy Policy</a>
              <span className="px-2">|</span>
              <a href="#" className="transition-colors duration-300 hover:text-[#16a34a]">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
