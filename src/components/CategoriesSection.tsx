import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import diverse images for categories
import cowCrustImg from '../assets/images/cow-crust222.jpg';
import rawImg from '../assets/images/raw-selection.jpg';
import finishImg from '../assets/images/finish_quality-background879.jpg';
import aboutImg from '../assets/images/about.jpg';

const categories = [
  { title: 'Wallets', colSpan: 'col-span-2', path: '/categories/wallets', img: cowCrustImg },
  { title: 'Bags', colSpan: 'col-span-1', path: '/categories/bags', img: rawImg },
  { title: 'Shoes', colSpan: 'col-span-1', path: '/categories/shoes', img: finishImg },
  { title: 'Belts', colSpan: 'col-span-1', path: '/categories/belts', img: aboutImg },
  { title: 'Office Accessories', colSpan: 'col-span-2', path: '/categories/office', img: cowCrustImg },
  { title: 'Explore Catalog', colSpan: 'col-span-1', path: '/catalog', img: finishImg },
];

export default function CategoriesSection() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.3em] text-[#B05A28] uppercase font-bold mb-2 block">Curated Selection</span>
          <h2 className="text-4xl font-display font-semibold text-black">Shop by Category</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <Link key={idx} to={cat.path} className={`${cat.colSpan} relative h-72 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300`}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="w-full h-full relative"
              >
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" 
                />
                {/* Decreased overlay opacity for cleaner visual and real color pops */}
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition duration-300"></div>
                
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 p-5 rounded-xl backdrop-blur-md shadow-lg border border-white/20 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                  <p className="text-[10px] tracking-widest font-bold uppercase text-gray-400 mb-1">Collection</p>
                  <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>{cat.title}</h3>
                  <span className="mt-3 text-xs font-bold uppercase tracking-wider text-[#B05A28] flex items-center gap-1">
                    Explore
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
