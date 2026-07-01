import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import wbsImg    from '../assets/images/wbs1-min.jpg';
import cowImg    from '../assets/images/cow-crust3512.jpg';
import goatImg   from '../assets/images/chrome-free-goat1.jpg';
import finishImg from '../assets/images/finish_quality-background879.jpg';

const featured = [
  {
    id: 1,
    name: 'Wet Blue Splits',
    category: 'Raw Materials',
    tag: 'Export Ready',
    tagColor: '#1e6f9f',
    img: wbsImg,
    path: '/products/wet-blue-splits',
    desc: 'Chrome-tanned bovine splits — exceptional tensile strength, uniform thickness, globally exported.',
  },
  {
    id: 2,
    name: 'Cow Crust Leather',
    category: 'Crust Leather',
    tag: 'Premium',
    tagColor: '#7B4A1E',
    img: cowImg,
    path: '/products/cow-crust',
    desc: 'Full-grain cow crust, veg-chrome combination tanned and ready for high-end finishing.',
  },
  {
    id: 3,
    name: 'Goat Crust Leather',
    category: 'Crust Leather',
    tag: 'Specialty',
    tagColor: '#8B4513',
    img: goatImg,
    path: '/products/goat-crust',
    desc: 'Supple caprine leather with high elasticity and tight natural grain for fashion goods.',
  },
  {
    id: 4,
    name: 'Finish Leather',
    category: 'Finished Goods',
    tag: 'New Arrivals',
    tagColor: '#2d6a4f',
    img: finishImg,
    path: '/products/finish-leather',
    desc: 'Dyehouse-finished premium hides in a vast spectrum of custom colorways and textures.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const } }),
};

export default function BestSellingSection() {
  return (
    <div className="px-4 sm:px-6 lg:px-12 py-16 sm:py-20 bg-[#FBF9F6] border-t border-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 sm:mb-14 gap-4"
        >
          <div>
            <span className="text-xs tracking-[0.3em] text-[#B05A28] uppercase font-bold mb-2 block">Our Products</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-black" style={{ fontFamily: 'Georgia, serif' }}>
              Featured Products
            </h2>
            <p className="text-gray-500 text-sm mt-2 max-w-md">
              Premium leather materials crafted for global export — explore each category.
            </p>
          </div>
          <Link to="/catalog">
            <motion.button
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="border-2 border-gray-800 text-gray-800 px-6 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-gray-800 hover:text-white transition duration-300 rounded-lg whitespace-nowrap"
            >
              View All Products →
            </motion.button>
          </Link>
        </motion.div>

        {/* 4-column responsive product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, idx) => (
            <motion.div
              key={product.id}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx}
              whileHover={{ y: -6 }}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <Link to={product.path} className="flex flex-col flex-1">
                {/* Image */}
                <div className="relative overflow-hidden h-56 sm:h-64 bg-gray-50">
                  <span
                    className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white"
                    style={{ background: product.tagColor }}
                  >
                    {product.tag}
                  </span>
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition-colors duration-300" />
                  {/* Quick View overlay */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-4/5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <div className="bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] font-bold uppercase tracking-wider py-2.5 rounded-lg text-center shadow-lg">
                      View Details →
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">{product.category}</p>
                  <h3
                    className="text-base font-bold text-gray-900 group-hover:text-[#B05A28] transition-colors duration-200 mb-2"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 flex-1">{product.desc}</p>
                  <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-xs font-bold tracking-wider uppercase text-[#B05A28]">Inquire</span>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-[#B05A28] group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
