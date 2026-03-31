import { motion } from 'motion/react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[560px]"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#f0faf0] text-[#166534] text-sm font-semibold mb-6 border border-green-200">
              ABOUT IMAEC
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f3d] mb-8 leading-tight">
              A Manufacturing Partner Built for Scale & Reliability
            </h2>
            
            <div className="pl-4 border-l border-green-300 mb-7">
              <p className="text-lg text-[#0f1f3d] font-medium leading-[1.9]">
                IMAEC is an integrated pharmaceutical and hygiene manufacturing partner, focused on delivering reliable, high-quality solutions for healthcare, institutions and global markets.
              </p>
            </div>
            
            <p className="text-[#64748b] text-lg leading-[1.9] mb-12">
              With advanced infrastructure and strict quality systems, we enable healthcare partners to scale with confidence and consistency.
            </p>

            {/* Stats */}
            <div ref={ref} className="grid grid-cols-3 gap-6 pt-6">
              <div className="relative bg-white p-4 pt-5 rounded-2xl shadow-[0_8px_24px_rgba(15,31,61,0.08)] border border-gray-100 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,31,61,0.12)] transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-[#166534]/70"></div>
                <div className="text-4xl font-extrabold text-[#166534] mb-1 leading-none">
                  {inView ? <CountUp end={500} duration={2.5} /> : '0'}+
                </div>
                <div className="text-sm font-medium text-[#0f1f3d]">Products</div>
              </div>
              <div className="relative bg-white p-4 pt-5 rounded-2xl shadow-[0_8px_24px_rgba(15,31,61,0.08)] border border-gray-100 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,31,61,0.12)] transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-[#166534]/70"></div>
                <div className="text-4xl font-extrabold text-[#166534] mb-1 leading-none">
                  {inView ? <CountUp end={20} duration={2.5} /> : '0'}+
                </div>
                <div className="text-sm font-medium text-[#0f1f3d]">Countries</div>
              </div>
              <div className="relative bg-white p-4 pt-5 rounded-2xl shadow-[0_8px_24px_rgba(15,31,61,0.08)] border border-gray-100 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,31,61,0.12)] transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-[#166534]/70"></div>
                <div className="text-4xl font-extrabold text-[#166534] mb-1 leading-none">
                  {inView ? <CountUp end={10} duration={2.5} /> : '0'}+
                </div>
                <div className="text-sm font-medium text-[#0f1f3d]">Years</div>
              </div>
            </div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-[500px] w-full"
          >
            <img 
              src="/Imaec.png" 
              alt="Pharma Manufacturing" 
              className="rounded-[20px] w-full h-full object-cover overflow-hidden"
            />
            <div className="absolute top-6 right-6 bg-[#166534] text-white rounded-full px-2.5 py-1 text-[11px] font-semibold shadow-[0_8px_20px_rgba(15,31,61,0.16)]">
              WHO-GMP Certified ✔
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
