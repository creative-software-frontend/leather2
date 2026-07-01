import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/images/logo-leh1-01.png';

const products = [
  { label: 'Wet Blue Splits', path: '/products/wet-blue-splits' },
  { label: 'Cow Crust Leather', path: '/products/cow-crust' },
  { label: 'Goat Crust Leather', path: '/products/goat-crust' },
  { label: 'Finish Leather', path: '/products/finish-leather' },
];

const categories = [
  { label: 'Wallets', path: '/categories/wallets' },
  { label: 'Bags', path: '/categories/bags' },
  { label: 'Shoes', path: '/categories/shoes' },
  { label: 'Belts', path: '/categories/belts' },
  { label: 'Office Accessories', path: '/categories/office' },
];

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '#', dropdown: products },
  { label: 'Categories', path: '#', dropdown: categories },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' as const }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3 shadow-lg' : 'py-5'
        }`}
        style={{
          background: scrolled
            ? 'rgba(255,255,255,0.97)'
            : 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logoImg} alt="Labenza" className="h-10 w-auto object-contain opacity-100" />
            <span className="text-xl font-bold tracking-widest text-gray-900 font-display">LEATHER EXPORT</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
                onMouseLeave={() => link.dropdown && handleMouseLeave()}
              >
                {link.dropdown ? (
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold tracking-wide rounded-md transition-all duration-200 ${
                      openDropdown === link.label
                        ? 'text-[#B05A28] bg-orange-50'
                        : 'text-gray-800 hover:text-[#B05A28] hover:bg-orange-50'
                    }`}
                  >
                    {link.label}
                    <motion.svg
                      animate={{ rotate: openDropdown === link.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-3.5 h-3.5 mt-0.5"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`block px-4 py-2 text-sm font-semibold tracking-wide rounded-md transition-all duration-200 ${
                      isActive(link.path)
                        ? 'text-[#B05A28]'
                        : 'text-gray-800 hover:text-[#B05A28] hover:bg-orange-50'
                    }`}
                  >
                    {link.label}
                    {isActive(link.path) && (
                      <motion.div layoutId="activeBar" className="mt-0.5 h-0.5 bg-[#B05A28] rounded-full" />
                    )}
                  </Link>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {link.dropdown && openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.18 }}
                      onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}
                      onMouseLeave={handleMouseLeave}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 py-2"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:text-[#B05A28] hover:bg-orange-50 transition-all duration-150 font-medium group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B05A28] opacity-0 group-hover:opacity-100 transition-opacity" />
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center h-10">
              <AnimatePresence mode="wait">
                {!searchOpen ? (
                  <motion.button 
                    key="search-btn"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setSearchOpen(true)}
                    className="text-gray-700 hover:text-[#B05A28] transition-colors p-2 rounded-full hover:bg-orange-50"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                    </svg>
                  </motion.button>
                ) : (
                  <motion.form 
                    key="search-form"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 220, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSearchSubmit}
                    className="relative overflow-hidden flex items-center"
                  >
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      autoFocus
                      className="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border-none rounded-full focus:ring-2 focus:ring-[#B05A28] outline-none"
                    />
                    <button type="button" onClick={() => setSearchOpen(false)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#B05A28]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
            <Link
              to="/contact"
              className="px-5 py-2 text-sm font-bold text-white rounded-md tracking-wide transition-all duration-200 hover:opacity-90 active:scale-95 whitespace-nowrap"
              style={{ background: '#B05A28' }}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            <motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }} className="block w-6 h-0.5 bg-gray-800 rounded-full origin-center" />
            <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }} className="block w-6 h-0.5 bg-gray-800 rounded-full" />
            <motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }} className="block w-6 h-0.5 bg-gray-800 rounded-full origin-center" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-xl overflow-hidden lg:hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                        className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-gray-800 hover:text-[#B05A28] rounded-lg hover:bg-orange-50 transition"
                      >
                        {link.label}
                        <motion.svg animate={{ rotate: openDropdown === link.label ? 180 : 0 }} transition={{ duration: 0.2 }} className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {openDropdown === link.label && (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="pl-4 overflow-hidden">
                            {link.dropdown.map((item) => (
                              <Link key={item.path} to={item.path} className="block px-3 py-2.5 text-sm text-gray-600 hover:text-[#B05A28] font-medium hover:bg-orange-50 rounded-lg transition">
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                      <Link to={link.path} className={`block px-3 py-3 text-sm font-semibold rounded-lg transition ${isActive(link.path) ? 'text-[#B05A28] bg-orange-50' : 'text-gray-800 hover:text-[#B05A28] hover:bg-orange-50'}`}>
                        {link.label}
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
              <div className="mt-3 pt-3 border-t border-gray-100">
                <Link to="/contact" className="block w-full text-center py-3 text-sm font-bold text-white rounded-lg" style={{ background: '#B05A28' }}>
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
