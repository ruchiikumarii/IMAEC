"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import heroPharmaImage from "@/assets/images/sections/hero-pharma.jpg"

const title = "India's Trusted Partner for Pharmaceutical & Hygiene Manufacturing"

export function HeroSection() {
  const [typed, setTyped] = useState("")

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      i += 1
      setTyped(title.slice(0, i))
      if (i >= title.length) {
        clearInterval(timer)
      }
    }, 34)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0f1f3d] pt-20">
      <Image
        src={heroPharmaImage}
        alt="Pharmaceutical lab"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#0f1f3d]/78" />

      <div className="pointer-events-none absolute inset-0">
        <div className="animate-blob-float absolute left-[10%] top-[22%] h-36 w-36 rounded-full bg-[#16a34a]/20 blur-2xl" />
        <div className="animate-blob-float absolute right-[12%] top-[18%] h-28 w-28 rounded-full bg-[#1e3a6e]/35 blur-xl [animation-delay:1s]" />
        <div className="animate-blob-float absolute bottom-[18%] left-[24%] h-44 w-44 rounded-full bg-white/10 blur-2xl [animation-delay:1.8s]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 text-center sm:px-6">
        <AnimatedSection variant="up">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {typed}
            <span className="ml-1 inline-block h-8 w-[3px] animate-pulse bg-[#16a34a] align-middle" />
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={120} variant="up">
          <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
            From disinfectants to medical consumables, IMAEC delivers high-quality, compliant and scalable manufacturing solutions for healthcare, institutional and global markets.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={220} variant="up">
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-md bg-[#16a34a] px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-2xl sm:text-base"
            >
              Request Business Enquiry →
            </a>
            <a
              href="#"
              className="rounded-md border border-white/60 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10 hover:shadow-2xl sm:text-base"
            >
              Download Company Profile ↓
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
