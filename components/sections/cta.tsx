import { AnimatedSection } from "@/components/animated-section"

export function CtaSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#1a237e] py-16 sm:py-20 lg:py-28">
      <div
        className="animate-mesh-shift absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(26,35,126,0.95), rgba(30,58,110,0.88), rgba(22,163,74,0.82))",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-6">
        <AnimatedSection variant="up">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Looking for a Reliable Manufacturing Partner?
          </h2>
        </AnimatedSection>
        <AnimatedSection variant="up" delay={100}>
          <p className="mx-auto mt-5 max-w-3xl text-base text-white/90 md:text-lg">
            Whether you are a distributor, healthcare institution or brand looking for contract manufacturing, IMAEC is equipped to support your growth.
          </p>
        </AnimatedSection>
        <AnimatedSection variant="up" delay={220} className="mt-10">
          <a
            href="#"
            className="group relative inline-flex overflow-hidden rounded-md bg-[#16a34a] px-8 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:shadow-2xl sm:text-base"
          >
            <span className="pointer-events-none absolute inset-y-0 left-0 w-1/2 -translate-x-[180%] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-[280%]" />
            <span className="relative">Become a Partner →</span>
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
