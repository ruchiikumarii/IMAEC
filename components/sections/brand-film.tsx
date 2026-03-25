import { Play } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function BrandFilmSection() {
  return (
    <section className="bg-[#0f1f3d] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="text-center">
          <AnimatedSection variant="up">
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-white">
              OUR STORY
            </span>
          </AnimatedSection>
          <AnimatedSection variant="up" delay={100}>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Inside IMAEC</h2>
          </AnimatedSection>
          <AnimatedSection variant="up" delay={180}>
            <p className="mx-auto mt-4 max-w-3xl text-base text-white/80 md:text-lg">
              Take a closer look at our manufacturing excellence, infrastructure and commitment to quality.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection variant="up" delay={220} className="mx-auto mt-12 max-w-5xl">
          <div className="card-premium relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1e3a6e] to-[#0f1f3d]">
            <button
              className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#16a34a] text-white shadow-2xl transition duration-300 hover:scale-105"
              aria-label="Play video"
            >
              <span className="absolute inset-0 rounded-full border border-[#16a34a] animate-ring-pulse" />
              <Play className="relative ml-1 h-8 w-8" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
