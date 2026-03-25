"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface AnimatedWrapperProps {
  children: React.ReactNode
}

export function AnimatedWrapper({ children }: AnimatedWrapperProps) {
  const { ref, isVisible } = useScrollAnimation(0.08)

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      }}
    >
      {children}
    </div>
  )
}
