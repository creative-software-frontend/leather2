import cowCrustImg from '../assets/images/cow-crust222.jpg';
import { motion } from 'framer-motion';

const categories = [
  { title: 'Wallet', colSpan: 'col-span-2', rowSpan: 'row-span-1' },
  { title: 'Bags', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { title: 'Clownfish', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { title: 'Office', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
  { title: 'Backpacks', colSpan: 'col-span-2', rowSpan: 'row-span-1' },
  { title: 'Shoe', colSpan: 'col-span-1', rowSpan: 'row-span-1' },
];

export default function CategoriesSection() {
  return (
    <div className="px-12 py-12">
      <h2 className="text-4xl font-serif text-center mb-10 text-black">Categories</h2>
      
      <div className="grid grid-cols-4 gap-4 h-[500px]">
        {categories.map((cat, idx) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            key={idx} className={`relative overflow-hidden group cursor-pointer ${cat.colSpan} ${cat.rowSpan}`}>
            <img 
              src={cowCrustImg} 
              alt={cat.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 img-secondary" 
            />
            {/* The user requested high text visibility and black text on images */}
            <div className="absolute inset-0 bg-white/40 group-hover:bg-white/50 transition duration-300"></div>
            <div className="absolute bottom-6 left-6 bg-white/80 p-4 rounded backdrop-blur-sm">
              <p className="text-xs font-semibold mb-1 text-black">Category</p>
              <h3 className="text-2xl font-serif font-bold text-black">{cat.title}</h3>
              <button className="mt-2 text-xs font-bold uppercase tracking-wider text-[#B05A28] flex items-center">
                <span>View</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
