"use client"

import { LazyMotion, domAnimation, m } from "framer-motion"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  variant?: "fade" | "up" | "left" | "right" | "zoom"
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  duration = 650,
  variant = "up",
}: AnimatedSectionProps) {
  const hiddenVariants = {
    fade: { opacity: 0, y: 0, x: 0, scale: 1 },
    up: { opacity: 0, y: 40, x: 0, scale: 1 },
    left: { opacity: 0, y: 0, x: -40, scale: 1 },
    right: { opacity: 0, y: 0, x: 40, scale: 1 },
    zoom: { opacity: 0, y: 18, x: 0, scale: 0.96 },
  }[variant]

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        initial={hiddenVariants}
        whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: duration / 1000,
          delay: delay / 1000,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ willChange: "opacity, transform" }}
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}
