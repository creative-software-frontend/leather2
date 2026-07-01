import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ── Wet Blue Splits images
import wbs1   from '../assets/images/wbs1-min.jpg';
import wbs3   from '../assets/images/wbs3-min.jpg';
import wbs11  from '../assets/images/wbs11-min.jpg';
import wbs12  from '../assets/images/wbs12-min.jpg';
import wbs14  from '../assets/images/wbs14-min.jpg';
import wbs15  from '../assets/images/wbs15-min.jpg';
import wbs32  from '../assets/images/wbs32-min.jpg';
import wbs36  from '../assets/images/wbs36-min.jpg';
import wbs45  from '../assets/images/wbs45-min.jpg';
import wetBlue1 from '../assets/images/1wet-blue-splits-min.jpg';
import wetBlue2 from '../assets/images/2-Wet-Blue-Splits-min.jpg';

// ── Cow Crust images
import cowCrust222   from '../assets/images/cow-crust222.jpg';
import cowCrust325   from '../assets/images/cow-crust325.jpg';
import cowCrust3512  from '../assets/images/cow-crust3512.jpg';

// ── Finish Leather images
import finishImg from '../assets/images/finish_quality-background879.jpg';

// ── Goat Crust
import goatImg from '../assets/images/chrome-free-goat1.jpg';

// ── WhatsApp real product shots (distributed across categories)
import wa1  from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.46 PM.jpeg';
import wa2  from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.47 PM (1).jpeg';
import wa3  from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.47 PM (2).jpeg';
import wa4  from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.47 PM (3).jpeg';
import wa5  from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.47 PM.jpeg';
import wa6  from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.48 PM (1).jpeg';
import wa7  from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.48 PM (2).jpeg';
import wa8  from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.48 PM.jpeg';
import wa9  from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.49 PM (1).jpeg';
import wa10 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.49 PM (2).jpeg';
import wa11 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.49 PM.jpeg';
import wa12 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.50 PM (1).jpeg';
import wa13 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.50 PM (2).jpeg';
import wa14 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.50 PM (3).jpeg';
import wa15 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.50 PM.jpeg';
import wa16 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.51 PM (1).jpeg';
import wa17 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.51 PM (2).jpeg';
import wa18 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.51 PM.jpeg';
import wa19 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.52 PM (1).jpeg';
import wa20 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.52 PM (2).jpeg';
import wa21 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.52 PM.jpeg';
import wa22 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.53 PM (1).jpeg';
import wa23 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.53 PM (2).jpeg';
import wa24 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.53 PM (3).jpeg';
import wa25 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.53 PM.jpeg';
import wa26 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.54 PM (1).jpeg';
import wa27 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.54 PM (2).jpeg';
import wa28 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.54 PM.jpeg';
import wa29 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.55 PM (1).jpeg';
import wa30 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.55 PM (2).jpeg';
import wa31 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.55 PM (3).jpeg';
import wa32 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.55 PM.jpeg';
import wa33 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.56 PM (1).jpeg';
import wa34 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.56 PM (2).jpeg';
import wa35 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.56 PM.jpeg';
import wa36 from '../assets/images/WhatsApp Image 2026-06-29 at 10.23.57 PM.jpeg';

// ─────────────────────────────────────────────
const productCategories = [
  {
    id: 'wet-blue-splits',
    name: 'Wet Blue Splits',
    categoryLabel: 'Raw Materials',
    tag: 'Export Ready',
    tagColor: '#1e6f9f',
    path: '/products/wet-blue-splits',
    desc: 'Chrome-tanned bovine splits with exceptional tensile strength, uniform thickness, and excellent dyeability.',
    images: [wbs1, wbs3, wbs11, wbs12, wbs14, wbs15, wbs32, wbs36, wbs45,
             wetBlue1, wetBlue2, wa1, wa2, wa3, wa4, wa5, wa6, wa7, wa8, wa9],
  },
  {
    id: 'cow-crust',
    name: 'Cow Crust Leather',
    categoryLabel: 'Crust Leather',
    tag: 'Premium',
    tagColor: '#7B4A1E',
    path: '/products/cow-crust',
    desc: 'Full-grain cow crust leather, veg-chrome combination tanned, ready for finishing into premium goods.',
    images: [cowCrust222, cowCrust325, cowCrust3512,
             wa10, wa11, wa12, wa13, wa14, wa15, wa16, wa17, wa18, wa19, wa20],
  },
  {
    id: 'goat-crust',
    name: 'Goat Crust Leather',
    categoryLabel: 'Crust Leather',
    tag: 'Specialty',
    tagColor: '#8B4513',
    path: '/products/goat-crust',
    desc: 'Supple caprine leather featuring high elasticity and tight natural grain, ideal for fashion accessories.',
    images: [goatImg, wa21, wa22, wa23, wa24, wa25, wa26, wa27, wa28, wa29, wa30],
  },
  {
    id: 'finish-leather',
    name: 'Finish Leather',
    categoryLabel: 'Finished Goods',
    tag: 'New Arrivals',
    tagColor: '#2d6a4f',
    path: '/products/finish-leather',
    desc: 'Dyehouse-finished premium hides in a vast spectrum of custom colorways for ready-to-use applications.',
    images: [finishImg, wa31, wa32, wa33, wa34, wa35, wa36],
  },
];

const filterTabs = ['All', 'Raw Materials', 'Crust Leather', 'Finished Goods'];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' as const } }),
};

// Lightbox component
function Lightbox({ img, onClose }: { img: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.img
        initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
        src={img} alt="Preview"
        className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
        onClick={e => e.stopPropagation()}
      />
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
      >
        ✕
      </button>
    </motion.div>
  );
}

const IMAGES_PER_PAGE = 10;

// Pagination sub-component
function Pagination({ total, current, onChange }: { total: number; current: number; onChange: (p: number) => void }) {
  const totalPages = Math.ceil(total / IMAGES_PER_PAGE);
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
      {/* Prev */}
      <motion.button
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        onClick={() => onChange(Math.max(1, current - 1))}
        disabled={current === 1}
        className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider border rounded-lg transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed border-gray-200 text-gray-600 hover:border-[#B05A28] hover:text-[#B05A28]"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
        Prev
      </motion.button>

      {/* Page Numbers */}
      {pages.map(p => (
        <motion.button
          key={p}
          whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }}
          onClick={() => onChange(p)}
          className={`w-9 h-9 text-xs font-bold rounded-lg border transition-all duration-200 ${
            p === current
              ? 'bg-[#B05A28] text-white border-[#B05A28] shadow-md'
              : 'border-gray-200 text-gray-600 hover:border-[#B05A28] hover:text-[#B05A28]'
          }`}
        >
          {p}
        </motion.button>
      ))}

      {/* Next */}
      <motion.button
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        onClick={() => onChange(Math.min(totalPages, current + 1))}
        disabled={current === totalPages}
        className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider border rounded-lg transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed border-gray-200 text-gray-600 hover:border-[#B05A28] hover:text-[#B05A28]"
      >
        Next
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
    </div>
  );
}

export default function CatalogPage() {
  const [filter, setFilter]     = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);
  // page state per category id
  const [pages, setPages]       = useState<Record<string, number>>({});

  // Reset all pages when filter changes
  useEffect(() => { setPages({}); }, [filter]);

  const getPage  = (id: string) => pages[id] ?? 1;
  const setPage  = (id: string, p: number) => setPages(prev => ({ ...prev, [id]: p }));

  const filtered = productCategories.filter(
    c => filter === 'All' || c.categoryLabel === filter
  );

  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 sm:pt-36 pb-16 sm:pb-20 px-6 lg:px-10 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.span variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="inline-block text-xs tracking-[0.3em] text-[#B05A28] uppercase font-bold mb-4">
            Full Collection
          </motion.span>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}>
            Product Catalog
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-gray-500 text-base sm:text-lg max-w-xl">
            Explore all our premium leather categories — every image shows real products from our tannery.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="sticky top-0 z-20 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 flex gap-2 overflow-x-auto scrollbar-none">
          {filterTabs.map(tab => (
            <motion.button
              key={tab}
              onClick={() => setFilter(tab)}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              className={`px-5 py-2 text-xs font-bold tracking-wider uppercase rounded-full border whitespace-nowrap transition-all duration-200 ${
                filter === tab
                  ? 'bg-[#B05A28] text-white border-[#B05A28]'
                  : 'text-gray-600 border-gray-200 hover:border-[#B05A28] hover:text-[#B05A28]'
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Category Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 space-y-20">
        <AnimatePresence mode="wait">
          {filtered.map((cat, catIdx) => (
            <motion.section
              key={cat.id}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={catIdx}
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mb-6">
                <span
                  className="self-start text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white"
                  style={{ background: cat.tagColor }}
                >
                  {cat.tag}
                </span>
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
                    {cat.name}
                  </h2>
                  <p className="text-gray-500 text-sm mt-1 max-w-2xl">{cat.desc}</p>
                </div>
                <Link
                  to={cat.path}
                  className="flex items-center gap-1.5 text-sm font-bold text-[#B05A28] hover:opacity-70 transition whitespace-nowrap"
                >
                  View Product Page
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="h-px bg-gray-100 mb-6" />

              {/* Responsive Image Grid with Pagination */}
              {(() => {
                const currentPage = getPage(cat.id);
                const start = (currentPage - 1) * IMAGES_PER_PAGE;
                const pageImages = cat.images.slice(start, start + IMAGES_PER_PAGE);
                const totalPages = Math.ceil(cat.images.length / IMAGES_PER_PAGE);

                return (
                  <>
                    {/* Stats row */}
                    <div className="flex items-center justify-between mb-3 text-xs text-gray-400 font-medium">
                      <span>
                        Showing {start + 1}–{Math.min(start + IMAGES_PER_PAGE, cat.images.length)} of {cat.images.length} photos
                      </span>
                      {totalPages > 1 && (
                        <span>Page {currentPage} of {totalPages}</span>
                      )}
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${cat.id}-page-${currentPage}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
                      >
                        {pageImages.map((img, imgIdx) => (
                          <motion.div
                            key={`${start + imgIdx}`}
                            initial={{ opacity: 0, scale: 0.94 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: imgIdx * 0.025 }}
                            whileHover={{ scale: 1.04, zIndex: 5 }}
                            className="relative group rounded-xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 cursor-zoom-in"
                            style={{ aspectRatio: '1 / 1' }}
                            onClick={() => setLightbox(img)}
                          >
                            <img
                              src={img}
                              alt={`${cat.name} ${start + imgIdx + 1}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
                              <svg className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </AnimatePresence>

                    {/* Pagination Controls */}
                    <Pagination
                      total={cat.images.length}
                      current={currentPage}
                      onChange={p => { setPage(cat.id, p); }}
                    />

                    {/* Footer link */}
                    <p className="text-xs text-gray-400 mt-4 font-medium text-center">
                      {cat.images.length} product photos ·{' '}
                      <Link to={cat.path} className="text-[#B05A28] hover:underline">View full product page →</Link>
                    </p>
                  </>
                );
              })()}
            </motion.section>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && <Lightbox img={lightbox} onClose={() => setLightbox(null)} />}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
