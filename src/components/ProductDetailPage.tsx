import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface RelatedProduct {
  name: string;
  path: string;
  img: string;
  tag: string;
}

export interface ProductDetailProps {
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  gallery: string[];
  specs: ProductSpec[];
  features: { icon: string; title: string; desc: string }[];
  relatedProducts: RelatedProduct[];
  accentColor?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

export default function ProductDetailPage({
  tag, title, subtitle, description,
  heroImage, gallery, specs, features,
  relatedProducts,
  accentColor = '#B05A28',
}: ProductDetailProps) {
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);

  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Navbar />

      {/* ── SPLIT HERO ── */}
      <section className="pt-20 min-h-screen grid grid-cols-1 lg:grid-cols-2">

        {/* Left: sticky image panel */}
        <div className="relative bg-[#F5F2EF] overflow-hidden lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)]">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImg}
              src={gallery[activeImg]}
              alt={title}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45 }}
              className="w-full h-full object-cover"
              style={{ minHeight: '60vh' }}
            />
          </AnimatePresence>

          {/* Tag badge */}
          <div className="absolute top-6 left-6">
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 text-white"
              style={{ background: accentColor }}
            >
              {tag}
            </span>
          </div>

          {/* Thumbnail dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {gallery.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveImg(i)}
                whileHover={{ scale: 1.3 }}
                className="rounded-full transition-all duration-200"
                style={{
                  width: activeImg === i ? 28 : 8,
                  height: 8,
                  background: activeImg === i ? accentColor : 'rgba(0,0,0,0.25)',
                  borderRadius: 99,
                }}
              />
            ))}
          </div>

          {/* Thumbnail strip */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            {gallery.slice(0, 4).map((img, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveImg(i)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="overflow-hidden rounded-md"
                style={{
                  width: 52, height: 52,
                  outline: activeImg === i ? `2px solid ${accentColor}` : '2px solid transparent',
                  outlineOffset: 2,
                }}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Right: product info */}
        <div className="px-8 md:px-14 py-20 flex flex-col justify-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span className="text-xs tracking-[0.3em] uppercase font-bold mb-3 block" style={{ color: accentColor }}>
              Premium Leather Material
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-2" style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}>
              {title}
            </h1>
            <p className="text-lg text-gray-400 font-medium mb-6">{subtitle}</p>
            <div className="w-16 h-0.5 mb-8" style={{ background: accentColor }} />
            <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-lg">{description}</p>
          </motion.div>

          {/* Qty + CTA */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1} className="flex items-center gap-4 mb-10">
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
              <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-11 h-11 text-gray-600 hover:bg-gray-50 transition text-xl font-light">−</button>
              <span className="w-12 text-center text-sm font-bold text-gray-800">{qty}</span>
              <button onClick={() => setQty(q => q + 1)} className="w-11 h-11 text-gray-600 hover:bg-gray-50 transition text-xl font-light">+</button>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="flex-1 py-3.5 text-sm font-bold tracking-[0.15em] uppercase text-white rounded-lg transition-opacity hover:opacity-90"
              style={{ background: accentColor }}
            >
              Request Quote
            </motion.button>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="py-3.5 px-5 text-sm font-bold tracking-wider uppercase border-2 border-gray-200 text-gray-700 rounded-lg hover:border-gray-400 transition-colors"
              >
                Contact
              </motion.button>
            </Link>
          </motion.div>

          {/* Specs grid */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
            <p className="text-xs tracking-[0.25em] uppercase font-bold text-gray-400 mb-4">Specifications</p>
            <div className="grid grid-cols-2 gap-3">
              {specs.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-gray-50 rounded-xl p-4 hover:bg-orange-50 transition-colors duration-200 group"
                >
                  <p className="text-[10px] tracking-widest uppercase font-bold mb-1 group-hover:text-[#B05A28] transition-colors" style={{ color: accentColor }}>
                    {s.label}
                  </p>
                  <p className="text-sm font-semibold text-gray-800">{s.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Badges */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3} className="flex flex-wrap gap-2 mt-8">
            {['ISO Certified', 'Eco-Tanned', 'Export Ready', 'Bulk Available'].map(b => (
              <span key={b} className="text-xs px-4 py-2 border border-gray-200 text-gray-500 tracking-wider uppercase rounded-full hover:border-[#B05A28] hover:text-[#B05A28] transition-all duration-200 cursor-default">
                {b}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24 px-6 lg:px-20 bg-[#F9F7F4] border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase font-bold mb-3 block" style={{ color: accentColor }}>Why Choose This Product</span>
            <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Crafted to Perform</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                className="bg-white rounded-2xl p-8 border border-gray-100 transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${accentColor}15` }}
                >
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH HERO IMAGE ── */}
      <section className="relative h-[50vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.42)' }}>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center text-white"
          >
            <p className="text-xs tracking-[0.4em] uppercase mb-3 opacity-80">Premium Quality</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>{title}</h2>
          </motion.div>
        </div>
      </section>

      {/* ── RELATED PRODUCTS ── */}
      {relatedProducts.length > 0 && (
        <section className="py-24 px-6 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-end justify-between mb-12">
              <div>
                <span className="text-xs tracking-[0.3em] uppercase font-bold mb-2 block" style={{ color: accentColor }}>Explore More</span>
                <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Related Products</h2>
              </div>
              <Link to="/" className="text-sm font-bold tracking-wider uppercase text-gray-400 hover:text-gray-900 transition-colors flex items-center gap-2">
                View All
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((p, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                  whileHover={{ y: -6 }}
                  className="group cursor-pointer"
                >
                  <Link to={p.path}>
                    <div className="relative overflow-hidden rounded-2xl h-64 mb-4 bg-gray-100">
                      <motion.img
                        whileHover={{ scale: 1.06 }} transition={{ duration: 0.5 }}
                        src={p.img} alt={p.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      <span
                        className="absolute top-4 left-4 text-xs font-bold tracking-wider uppercase px-3 py-1.5 text-white rounded-full"
                        style={{ background: accentColor }}
                      >
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
      )}

      {/* ── CTA ── */}
      <section className="py-20 px-6 lg:px-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="text-xs tracking-[0.3em] uppercase font-bold mb-3 block" style={{ color: accentColor }}>Ready to Order?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5" style={{ fontFamily: 'Georgia, serif' }}>
              Get a Custom Quote Today
            </h2>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed max-w-lg mx-auto">
              Tell us your requirements and our leather experts will prepare a tailored offer within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="px-10 py-4 text-sm font-bold tracking-[0.15em] uppercase text-white rounded-lg"
                  style={{ background: accentColor }}
                >
                  Contact Sales
                </motion.button>
              </Link>
              <Link to="/">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="px-10 py-4 text-sm font-bold tracking-[0.15em] uppercase border-2 border-gray-200 text-gray-700 rounded-lg hover:border-gray-400 transition-colors"
                >
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
