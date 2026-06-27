import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImg from '../assets/images/logo-leh1-01.png';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const } }),
};

const footerProducts = [
  { label: 'Wet Blue Splits', path: '/products/wet-blue-splits' },
  { label: 'Cow Crust Leather', path: '/products/cow-crust' },
  { label: 'Goat Crust Leather', path: '/products/goat-crust' },
  { label: 'Finish Leather', path: '/products/finish-leather' },
];

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
  { label: 'About', path: '/about' },
];

const socials = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0D0B09' }} className="text-white">
      {/* Top CTA band */}
      <div className="border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-xs tracking-[0.3em] text-[#B05A28] uppercase mb-2 font-semibold">Premium Leather Supplier</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>
              Ready to partner with us?
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="flex gap-4 shrink-0">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                className="px-8 py-3 text-sm font-bold tracking-wider uppercase text-white"
                style={{ background: '#B05A28' }}
              >
                Contact Us
              </motion.button>
            </Link>
            <a href="mailto:info@labenza.com">
              <motion.button
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                className="px-8 py-3 text-sm font-bold tracking-wider uppercase border border-white/25 text-white hover:border-white transition-all"
              >
                Send Email
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
          <img src={logoImg} alt="Labenza" className="h-12 mb-5 opacity-100 brightness-200 invert" />
          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
            Leading supplier of premium leather materials — wet blue splits, crust leathers, and finished goods — exported worldwide.
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 flex items-center justify-center border border-white/15 text-gray-400 hover:text-white hover:border-[#B05A28] hover:bg-[#B05A28]/10 rounded-lg transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Products */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
          <h4 className="text-xs tracking-[0.25em] uppercase text-[#B05A28] font-bold mb-5">Products</h4>
          <ul className="space-y-3">
            {footerProducts.map((p) => (
              <li key={p.path}>
                <Link to={p.path} className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#B05A28] opacity-0 group-hover:opacity-100 transition-opacity" />
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
          <h4 className="text-xs tracking-[0.25em] uppercase text-[#B05A28] font-bold mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {footerLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#B05A28] opacity-0 group-hover:opacity-100 transition-opacity" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
          <h4 className="text-xs tracking-[0.25em] uppercase text-[#B05A28] font-bold mb-5">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <svg className="w-4 h-4 mt-0.5 text-[#B05A28] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Hazaribagh Tannery Area,<br />Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-4 h-4 text-[#B05A28] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@labenza.com" className="hover:text-white transition-colors">info@labenza.com</a>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-4 h-4 text-[#B05A28] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+8801700000000" className="hover:text-white transition-colors">+880 1700-000000</a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Leather Export. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
