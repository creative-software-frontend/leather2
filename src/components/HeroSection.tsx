import cowCrustImg from '../assets/images/cow-crust222.jpg';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="px-12 py-8 flex gap-6">
      {/* Left Block */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-[#6B4B32] text-white p-12 w-1/3 flex flex-col justify-between" style={{ borderTopRightRadius: '2rem', borderBottomLeftRadius: '0.5rem', borderBottomRightRadius: '0.5rem', borderTopLeftRadius: '0.5rem' }}>
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase mb-4">To inspire</h3>
          <h1 className="text-5xl font-serif leading-tight mb-6 text-white">A Refined<br/>Lifestyle</h1>
          <p className="text-sm opacity-80 mb-8 text-white max-w-xs">
            Lorem ipsum dolor sit amet consectetur. Fermentum in
          </p>
        </div>
        <div>
          <button className="border border-white text-white px-6 py-2 rounded-sm hover:bg-white hover:text-[#6B4B32] transition">
            Shop Now
          </button>
        </div>
      </motion.div>

      {/* Right Block */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-2/3 relative bg-gray-900 overflow-hidden" style={{ borderTopLeftRadius: '2rem', borderBottomRightRadius: '2rem', borderBottomLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }}>
        <img 
          src={cowCrustImg} 
          alt="Wallet" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="relative z-10 p-12 h-full flex flex-col justify-center">
          <h3 className="text-sm font-semibold tracking-wide text-white mb-2">Brand New</h3>
          <h2 className="text-5xl font-serif text-white mb-4">Wallet</h2>
          <div className="mt-4 flex space-x-2">
            <span className="h-1 w-8 bg-white opacity-50"></span>
            <span className="h-1 w-2 bg-white"></span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
