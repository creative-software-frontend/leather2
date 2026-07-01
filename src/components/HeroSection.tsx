import { motion } from 'framer-motion';

// Hero background — premium leather lifestyle photo from Unsplash
const heroBg = 'https://images.unsplash.com/photo-1611042553365-9b101441c135?w=1400&q=85&fit=crop';

export default function HeroSection() {
  return (
    <div className="px-4 py-6 md:px-12 md:py-8 flex flex-col md:flex-row gap-6">
      {/* Left Block */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-[#6B4B32] text-white p-8 md:p-12 w-full md:w-1/3 flex flex-col justify-between" style={{ borderTopRightRadius: '2rem', borderBottomLeftRadius: '0.5rem', borderBottomRightRadius: '0.5rem', borderTopLeftRadius: '0.5rem' }}>
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase mb-4">To inspire</h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mb-6 text-white">A Refined<br/>Lifestyle</h1>
          <p className="text-sm opacity-80 mb-8 text-white max-w-xs">
            Handcrafted premium leather goods built to last a lifetime. Timeless style meets artisan quality.
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
        className="w-full md:w-2/3 relative bg-gray-900 overflow-hidden min-h-[350px] md:min-h-[480px]" style={{ borderTopLeftRadius: '2rem', borderBottomRightRadius: '2rem', borderBottomLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }}>
        <img 
          src={heroBg}
          alt="Premium leather goods"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-center">
          <h3 className="text-sm font-semibold tracking-wide text-white/80 uppercase mb-2 tracking-[0.2em]">Brand New</h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4">Premium<br/>Collection</h2>
          <p className="text-sm text-white/70 max-w-xs mb-6">Full-grain leather. Hand-stitched. Built for generations.</p>
          <div className="mt-2 flex space-x-2">
            <span className="h-1 w-8 bg-white opacity-50"></span>
            <span className="h-1 w-2 bg-white"></span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
