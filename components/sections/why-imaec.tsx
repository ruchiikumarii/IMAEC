"use client"

import { TrendingUp, ShieldCheck, Layers, Truck, Globe } from "lucide-react"
import { LazyMotion, domAnimation, m } from "framer-motion"
import { AnimatedSection } from "@/components/animated-section"

const reasons = [
  { icon: TrendingUp, text: "Scalable manufacturing capabilities" },
  { icon: ShieldCheck, text: "Strong quality and compliance framework" },
  { icon: Layers, text: "Diverse product portfolio" },
  { icon: Truck, text: "Reliable supply chain" },
  { icon: Globe, text: "Growing global presence" },
]

export function WhyImaecSection() {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { x: -40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="bg-[#f0f4f8] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="text-center">
          <AnimatedSection variant="up">
            <span className="mb-4 inline-block rounded-full bg-[#1e3a6e]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#1e3a6e]">
              OUR EDGE
            </span>
          </AnimatedSection>
          <AnimatedSection variant="up" delay={100}>
            <h2 className="text-3xl font-bold text-[#0f1f3d] md:text-4xl">Why Partner With IMAEC</h2>
          </AnimatedSection>
        </div>

        <LazyMotion features={domAnimation}>
          <m.div
            className="mx-auto mt-12 grid max-w-3xl gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {reasons.map((item, index) => (
              <m.article
                key={item.text}
                variants={cardVariants}
                className="relative flex items-center gap-4 rounded-lg border border-slate-200 border-l-4 border-l-green-600 bg-white p-5 transition-all duration-300 ease-in-out hover:translate-x-[8px] hover:bg-[#f0f7f4] hover:shadow-lg"
              >
                <p className="pointer-events-none absolute right-4 top-2 text-4xl font-bold text-green-600 opacity-20">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#1e3a6e]/10 text-[#1e3a6e]">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold text-[#0f1f3d] sm:text-base">{item.text}</p>
              </m.article>
            ))}
          </m.div>
        </LazyMotion>
      </div>
    </section>
  )
}
