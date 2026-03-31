import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import heroBg from '../../hero_bg.jpeg';

export default function HeroSection() {
  const baseButtonClass =
    'group inline-flex items-center justify-center gap-2 h-12 px-6 rounded-[12px] whitespace-nowrap font-semibold tracking-[0.003em] text-[1.02rem] transition-all duration-300 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f172a] focus-visible:ring-offset-2 focus-visible:ring-offset-white';

  const primaryButtonClass =
    `${baseButtonClass} bg-gradient-to-r from-[#13824b] to-[#0f6f41] text-white shadow-[0_8px_20px_rgba(19,130,75,0.26)] hover:from-[#116f40] hover:to-[#0c5d36] hover:scale-[1.03]`;

  const secondaryButtonClass =
    `${baseButtonClass} relative z-10 bg-[rgba(255,255,255,0.6)] text-[#0f172a] border-2 border-[#cbd5e1] backdrop-blur-[7px] shadow-[0_10px_20px_rgba(15,23,42,0.12)] hover:bg-[rgba(255,255,255,0.72)]`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.14, delayChildren: 0.08 },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.62, ease: 'easeOut' } },
  } as const;

  const paragraphVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.56, delay: 0.12, ease: 'easeOut' } },
  } as const;

  const buttonsVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.56, delay: 0.2, ease: 'easeOut' } },
  } as const;

  const imageVariants = {
    hidden: { opacity: 0, scale: 1 },
    visible: { opacity: 1, scale: 1.03, transition: { duration: 1.2, ease: 'easeOut' } },
  } as const;

  return (
    <section className="min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row bg-white overflow-visible">
      <div
        className="relative z-10 w-full lg:w-[38%] flex items-center"
        style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}
      >
        <div className="w-full pl-6 sm:pl-10 md:pl-20 lg:pl-24 xl:pl-28 pr-6 sm:pr-8 lg:pr-12 py-12 sm:py-14 lg:py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-[500px] text-left"
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.h1
              variants={headingVariants}
              className="text-[2rem] sm:text-[2.45rem] lg:text-[2.9rem] xl:text-[3.15rem] font-bold text-[#0f172a] leading-[1.17] tracking-[-0.02em] mb-7 max-w-[500px]"
            >
              <span className="block">India's Trusted Partner for</span>
              <span className="block text-[#0b3b2e]">Pharmaceutical &amp; Hygiene</span>
              <span className="block">Manufacturing</span>
            </motion.h1>

            <motion.p
              variants={paragraphVariants}
              className="text-[1.04rem] sm:text-[1.1rem] text-[#334155] leading-[1.8] max-w-[40ch] mt-1"
            >
              Delivering safe, high-quality solutions that protect lives-across hospitals, homes, and essential industries.
            </motion.p>

            <motion.div variants={buttonsVariants} className="relative z-10 mt-10 flex flex-row items-start gap-3">
              <button className={primaryButtonClass}>
                Request Business Enquiry
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className={secondaryButtonClass}>
                Download Company Profile
                <Download size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-[1] w-full lg:w-[62%] min-h-[42vh] lg:min-h-[calc(100vh-5rem)] flex items-center justify-center bg-white overflow-visible">
        <motion.img
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          src={heroBg}
          alt="IMAEC — Hospital, Home and Enterprise"
          className="w-full h-full object-contain object-center"
        />
      </div>
    </section>
  );
}
