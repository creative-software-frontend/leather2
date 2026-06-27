import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import images
import cowCrustImg from '../assets/images/cow-crust222.jpg';
import finishImg from '../assets/images/finish_quality-background879.jpg';
import aboutImg from '../assets/images/about.jpg';

const products = [
  { id: 1, name: 'Bryant Analyst Bag', category: 'Bags', price: 500, oldPrice: 650, img: cowCrustImg, path: '/categories/bags' },
  { id: 2, name: 'Heritage Classic Derby', category: 'Shoes', price: 210, oldPrice: 280, img: finishImg, path: '/categories/shoes' },
  { id: 3, name: 'Minimalist Card Wallet', category: 'Wallets', price: 45, oldPrice: 60, img: aboutImg, path: '/categories/wallets' },
];

export default function BestSellingSection() {
  return (
    <div className="px-6 lg:px-12 py-16 bg-[#FBF9F6] border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
        <div>
          <span className="text-xs tracking-[0.3em] text-[#B05A28] uppercase font-bold mb-2 block">Exclusive Collection</span>
          <h2 className="text-4xl font-display font-bold text-black">Best Selling Products</h2>
        </div>
        <Link to="/catalog">
          <button className="border-2 border-gray-800 text-gray-800 px-6 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-gray-800 hover:text-white transition duration-300 rounded-lg">
            View All Products →
          </button>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            key={product.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            <Link to={product.path}>
              <div className="relative h-80 overflow-hidden rounded-xl mb-5 bg-gray-50">
                <span className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full z-10">
                  Sale
                </span>
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                {/* Decreased overlay opacity */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition duration-300" />
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 bg-white/95 backdrop-blur-md text-gray-900 py-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg font-bold text-xs tracking-wider uppercase border border-white/20">
                  Quick View
                </button>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Georgia, serif' }}>{product.name}</h3>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">{product.category}</p>
                <div className="flex justify-center items-center space-x-3">
                  <span className="font-bold text-xl text-[#B05A28]">${product.price}</span>
                  <span className="text-sm text-gray-400 line-through font-medium">${product.oldPrice}</span>
                  <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded">-20% OFF</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
