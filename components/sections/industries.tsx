"use client"

import { Hospital, Pill, Building, Hotel, Globe } from "lucide-react"
import { LazyMotion, domAnimation, m } from "framer-motion"
import { AnimatedSection } from "@/components/animated-section"

const industries = [
  { icon: Hospital, label: "Hospitals & Healthcare Facilities" },
  { icon: Pill, label: "Pharmaceutical Companies" },
  { icon: Building, label: "Facility Management Companies" },
  { icon: Hotel, label: "Hospitality & Commercial Spaces" },
  { icon: Globe, label: "Distributors & Global Markets" },
]

export function IndustriesSection() {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  }

  return (
    <section id="industries" className="bg-[#f0f4f8] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="text-center">
          <AnimatedSection variant="up">
            <span className="mb-4 inline-block rounded-full bg-[#1e3a6e]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#1e3a6e]">
              WHO WE SERVE
            </span>
          </AnimatedSection>
          <AnimatedSection variant="up" delay={100}>
            <h2 className="text-3xl font-bold text-[#0f1f3d] md:text-4xl">
              Serving Critical Healthcare & Institutional Sectors
            </h2>
          </AnimatedSection>
          <AnimatedSection variant="up" delay={180}>
            <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600 md:text-lg">
              Our products and solutions are designed to meet the hygiene and safety requirements of diverse industries.
            </p>
          </AnimatedSection>
        </div>

        <LazyMotion features={domAnimation}>
          <m.div
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {industries.map((item) => (
              <m.article
                key={item.label}
                variants={cardVariants}
                className="group card-premium rounded-xl border border-slate-200 border-b-2 border-b-transparent bg-white p-6 text-center transition-all duration-300 ease-in-out hover:border-green-400 hover:bg-[#1e3a6e]"
              >
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1e3a6e]/10 text-[#1e3a6e] transition-all duration-300 ease-in-out group-hover:bg-white/15 group-hover:text-white">
                  <item.icon className="h-7 w-7 transition-all duration-300 ease-in-out group-hover:text-white" />
                </div>
                <p className="text-sm font-semibold text-[#0f1f3d] transition-all duration-300 ease-in-out group-hover:text-white">{item.label}</p>
              </m.article>
            ))}
          </m.div>
        </LazyMotion>
      </div>
    </section>
  )
}
