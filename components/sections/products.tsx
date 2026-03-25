import { SprayCan, HandMetal, Syringe, Building2, Droplets } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const products = [
  { icon: SprayCan, label: "Surface & Hospital Disinfectants" },
  { icon: HandMetal, label: "Hand Hygiene & Sanitization Products" },
  { icon: Syringe, label: "Medical & Surgical Consumables" },
  { icon: Building2, label: "Institutional Hygiene Solutions" },
  { icon: Droplets, label: "Dialysis & Specialty Products" },
  { icon: Droplets, label: "Dialysis & Specialty Products" },
]

export function ProductsSection() {
  return (
    <section id="products" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="text-center">
          <AnimatedSection variant="up">
            <span className="mb-4 inline-block rounded-full bg-[#16a34a]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#16a34a]">
              OUR PORTFOLIO
            </span>
          </AnimatedSection>
          <AnimatedSection variant="up" delay={100}>
            <h2 className="text-3xl font-bold text-[#0f1f3d] md:text-4xl">Comprehensive Product Portfolio</h2>
          </AnimatedSection>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item, index) => (
            <AnimatedSection key={`${item.label}-${index}`} variant="up" delay={index * 100}>
              <div className="group card-premium rounded-full border border-slate-200 bg-white px-5 py-4 transition duration-500 hover:border-[#16a34a]/40">
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-[#1e3a6e] transition duration-300 group-hover:text-[#16a34a]" />
                  <span className="text-sm font-semibold text-[#0f1f3d]">{item.label}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection variant="up" delay={220} className="mt-10 text-center">
          <a
            href="#"
            className="card-premium inline-flex items-center rounded-md bg-[#0f1f3d] px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#1e3a6e]"
          >
            View Product Categories →
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
