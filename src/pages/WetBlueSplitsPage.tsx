import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImg from '../assets/images/2-Wet-Blue-Splits-min.jpg';
import img1 from '../assets/images/wbs1-min.jpg';
import img2 from '../assets/images/wbs3-min.jpg';
import img3 from '../assets/images/wbs11-min.jpg';
import img4 from '../assets/images/wbs12-min.jpg';
import img5 from '../assets/images/wbs14-min.jpg';
import img6 from '../assets/images/wbs15-min.jpg';
import cowImg from '../assets/images/cow-crust222.jpg';
import goatImg from '../assets/images/chrome-free-goat1.jpg';
import finishImg from '../assets/images/finish_quality-background879.jpg';

const specs = [
  { label: 'Type', value: 'Wet Blue Splits' },
  { label: 'Origin', value: 'Full Bovine Hide' },
  { label: 'Thickness', value: '1.2mm – 2.5mm' },
  { label: 'Surface', value: 'Grain / Split Layer' },
  { label: 'Usage', value: 'Industrial & Fashion' },
  { label: 'MOQ', value: '500 sq. ft.' },
  { label: 'Tanning', value: 'Chrome Tanned' },
  { label: 'Finish', value: 'Semi-finished' },
];

const gallery = [img1, img2, img3, img4, img5, img6];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' } }),
};

export default function WetBlueSplitsPage() {
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 20);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 20);
  };

  return (
    <div ref={containerRef} className="bg-white min-h-screen text-gray-900 font-sans">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative h-screen overflow-hidden flex items-center">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          <img src={heroImg} alt="Wet Blue Splits" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg,rgba(255,255,255,0.75) 0%,rgba(255,255,255,0.35) 55%,transparent 100%)' }} />
        </motion.div>

        <div className="relative z-10 px-8 md:px-24 max-w-3xl pt-20">
          <motion.span variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="inline-block text-xs tracking-[0.35em] text-[#B05A28] uppercase mb-5 font-semibold">
            Premium Raw Material
          </motion.span>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-gray-900"
            style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}>
            Wet Blue<br />
            <span className="text-[#B05A28]">Splits</span>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-gray-700 text-lg leading-relaxed mb-10 max-w-xl">
            Chrome-tanned bovine split leather, processed to exacting standards for industrial and high-fashion applications worldwide.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3} className="flex gap-4">
            <button
              className="px-8 py-3 text-sm font-bold tracking-widest uppercase text-white rounded-lg transition-all duration-300"
              style={{ background: '#B05A28', letterSpacing: '0.15em' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#8a4420')}
              onMouseLeave={e => (e.currentTarget.style.background = '#B05A28')}
            >
              Request Quote
            </button>
            <Link to="/contact">
              <button className="px-8 py-3 text-sm font-bold tracking-widest uppercase border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-lg"
                style={{ letterSpacing: '0.15em' }}>
                Contact Us
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full border-2 border-[#B05A28] flex items-center justify-center animate-pulse">
            <div className="w-2.5 h-2.5 rounded-full bg-[#B05A28]" />
          </div>
          <span className="text-xs tracking-widest text-gray-500 uppercase">Scroll</span>
        </motion.div>
      </section>

      {/* ── PRODUCT DETAIL ── */}
      <section className="px-6 md:px-20 py-24 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left: gallery with sensor motion */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="sticky top-28">
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
              style={{ rotateY: springX, rotateX: springY, perspective: 1200, transformStyle: 'preserve-3d' }}
              className="relative overflow-hidden rounded-2xl mb-4 cursor-crosshair shadow-xl"
              whileHover={{ scale: 1.01 }}
            >
              <motion.img
                key={active} src={gallery[active]} alt="Wet Blue Splits"
                initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
                className="w-full h-[480px] object-cover"
              />
              {/* Sensor scan line */}
              <motion.div
                animate={{ y: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="absolute left-0 right-0 h-[2px] pointer-events-none"
                style={{ background: 'linear-gradient(90deg,transparent,rgba(176,90,40,0.8),transparent)' }}
              />
              <div className="absolute inset-0 pointer-events-none rounded-2xl" style={{ background: 'linear-gradient(180deg,transparent 65%,rgba(0,0,0,0.15) 100%)' }} />
              <span className="absolute top-4 left-4 text-xs tracking-widest text-white font-bold uppercase px-3 py-1.5 rounded-full" style={{ background: '#B05A28' }}>
                Premium Grade
              </span>
            </motion.div>

            {/* Thumbnails */}
            <div className="grid grid-cols-6 gap-2">
              {gallery.map((img, i) => (
                <motion.button key={i} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
                  onClick={() => setActive(i)}
                  className="relative overflow-hidden rounded-lg"
                  style={{ outline: active === i ? '2px solid #B05A28' : '2px solid transparent', outlineOffset: '2px' }}>
                  <img src={img} alt="" className="w-full h-14 object-cover" />
                  {active === i && <div className="absolute inset-0 bg-[#B05A28]/15" />}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right: info */}
          <div className="space-y-10">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-xs tracking-[0.3em] text-[#B05A28] uppercase mb-3 font-semibold">Bovine / Chrome Tanned</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Wet Blue Splits</h2>
              <div className="w-14 h-0.5 bg-[#B05A28] mb-5" />
              <p className="text-gray-600 leading-relaxed text-base">
                Our Wet Blue Splits are sourced from premium bovine hides, processed through controlled chrome tanning to deliver exceptional tensile strength, uniform thickness, and excellent dyeability. Ideal for shoe uppers, belts, industrial straps, and fashion accessories.
              </p>
            </motion.div>

            {/* Qty + CTA */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="flex items-center gap-4">
              <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-11 h-11 text-gray-600 hover:bg-gray-50 transition text-xl">−</button>
                <span className="w-12 text-center text-sm font-bold text-gray-900">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="w-11 h-11 text-gray-600 hover:bg-gray-50 transition text-xl">+</button>
              </div>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="flex-1 py-3.5 text-sm font-bold tracking-widest uppercase text-white rounded-lg"
                style={{ background: '#B05A28' }}>
                Inquire Now
              </motion.button>
            </motion.div>

            {/* Specs */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
              <h3 className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-4 font-bold">Product Specifications</h3>
              <div className="grid grid-cols-2 gap-3">
                {specs.map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                    className="bg-gray-50 rounded-xl p-4 hover:bg-orange-50 transition-colors duration-200 group">
                    <p className="text-[10px] tracking-widest uppercase font-bold mb-1 text-[#B05A28]">{s.label}</p>
                    <p className="text-sm font-semibold text-gray-800">{s.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Badges */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} className="flex flex-wrap gap-2">
              {['ISO Certified', 'Eco-Tanned', 'Export Ready', 'Bulk Available'].map(f => (
                <span key={f} className="text-xs px-4 py-2 border border-gray-200 text-gray-500 tracking-wider uppercase rounded-full hover:border-[#B05A28] hover:text-[#B05A28] transition-all duration-200 cursor-default">
                  {f}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 px-6 md:px-20 bg-[#F9F7F4] border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] text-[#B05A28] uppercase mb-3 font-semibold">Why Choose Us</p>
            <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Crafted for Excellence</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '⬡', title: 'Uniform Thickness', desc: 'Precision-split to ±0.1mm tolerance ensuring consistent quality across batches.' },
              { icon: '◎', title: 'Chrome Tanned', desc: 'Superior chromium tanning provides excellent softness, durability, and color uptake.' },
              { icon: '◈', title: 'Global Export', desc: 'Shipped worldwide with full compliance documentation and quality certificates.' },
            ].map((f, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                className="bg-white rounded-2xl p-8 border border-gray-100 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300" style={{ background: 'rgba(176,90,40,0.1)' }}>
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED PRODUCTS ── */}
      <section className="py-24 px-6 md:px-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-end justify-between mb-12">
            <div>
              <span className="text-xs tracking-[0.3em] text-[#B05A28] uppercase font-bold mb-2 block">Explore More</span>
              <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Related Products</h2>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Cow Crust Leather', path: '/products/cow-crust', img: cowImg, tag: 'Bovine' },
              { name: 'Goat Crust Leather', path: '/products/goat-crust', img: goatImg, tag: 'Caprine' },
              { name: 'Finish Leather', path: '/products/finish-leather', img: finishImg, tag: 'Finished' },
            ].map((p, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                whileHover={{ y: -6 }} className="group cursor-pointer">
                <Link to={p.path}>
                  <div className="relative overflow-hidden rounded-2xl h-64 mb-4 bg-gray-100">
                    <motion.img whileHover={{ scale: 1.06 }} transition={{ duration: 0.5 }}
                      src={p.img} alt={p.name} className="w-full h-full object-cover" />
                    <span className="absolute top-4 left-4 text-xs font-bold tracking-wider uppercase px-3 py-1.5 text-white rounded-full" style={{ background: '#B05A28' }}>
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#B05A28] transition-colors duration-200">{p.name}</h3>
                  <p className="text-sm text-gray-400 mt-1 flex items-center gap-1.5 font-medium">
                    View Details
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 md:px-20 bg-[#F9F7F4] border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-xs tracking-[0.3em] text-[#B05A28] uppercase font-semibold mb-3">Ready to Source?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5" style={{ fontFamily: 'Georgia, serif' }}>
              Get a Custom Quote Today
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
              Tell us your requirements and our leather experts will prepare a tailored offer within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="px-10 py-4 text-sm font-bold tracking-widest uppercase text-white rounded-lg"
                  style={{ background: '#B05A28' }}>
                  Contact Sales
                </motion.button>
              </Link>
              <Link to="/">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="px-10 py-4 text-sm font-bold tracking-widest uppercase border-2 border-gray-200 text-gray-700 rounded-lg hover:border-gray-400 transition-colors">
                  Browse Products
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
