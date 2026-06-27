import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Images
import wbsImg from '../assets/images/2-Wet-Blue-Splits-min.jpg';
import cowImg from '../assets/images/cow-crust222.jpg';
import goatImg from '../assets/images/chrome-free-goat1.jpg';
import finishImg from '../assets/images/finish_quality-background879.jpg';

const products = [
  { id: 1, name: 'Wet Blue Splits', category: 'Raw Materials', price: 'Inquire', path: '/products/wet-blue-splits', img: wbsImg, desc: 'Chrome-tanned bovine splits with exceptional tensile strength and thickness.' },
  { id: 2, name: 'Cow Crust Leather', category: 'Crust Leather', price: 'Inquire', path: '/products/cow-crust', img: cowImg, desc: 'Full-grain cow crust leather, veg-chrome combination tanned, ready for finishing.' },
  { id: 3, name: 'Goat Crust Leather', category: 'Crust Leather', price: 'Inquire', path: '/products/goat-crust', img: goatImg, desc: 'Supple caprine leather featuring high elasticity and tight natural grain structure.' },
  { id: 4, name: 'Finished Quality Leather', category: 'Finished Goods', price: 'Inquire', path: '/products/finish-leather', img: finishImg, desc: 'Dyehouse-finished premium hides in a vast spectrum of custom colorways.' },
];

const categories = ['All', 'Raw Materials', 'Crust Leather', 'Finished Goods'];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' } })
};

export default function CatalogPage() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? products
    : products.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 px-6 lg:px-10 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.span variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="inline-block text-xs tracking-[0.3em] text-[#B05A28] uppercase font-bold mb-4">
            Collection Overview
          </motion.span>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}>
            Product Catalog
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-gray-500 text-lg max-w-xl">
            Explore our range of premium hides, semi-processed crusts, and meticulously finished leathers sourced for international export.
          </motion.p>
        </div>
      </section>

      {/* Filter and Product Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-12 border-b border-gray-100 pb-8">
          {categories.map(c => (
            <motion.button
              key={c}
              onClick={() => setFilter(c)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`px-5 py-2 text-xs font-bold tracking-wider uppercase rounded-full border transition-all duration-200 ${
                filter === c
                  ? 'bg-[#B05A28] text-white border-[#B05A28]'
                  : 'text-gray-600 border-gray-200 hover:border-[#B05A28] hover:text-[#B05A28]'
              }`}
            >
              {c}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
              whileHover={{ y: -6 }}
              className="group cursor-pointer bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Link to={p.path}>
                <div className="relative overflow-hidden h-64 bg-gray-50">
                  <motion.img
                    whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}
                    src={p.img} alt={p.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  <span className="absolute top-4 left-4 text-xs font-bold tracking-wider uppercase px-3 py-1.5 text-white rounded-full bg-[#B05A28]">
                    {p.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col justify-between h-48">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#B05A28] transition-colors duration-200" style={{ fontFamily: 'Georgia, serif' }}>
                      {p.name}
                    </h3>
                    <p className="text-gray-500 text-xs mt-2 leading-relaxed line-clamp-2">
                      {p.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-xs font-bold tracking-wider uppercase text-[#B05A28]">
                      View details
                    </span>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-[#B05A28] group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
