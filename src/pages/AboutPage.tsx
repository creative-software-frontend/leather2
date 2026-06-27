import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Images
import aboutImg from '../assets/images/about.jpg';
import rawImg from '../assets/images/raw-selection.jpg';
import finishImg from '../assets/images/finish_quality-background879.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' as const } })
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 lg:px-10 overflow-hidden bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="inline-block text-xs tracking-[0.3em] text-[#B05A28] uppercase font-bold mb-4">
              Our Heritage
            </motion.span>
            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}>
              Crafting Premium<br /><span className="text-[#B05A28]">Leather Materials</span>
            </motion.h1>
            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="text-gray-600 text-base leading-relaxed max-w-lg mb-6">
              For over two decades, Leather Export has stood at the forefront of international leather supply. We process and export top-grade bovine, caprine, and split hides to prestigious fashion houses and industrial manufacturers globally.
            </motion.p>
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}>
              <Link to="/contact" className="inline-block px-8 py-3 text-sm font-bold tracking-wider uppercase text-white rounded-lg hover:opacity-90 transition-opacity" style={{ background: '#B05A28' }}>
                Partner With Us
              </Link>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
            className="relative h-72 lg:h-[450px] rounded-2xl overflow-hidden shadow-xl bg-gray-200">
            <img src={aboutImg} alt="Tannery Workshop" className="w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="relative h-64 lg:h-96 rounded-2xl overflow-hidden shadow-lg bg-gray-200 lg:order-last">
          <img src={rawImg} alt="Quality Inspection" className="w-full h-full object-cover" />
        </motion.div>
        <div>
          <motion.span variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
            className="inline-block text-xs tracking-[0.25em] text-[#B05A28] uppercase font-bold mb-3">
            Quality Assurance
          </motion.span>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Georgia, serif' }}>
            Uncompromising Standards from Raw to Finish
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            className="text-gray-600 text-sm leading-relaxed mb-4">
            Our raw hides are rigorously inspected at sourcing stages to ensure minimal natural markings and optimal hide density. We utilize state-of-the-art Italian splitting and drumming equipment to achieve exact thickness tolerances and consistent color consistency.
          </motion.p>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}
            className="text-gray-600 text-sm leading-relaxed">
            From Wet Blue Splits to beautifully burnished Cow Crust and fully finished aniline leathers, our expert tanners respect traditional craft while utilizing the finest modern chemistry to meet all EU REACH standards.
          </motion.p>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="bg-gray-50 py-24 px-6 border-t border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] text-[#B05A28] uppercase font-bold mb-3 block">Corporate Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Our Four Pillars</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Traceability', desc: 'Every hide we process is fully traceable back to ethically certified farms and ranches.' },
              { num: '02', title: 'Eco-Tanning', desc: 'Water treatment facilities and chrome recovery units ensure minimal environmental footprint.' },
              { num: '03', title: 'Consistency', desc: 'Precision grading and electronic measurements guarantee strict uniformity across shipments.' },
              { num: '04', title: 'Innovation', desc: 'We continuously develop custom textures, grains, and colors tailored for modern design needs.' }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="text-3xl font-bold text-[#B05A28] block mb-4 font-display">{pillar.num}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{pillar.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Capacity */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="relative h-64 lg:h-96 rounded-2xl overflow-hidden shadow-lg bg-gray-200">
          <img src={finishImg} alt="Shipping Logistics" className="w-full h-full object-cover" />
        </motion.div>
        <div>
          <motion.span variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
            className="inline-block text-xs tracking-[0.25em] text-[#B05A28] uppercase font-bold mb-3">
            Logistics & Capacity
          </motion.span>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Georgia, serif' }}>
            Meeting International Demand
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            className="text-gray-600 text-sm leading-relaxed mb-4">
            Operating from our central tannery hubs in Dhaka and dedicated export facilitation offices near key ports, we process over 500,000 square feet of high-grade leather monthly.
          </motion.p>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}
            className="text-gray-600 text-sm leading-relaxed">
            Our established freight networks guarantee safe containerized delivery to Asia, Europe, and North America. We handle full customs clearance paperwork, L/C facilitation, and export documentation seamlessly.
          </motion.p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
