import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import facilityImage from "@/assets/images/sections/facility.jpg"

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div>
          <AnimatedSection variant="up">
            <span className="mb-4 inline-block rounded-full bg-[#1e3a6e]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#1e3a6e]">
              ABOUT IMAEC
            </span>
          </AnimatedSection>

          <AnimatedSection variant="up" delay={100}>
            <h2 className="text-3xl font-bold text-[#0f1f3d] md:text-4xl">
              A Manufacturing Partner Built for Scale & Reliability
            </h2>
          </AnimatedSection>

          <AnimatedSection variant="up" delay={180}>
            <p className="mt-6 border-l-4 border-green-600 pl-4 text-base leading-relaxed text-slate-600 md:text-lg">
              IMAEC is an integrated pharmaceutical and hygiene manufacturing company, delivering high-quality products across disinfectants, medical consumables, hygiene solutions and contract manufacturing.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="up" delay={240}>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              With advanced infrastructure, strict quality protocols and a growing global footprint, we support healthcare institutions, distributors and partners with reliable, scalable manufacturing.
            </p>
          </AnimatedSection>

          <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
            <AnimatedSection variant="up" delay={280}>
              <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
                <p className="text-3xl font-bold text-green-600">
                  <AnimatedCounter value={500} suffix="+" duration={900} />
                </p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">Products</p>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="up" delay={360}>
              <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
                <p className="text-3xl font-bold text-green-600">
                  <AnimatedCounter value={15} suffix="+" duration={900} />
                </p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">Countries</p>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="up" delay={440}>
              <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
                <p className="text-3xl font-bold text-green-600">
                  <AnimatedCounter value={10} suffix="+" duration={900} />
                </p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">Years</p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <AnimatedSection variant="right" delay={140}>
          <div className="card-premium overflow-hidden rounded-xl">
            <Image src={facilityImage} alt="Facility image 3" width={1200} height={540} className="h-full w-full object-cover" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
