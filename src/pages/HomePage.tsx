import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import BestSellingSection from '../components/BestSellingSection';
import { motion } from 'framer-motion';

export default function HomePage() {
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
        <div className="px-6 lg:px-12 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#A48265] text-white p-12 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ borderTopLeftRadius: '2rem', borderBottomRightRadius: '2rem' }}
          >
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-serif mb-4 text-white">Leather Jacket</h2>
              <p className="mb-6 opacity-90 text-white">New Arrivals Leather Bikers Jacket</p>
              <button className="bg-[#6B4B32] text-white px-6 py-3 rounded hover:bg-black transition font-semibold">
                Discover Now →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
