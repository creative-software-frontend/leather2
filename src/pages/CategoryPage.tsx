import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import images for product list
import cowCrustImg from '../assets/images/cow-crust222.jpg';
import rawImg from '../assets/images/raw-selection.jpg';
import finishImg from '../assets/images/finish_quality-background879.jpg';
import aboutImg from '../assets/images/about.jpg';

interface ProductItem {
  id: number;
  name: string;
  price: string;
  description: string;
  img: string;
}

interface CategoryData {
  title: string;
  subtitle: string;
  description: string;
  bannerImg: string;
  products: ProductItem[];
}

const categoriesData: Record<string, CategoryData> = {
  wallets: {
    title: 'Leather Wallets',
    subtitle: 'Classic Craftsmanship, Daily Companion',
    description: 'Sleek, minimalist design meets robust premium leather. Engineered for durability, featuring quick-access slots, RFID protection, and hand-finished stitching.',
    bannerImg: cowCrustImg,
    products: [
      { id: 1, name: 'Bifold Classic Wallet', price: '$85', description: 'Handcrafted bifold with 6 card slots and full-grain cow crust leather.', img: cowCrustImg },
      { id: 2, name: 'Minimalist Card Holder', price: '$45', description: 'Ultra-slim leather card sleeve with central cash pocket.', img: rawImg },
      { id: 3, name: 'Travel Zip Portfolio', price: '$120', description: 'Full zipper wallet spacious enough for passport, boarding pass, and cards.', img: finishImg },
      { id: 4, name: 'Slim Money Clip Wallet', price: '$65', description: 'Magnetic money clip wrapped in premium finished leather.', img: aboutImg },
    ]
  },
  bags: {
    title: 'Luxury Leather Bags',
    subtitle: 'Carry Your Legacy Everywhere',
    description: 'From executive briefcases to weekend duffels, our bags are crafted from thick bovine hides and designed to age beautifully, gaining a rich character over time.',
    bannerImg: rawImg,
    products: [
      { id: 1, name: 'Bryant Analyst Briefcase', price: '$450', description: 'Sophisticated professional bag with dedicated laptop sleeve and organizers.', img: cowCrustImg },
      { id: 2, name: 'Heritage Weekend Duffel', price: '$550', description: 'Spacious cabin-size travel bag crafted from water-resistant finished leather.', img: rawImg },
      { id: 3, name: 'Commuter Slim Messenger', price: '$290', description: 'Crossbody bag perfect for tablets, notebooks, and everyday essentials.', img: finishImg },
      { id: 4, name: 'Vanguard Leather Backpack', price: '$380', description: 'Ergonomic backpack blending vintage style with modern interior utilities.', img: aboutImg },
    ]
  },
  shoes: {
    title: 'Premium Leather Shoes',
    subtitle: 'Step Into Excellence',
    description: 'Hand-lasted footwear using the finest cow crust and finished calf leathers. Built on ergonomic lasts with Goodyear welted construction for life-long wear.',
    bannerImg: finishImg,
    products: [
      { id: 1, name: 'Classic Oxford Brogues', price: '$220', description: 'Elegant formal shoes featuring hand-burnished crust leather detailing.', img: cowCrustImg },
      { id: 2, name: 'Vagabond Chelsea Boots', price: '$260', description: 'Sleek slip-on ankle boots with flexible elastic panels and pull tabs.', img: rawImg },
      { id: 3, name: 'Heritage Penny Loafers', price: '$195', description: 'Slip-on luxury loafers in high-shine finished leather.', img: finishImg },
      { id: 4, name: 'Metropolitan Derby Shoes', price: '$210', description: 'Versatile derby shoes with reinforced soles for premium comfort.', img: aboutImg },
    ]
  },
  belts: {
    title: 'Full-Grain Leather Belts',
    subtitle: 'The Perfect Finish',
    description: 'Single-piece full-grain leather belts with solid brass buckles. No fillers, no bonded layers—just pure premium hide built to hold shape forever.',
    bannerImg: aboutImg,
    products: [
      { id: 1, name: 'Classic Dress Belt', price: '$55', description: '30mm wide belt with feathered edges, perfect for formal wear.', img: cowCrustImg },
      { id: 2, name: 'Casual Utility Belt', price: '$60', description: '40mm wide rugged belt with brushed nickel double prong buckle.', img: rawImg },
      { id: 3, name: 'Woven Leather Belt', price: '$75', description: 'Intricately braided leather strips offering stretch and custom fit.', img: finishImg },
      { id: 4, name: 'Suede Heritage Belt', price: '$65', description: 'Soft textured suede belt with contrast stitching and brass buckle.', img: aboutImg },
    ]
  },
  office: {
    title: 'Office & Desk Accessories',
    subtitle: 'Refined Workspace Elegance',
    description: 'Elevate your daily work environment. Hand-crafted desk pads, portfolios, and tech organizers designed to keep your workspace clean and inspiring.',
    bannerImg: cowCrustImg,
    products: [
      { id: 1, name: 'Executive Portfolio Folder', price: '$110', description: 'A4 writing pad holder with slots for cards, tablet, and pen loop.', img: cowCrustImg },
      { id: 2, name: 'Minimalist Desk Pad', price: '$85', description: 'Large leather desk mat protecting your workspace with a premium feel.', img: rawImg },
      { id: 3, name: 'Valet Tech Organizer', price: '$70', description: 'Roll-up pouch for chargers, mouse, and cables in soft leather.', img: finishImg },
      { id: 4, name: 'Leather Mousepad & Coaster', price: '$35', description: 'Smooth glide surface mousepad paired with a matching cup coaster.', img: aboutImg },
    ]
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' } })
};

export default function CategoryPage() {
  const { categoryName } = useParams<{ categoryName: string }>();
  const activeKey = (categoryName || '').toLowerCase();
  const data = categoriesData[activeKey] || categoriesData.wallets; // Fallback to wallets

  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-36 pb-20 px-6 lg:px-10 overflow-hidden bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.span variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="inline-block text-xs tracking-[0.3em] text-[#B05A28] uppercase font-bold mb-4">
              Premium Category
            </motion.span>
            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}>
              {data.title}
            </motion.h1>
            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="text-gray-500 font-medium text-lg mb-6">
              {data.subtitle}
            </motion.p>
            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={3}
              className="text-gray-600 text-sm leading-relaxed max-w-lg">
              {data.description}
            </motion.p>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
            className="relative h-64 lg:h-96 rounded-2xl overflow-hidden shadow-lg bg-gray-200">
            <img src={data.bannerImg} alt={data.title} className="w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        </div>
      </section>

      {/* Product List Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex justify-between items-end mb-12">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#B05A28] uppercase font-bold mb-2">Curated Selection</p>
            <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Browse Products</h2>
          </div>
          <span className="text-sm font-semibold text-gray-400">{data.products.length} Products Available</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.products.map((product, i) => (
            <motion.div
              key={product.id}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
              whileHover={{ y: -6 }}
              className="group cursor-pointer bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-64 bg-gray-50">
                <motion.img
                  whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}
                  src={product.img} alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-[#B05A28] shadow-sm">
                  {product.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#B05A28] transition-colors duration-200" style={{ fontFamily: 'Georgia, serif' }}>
                  {product.name}
                </h3>
                <p className="text-gray-500 text-xs mt-2 leading-relaxed line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <Link to="/contact" className="text-xs font-bold tracking-wider uppercase text-[#B05A28] hover:opacity-80 transition-opacity">
                    Inquire Now
                  </Link>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-[#B05A28] group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="border-t border-b border-gray-100 bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { title: '100% Genuine', desc: 'Full-Grain Premium Hides Only' },
            { title: 'Handcrafted', desc: 'Stitched & Finished by Artisans' },
            { title: 'Global Shipping', desc: 'Secure Express World-Wide Delivery' },
            { title: 'Eco Tanned', desc: 'ISO 14001 Environmental Standard' }
          ].map((item, idx) => (
            <motion.div key={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={idx}>
              <h4 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
