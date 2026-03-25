import { AnimatedSection } from "@/components/animated-section"

const trustItems = [
  "WHO-GMP Compliant",
  "ISO Certified Manufacturing",
  "Global Export Presence",
  "High-Capacity Production Facilities",
]

export function TrustBar() {
  return (
    <section className="overflow-hidden bg-[#1a237e] py-4">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap px-6">
        {[...trustItems, ...trustItems, ...trustItems].map((item, index) => (
          <AnimatedSection key={`${item}-${index}`} variant="fade" delay={0}>
            <p className="text-sm font-semibold tracking-wide text-white sm:text-base">
              ✓ {item}
            </p>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
