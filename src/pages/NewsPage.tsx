import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import rawImg from '../assets/images/raw-selection.jpg';
import aboutImg from '../assets/images/about.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' } }),
};

const newsArticles = [
  {
    id: 1,
    category: 'Industry',
    date: 'June 20, 2026',
    title: 'Global Leather Market Sees Record Growth in 2026',
    excerpt: 'Demand for premium wet blue splits and crust leathers surges across Asian and European markets as sustainability-focused buyers prioritize traceable supply chains.',
    img: rawImg,
    readTime: '4 min read',
  },
  {
    id: 2,
    category: 'Company News',
    date: 'June 12, 2026',
    title: 'Labenza Expands Tannery Capacity by 40%',
    excerpt: 'Our state-of-the-art facility upgrades now allow us to process over 50,000 hides per month, ensuring reliable supply for our global clientele.',
    img: aboutImg,
    readTime: '3 min read',
  },
  {
    id: 3,
    category: 'Sustainability',
    date: 'May 28, 2026',
    title: 'ISO 14001 Certification Achieved Across All Production Lines',
    excerpt: 'Labenza Leather has successfully completed ISO 14001 environmental management certification, reinforcing our commitment to sustainable tanning practices.',
    img: rawImg,
    readTime: '5 min read',
  },
  {
    id: 4,
    category: 'Trade Shows',
    date: 'May 15, 2026',
    title: 'Labenza at Lineapelle Milan 2026',
    excerpt: "We showcased our latest range of finished and semi-finished leathers at the world's most prestigious leather fair, drawing interest from over 30 countries.",
    img: aboutImg,
    readTime: '3 min read',
  },
  {
    id: 5,
    category: 'Product',
    date: 'April 30, 2026',
    title: 'Introducing Chrome-Free Goat Crust — Our Greenest Line Yet',
    excerpt: 'Meeting the growing demand for eco-conscious materials, our new chrome-free goat crust leather delivers premium quality without environmental compromise.',
    img: rawImg,
    readTime: '4 min read',
  },
  {
    id: 6,
    category: 'Export',
    date: 'April 10, 2026',
    title: 'New Distribution Partnerships Signed in Europe and North America',
    excerpt: 'Labenza has signed strategic distribution agreements in Germany, Italy, and the United States to better serve our growing international customer base.',
    img: aboutImg,
    readTime: '3 min read',
  },
];

const categories = ['All', 'Industry', 'Company News', 'Sustainability', 'Trade Shows', 'Product', 'Export'];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? newsArticles
    : newsArticles.filter((a) => a.category === activeCategory);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 lg:px-10 overflow-hidden" style={{ background: 'linear-gradient(135deg,#0D0B09 0%,#2d1a0a 60%,#1a0e07 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #B05A28 0%, transparent 60%)' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.span variants={fadeUp} initial="hidden" animate="visible" custom={0} className="inline-block text-xs tracking-[0.3em] text-[#B05A28] uppercase font-semibold mb-4">
            Latest Updates
          </motion.span>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1} className="text-5xl md:text-7xl font-bold text-white mb-5" style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}>
            News &<br /><span className="text-[#B05A28]">Insights</span>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2} className="text-gray-300 text-lg max-w-xl leading-relaxed">
            Industry updates, company milestones, sustainability initiatives, and leather market intelligence — all in one place.
          </motion.p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs font-bold tracking-wider uppercase rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#B05A28] text-white border-[#B05A28]'
                  : 'text-gray-600 border-gray-200 hover:border-[#B05A28] hover:text-[#B05A28]'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured article */}
        {activeCategory === 'All' && (
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="group mb-14 grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl shadow-xl border border-gray-100 cursor-pointer"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative overflow-hidden h-72 lg:h-auto">
              <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} src={newsArticles[0].img} alt={newsArticles[0].title} className="w-full h-full object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 lg:block hidden" />
            </div>
            <div className="p-10 flex flex-col justify-center bg-[#0D0B09]">
              <span className="inline-block text-xs tracking-[0.3em] uppercase text-[#B05A28] font-bold mb-3 border border-[#B05A28]/30 px-3 py-1 w-fit">
                {newsArticles[0].category}
              </span>
              <p className="text-gray-400 text-xs mb-3">{newsArticles[0].date} · {newsArticles[0].readTime}</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                {newsArticles[0].title}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">{newsArticles[0].excerpt}</p>
              <button className="flex items-center gap-2 text-[#B05A28] text-sm font-bold tracking-wider uppercase group-hover:gap-4 transition-all duration-200">
                Read Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeCategory === 'All' ? filtered.slice(1) : filtered).map((article, i) => (
            <motion.article
              key={article.id}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
              whileHover={{ y: -6 }}
              className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden h-52">
                <motion.img
                  whileHover={{ scale: 1.06 }} transition={{ duration: 0.5 }}
                  src={article.img} alt={article.title}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 text-white rounded-full" style={{ background: '#B05A28' }}>
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-xs mb-3">{article.date} · {article.readTime}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#B05A28] transition-colors duration-200" style={{ fontFamily: 'Georgia, serif' }}>
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                <button className="flex items-center gap-1.5 text-[#B05A28] text-xs font-bold tracking-wider uppercase group-hover:gap-3 transition-all duration-200">
                  Read More
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load more */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-14 text-center">
          <motion.button
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="px-10 py-3.5 text-sm font-bold tracking-widest uppercase border-2 border-gray-200 text-gray-600 rounded-full hover:border-[#B05A28] hover:text-[#B05A28] transition-all duration-200"
          >
            Load More Articles
          </motion.button>
        </motion.div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 lg:px-10 mt-10" style={{ background: 'linear-gradient(135deg,#0D0B09,#2d1a0a)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-xs tracking-[0.3em] text-[#B05A28] uppercase font-semibold mb-3">Stay Informed</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>Subscribe to Our Newsletter</h2>
            <p className="text-gray-400 mb-8 text-sm leading-relaxed">Get the latest leather industry news, product updates, and exclusive offers delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-white/8 border border-white/15 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#B05A28] rounded-lg transition-colors"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              />
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="px-7 py-3 text-sm font-bold tracking-wider uppercase text-white rounded-lg shrink-0" style={{ background: '#B05A28' }}>
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
