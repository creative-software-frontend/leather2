import cowCrustImg from '../assets/images/cow-crust222.jpg';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Bryant Analyst Bag', category: 'Bags', price: 500, oldPrice: 650 },
  { id: 2, name: 'Vacation Baggage', category: 'Bags', price: 500, oldPrice: 650 },
];

export default function BestSellingSection() {
  return (
    <div className="px-12 py-12 bg-[#F9F8F6]">
      <div className="flex justify-between items-end mb-8">
        <div>
          <p className="text-xs uppercase tracking-wider text-gray-500 border border-gray-300 inline-block px-2 py-1 mb-2">Exclusive Collection</p>
          <h2 className="text-4xl font-serif text-black">Best Selling</h2>
        </div>
        <button className="border border-black px-6 py-2 text-sm font-semibold hover:bg-black hover:text-white transition">
          View All Products →
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {products.map((product, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            key={product.id} className="bg-white p-4 group">
            <div className="relative h-[300px] overflow-hidden mb-4 bg-gray-100">
              <span className="absolute top-4 left-4 bg-green-500 text-white text-xs px-2 py-1 z-10">Sale</span>
              <img src={cowCrustImg} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500 img-secondary" />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 bg-white text-black py-2 opacity-0 group-hover:opacity-100 transition duration-300 shadow font-semibold">
                Buy Now
              </button>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-serif font-bold text-black">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{product.category}</p>
              <div className="flex justify-center items-center space-x-2">
                <span className="font-bold text-lg text-black">${product.price}</span>
                <span className="text-sm text-gray-400 line-through">${product.oldPrice}</span>
                <span className="text-xs text-red-500">-20%</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
