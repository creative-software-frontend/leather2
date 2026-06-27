import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import BestSellingSection from '../components/BestSellingSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Images for news
import rawImg from '../assets/images/raw-selection.jpg';
import aboutImg from '../assets/images/about.jpg';

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
    title: 'Leather Export Expands Tannery Capacity by 40%',
    excerpt: 'Our state-of-the-art facility upgrades now allow us to process over 50,000 hides per month, ensuring reliable supply for our global clientele.',
    img: aboutImg,
    readTime: '3 min read',
  },
  {
    id: 3,
    category: 'Sustainability',
    date: 'May 28, 2026',
    title: 'ISO 14001 Certification Achieved Across All Lines',
    excerpt: 'Leather Export has successfully completed ISO 14001 environmental management certification, reinforcing our commitment to sustainable tanning.',
    img: rawImg,
    readTime: '5 min read',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' } })
};

export default function HomePage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white min-h-screen"
    >
      <Navbar />
      <div className="pt-20">
        <HeroSection />
        <CategoriesSection />
        <BestSellingSection />

        {/* Promo Banner */}
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#A48265] text-white p-12 flex flex-col md:flex-row items-center justify-between gap-6"
              style={{ borderTopLeftRadius: '2rem', borderBottomRightRadius: '2rem' }}
            >
              <div className="w-full md:w-1/2">
                <h2 className="text-4xl font-serif mb-4 text-white">Leather Collection</h2>
                <p className="mb-6 opacity-90 text-white">New Arrivals and premium hides curated for global shipment.</p>
                <Link to="/catalog">
                  <button className="bg-[#6B4B32] text-white px-6 py-3 rounded hover:bg-black transition font-semibold">
                    Discover Catalog →
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── LATEST NEWS SECTION ── */}
        <section className="py-20 px-6 lg:px-12 bg-gray-50 border-t border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex justify-between items-end mb-12"
            >
              <div>
                <span className="text-xs tracking-[0.3em] text-[#B05A28] uppercase font-bold mb-2 block">Updates & Insights</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Latest from Leather Export</h2>
              </div>
              <Link to="/news" className="text-sm font-bold text-[#B05A28] hover:opacity-80 transition flex items-center gap-1">
                View All News
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsArticles.map((article, i) => (
                <motion.article
                  key={article.id}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                  whileHover={{ y: -6 }}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative overflow-hidden h-52 bg-gray-100">
                    <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wider px-3 py-1.5 text-white rounded-full bg-[#B05A28]">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-400 text-xs mb-2">{article.date} · {article.readTime}</p>
                    <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#B05A28] transition-colors duration-200" style={{ fontFamily: 'Georgia, serif' }}>
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-4">{article.excerpt}</p>
                    <Link to="/news" className="inline-flex items-center gap-1.5 text-[#B05A28] text-xs font-bold tracking-wider uppercase">
                      Read More
                      <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT US SECTION ── */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Info Column */}
            <div>
              <span className="text-xs tracking-[0.3em] text-[#B05A28] uppercase font-bold mb-2 block">Quick Inquiry</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>Get a Premium Quote</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-md">
                Interested in sourcing our premium Wet Blue splits, Cow Crust, or Finished leathers? Complete this form and our sales representatives will respond with a custom pricing sheet within 24 hours.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#B05A28]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">Phone support</p>
                    <p className="text-sm font-semibold text-gray-800">+880 1700-000000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#B05A28]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">Email Inquiry</p>
                    <p className="text-sm font-semibold text-gray-800">export@leather-export.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 lg:p-10">
              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4 text-green-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-xs">We will contact you within the next 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Full Name</label>
                    <input
                      type="text" required placeholder="John Smith"
                      value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 text-gray-900 text-xs rounded-lg focus:outline-none focus:border-[#B05A28] focus:ring-1 focus:ring-[#B05A28] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Email Address</label>
                    <input
                      type="email" required placeholder="john@company.com"
                      value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 text-gray-900 text-xs rounded-lg focus:outline-none focus:border-[#B05A28] focus:ring-1 focus:ring-[#B05A28] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Message</label>
                    <textarea
                      required rows={4} placeholder="Type your inquiry details..."
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 text-gray-900 text-xs rounded-lg focus:outline-none focus:border-[#B05A28] focus:ring-1 focus:ring-[#B05A28] transition resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 text-xs font-bold tracking-widest uppercase text-white rounded-lg hover:opacity-90 active:scale-95 transition-all"
                    style={{ background: '#B05A28' }}
                  >
                    Submit Quote Request →
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </motion.div>
  );
}
