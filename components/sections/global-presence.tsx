"use client"

import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const markers = [
  { label: "Cameroon", coordinates: [12.3547, 7.3697] as [number, number] },
  { label: "Republic Of Kenya", coordinates: [37.9062, -0.0236] as [number, number] },
  { label: "Tanzania", coordinates: [34.8888, -6.369] as [number, number] },
  { label: "Saudi Arabia", coordinates: [45.0792, 23.8859] as [number, number] },
  { label: "UAE", coordinates: [53.8478, 23.4241] as [number, number] },
  { label: "Sri Lanka", coordinates: [80.7718, 7.8731] as [number, number] },
  { label: "Vietnam", coordinates: [108.2772, 14.0583] as [number, number] },
  { label: "Nepal", coordinates: [84.124, 28.3949] as [number, number] },
  { label: "Bhutan", coordinates: [90.4336, 27.5142] as [number, number] },
]

export function GlobalPresenceSection() {
  return (
    <section id="global" className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="text-center">
          <AnimatedSection variant="up">
            <span className="mb-4 inline-block rounded-full bg-[#1e3a6e]/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#1e3a6e]">
              OUR REACH
            </span>
          </AnimatedSection>
          <AnimatedSection variant="up" delay={100}>
            <h2 className="text-3xl font-bold text-[#0f1f3d] md:text-4xl">Expanding Across Global Markets</h2>
          </AnimatedSection>
          <AnimatedSection variant="up" delay={180}>
            <p className="mx-auto mt-4 max-w-4xl text-base text-slate-600 md:text-lg">
              IMAEC serves partners across multiple international markets, delivering reliable manufacturing solutions tailored to regional healthcare needs.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection variant="up" delay={200}>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-xl bg-[#2a6288] p-0">
            <ComposableMap
              projection="geoEqualEarth"
              projectionConfig={{ scale: 155 }}
              className="h-auto w-full"
              aria-label="Global map"
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="transparent"
                      stroke="#8fbedd"
                      strokeWidth={0.65}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {markers.map((marker) => (
                <Marker key={marker.label} coordinates={marker.coordinates}>
                  <g>
                    <title>{marker.label}</title>
                    <circle className="pulse-ring" r={7} fill="rgba(110, 246, 229, 0.2)" />
                    <circle r={2.8} fill="#d6fff8" stroke="#5fd9cc" strokeWidth={1.4} />
                  </g>
                </Marker>
              ))}
            </ComposableMap>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            <div className="rounded-lg border border-slate-200 border-t border-t-green-600 bg-white p-4 text-center">
              <p className="text-3xl font-bold text-green-600"><AnimatedCounter value={20} suffix="+" duration={900} /></p>
              <p className="mt-1 text-sm text-slate-500">Countries Served</p>
            </div>
            <div className="rounded-lg border border-slate-200 border-t border-t-green-600 bg-white p-4 text-center">
              <p className="text-3xl font-bold text-green-600"><AnimatedCounter value={500} suffix="+" duration={900} /></p>
              <p className="mt-1 text-sm text-slate-500">Products</p>
            </div>
            <div className="rounded-lg border border-slate-200 border-t border-t-green-600 bg-white p-4 text-center">
              <p className="text-3xl font-bold text-green-600"><AnimatedCounter value={15} suffix="+" duration={900} /></p>
              <p className="mt-1 text-sm text-slate-500">Years</p>
            </div>
            <div className="rounded-lg border border-slate-200 border-t border-t-green-600 bg-white p-4 text-center">
              <p className="text-3xl font-bold text-green-600">Global</p>
              <p className="mt-1 text-sm text-slate-500">Export Presence</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
