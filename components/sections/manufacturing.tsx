import { Gauge, Wind, Settings, Microscope } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCounter } from "@/components/ui/animated-counter"

const facilityItems = [
  { icon: Gauge, text: "High-capacity production lines" },
  { icon: Wind, text: "Cleanroom-controlled environments" },
  { icon: Settings, text: "Automated filling & packaging systems" },
  { icon: Microscope, text: "In-house quality testing laboratories" },
]

export function ManufacturingSection() {
  return (
    <section id="manufacturing" className="bg-[#1a237e] py-16 text-white sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="text-center">
          <AnimatedSection variant="up">
            <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold tracking-widest text-white">
              OUR STRENGTH
            </span>
          </AnimatedSection>
          <AnimatedSection variant="up" delay={100}>
            <h2 className="text-3xl font-bold md:text-4xl">Built on Infrastructure, Driven by Precision</h2>
          </AnimatedSection>
          <AnimatedSection variant="up" delay={180}>
            <p className="mx-auto mt-4 max-w-4xl text-base text-white/85 md:text-lg">
              Our manufacturing facilities are designed to meet global quality standards with advanced production lines, controlled environments and strict quality control systems.
            </p>
          </AnimatedSection>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilityItems.map((item, index) => (
            <AnimatedSection key={item.text} variant="up" delay={index * 100}>
              <article className="group card-premium rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
                <div className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#16a34a]/25 text-[#16a34a]">
                  <span className="absolute inset-0 rounded-full border border-[#16a34a]/70 animate-ring-pulse" />
                  <item.icon className="relative z-10 h-6 w-6" />
                </div>
                <p className="mb-2 text-xs font-bold tracking-[0.2em] text-[#9bf0b5]">
                  0<AnimatedCounter value={index + 1} duration={800} />
                </p>
                <p className="text-sm font-semibold leading-relaxed text-white">{item.text}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection variant="up" delay={230} className="mt-10 text-center">
          <a
            href="#"
            className="card-premium inline-flex items-center rounded-md bg-[#16a34a] px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#148a3f]"
          >
            Explore Our Facility →
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
