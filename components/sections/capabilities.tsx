"use client"

import { FlaskConical, ShieldPlus, Stethoscope, Handshake } from "lucide-react"
import { LazyMotion, domAnimation, m } from "framer-motion"
import { AnimatedSection } from "@/components/animated-section"

const capabilities = [
  {
    icon: FlaskConical,
    title: "Pharmaceutical Manufacturing",
    desc: "Formulation and production of high-quality pharmaceutical and hygiene products.",
  },
  {
    icon: ShieldPlus,
    title: "Disinfectants & Hygiene Solutions",
    desc: "Hospital-grade disinfectants and institutional hygiene solutions.",
  },
  {
    icon: Stethoscope,
    title: "Medical Consumables",
    desc: "Production of essential medical and surgical consumables.",
  },
  {
    icon: Handshake,
    title: "Contract Manufacturing (CDMO)",
    desc: "End-to-end manufacturing support for healthcare and hygiene brands.",
  },
]

export function CapabilitiesSection() {
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  }

  return (
    <section id="capabilities" className="bg-[#f0f4f8] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="text-center">
          <AnimatedSection variant="up">
            <span className="mb-4 inline-block rounded-full bg-[#1e3a6e]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#1e3a6e]">
              WHAT WE DO
            </span>
          </AnimatedSection>
          <AnimatedSection variant="up" delay={100}>
            <h2 className="text-3xl font-bold text-[#0f1f3d] md:text-4xl">
              Our Manufacturing Capabilities
            </h2>
          </AnimatedSection>
          <AnimatedSection variant="up" delay={180}>
            <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600 md:text-lg">
              Built to deliver consistency, quality and scale across diverse healthcare needs.
            </p>
          </AnimatedSection>
        </div>

        <LazyMotion features={domAnimation}>
          <m.div
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {capabilities.map((item) => (
              <m.article
                key={item.title}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-xl border border-slate-200 border-t-4 border-t-green-600 bg-white p-6 shadow-lg transition-all duration-300 ease-in-out hover:translate-y-[-8px] hover:shadow-2xl"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-[#1e3a6e] transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-green-100">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0f1f3d]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </m.article>
            ))}
          </m.div>
        </LazyMotion>
      </div>
    </section>
  )
}
