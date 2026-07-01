import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Banner images (AI-generated, locally stored)
import walletsImg  from '../assets/images/cat-wallets.png';
import bagsImg     from '../assets/images/cat-bags.png';
import shoesImg    from '../assets/images/cat-shoes.png';
import beltsImg    from '../assets/images/cat-belts.png';
import officeImg   from '../assets/images/cat-office.png';
import catalogImg  from '../assets/images/cat-catalog.png';

// AI-generated Luxury Bag product images
import bagBriefcase from '../assets/images/bag-briefcase.png';
import bagDuffel    from '../assets/images/bag-duffel.png';
import bagMessenger from '../assets/images/bag-messenger.png';
import bagBackpack  from '../assets/images/bag-backpack.png';

// AI-generated Wallet images
import walletBifold    from '../assets/images/wallet-bifold.png';
import walletMoneyClip from '../assets/images/wallet-moneyclip.png';

// Unsplash product images — matched per product
const IMG = {
  // Wallets — AI generated local images
  bifold:     walletBifold    as unknown as string,
  cardHolder: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80&fit=crop',
  zipWallet:  'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80&fit=crop',
  moneyClip:  walletMoneyClip as unknown as string,
  // Bags — AI generated local images
  briefcase: bagBriefcase as unknown as string,
  duffel:    bagDuffel    as unknown as string,
  messenger: bagMessenger as unknown as string,
  backpack:  bagBackpack  as unknown as string,
  // Shoes
  oxford:    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&fit=crop',
  chelsea:   'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&q=80&fit=crop',
  loafer:    'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&q=80&fit=crop',
  derby:     'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80&fit=crop',
  // Belts
  dressBelt: 'https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?w=600&q=80&fit=crop',
  utilBelt:  'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80&fit=crop',
  wovenBelt: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80&fit=crop',
  suedeBelt: 'https://images.unsplash.com/photo-1559563458-527698bf5295?w=600&q=80&fit=crop',
  // Office
  portfolio: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&q=80&fit=crop',
  deskPad:   'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80&fit=crop',
  techOrg:   'https://images.unsplash.com/photo-1603400521630-9f2de124b33b?w=600&q=80&fit=crop',
  mousepad:  'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=600&q=80&fit=crop',
};

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
    bannerImg: walletsImg,
    products: [
      { id: 1, name: 'Bifold Classic Wallet',    price: '$85',  description: 'Handcrafted bifold with 6 card slots and full-grain cow crust leather.', img: IMG.bifold },
      { id: 2, name: 'Minimalist Card Holder',   price: '$45',  description: 'Ultra-slim leather card sleeve with central cash pocket.',                img: IMG.cardHolder },
      { id: 3, name: 'Travel Zip Portfolio',     price: '$120', description: 'Full zipper wallet spacious enough for passport, boarding pass, and cards.', img: IMG.zipWallet },
      { id: 4, name: 'Slim Money Clip Wallet',   price: '$65',  description: 'Magnetic money clip wrapped in premium finished leather.',                img: IMG.moneyClip },
    ]
  },
  bags: {
    title: 'Luxury Leather Bags',
    subtitle: 'Carry Your Legacy Everywhere',
    description: 'From executive briefcases to weekend duffels, our bags are crafted from thick bovine hides and designed to age beautifully, gaining a rich character over time.',
    bannerImg: bagsImg,
    products: [
      { id: 1, name: 'Bryant Analyst Briefcase',  price: '$450', description: 'Sophisticated professional bag with dedicated laptop sleeve and organizers.', img: IMG.briefcase },
      { id: 2, name: 'Heritage Weekend Duffel',   price: '$550', description: 'Spacious cabin-size travel bag crafted from water-resistant finished leather.', img: IMG.duffel },
      { id: 3, name: 'Commuter Slim Messenger',   price: '$290', description: 'Crossbody bag perfect for tablets, notebooks, and everyday essentials.',    img: IMG.messenger },
      { id: 4, name: 'Vanguard Leather Backpack', price: '$380', description: 'Ergonomic backpack blending vintage style with modern interior utilities.',  img: IMG.backpack },
    ]
  },
  shoes: {
    title: 'Premium Leather Shoes',
    subtitle: 'Step Into Excellence',
    description: 'Hand-lasted footwear using the finest cow crust and finished calf leathers. Built on ergonomic lasts with Goodyear welted construction for life-long wear.',
    bannerImg: shoesImg,
    products: [
      { id: 1, name: 'Classic Oxford Brogues',     price: '$220', description: 'Elegant formal shoes featuring hand-burnished crust leather detailing.', img: IMG.oxford },
      { id: 2, name: 'Vagabond Chelsea Boots',     price: '$260', description: 'Sleek slip-on ankle boots with flexible elastic panels and pull tabs.',   img: IMG.chelsea },
      { id: 3, name: 'Heritage Penny Loafers',     price: '$195', description: 'Slip-on luxury loafers in high-shine finished leather.',                  img: IMG.loafer },
      { id: 4, name: 'Metropolitan Derby Shoes',   price: '$210', description: 'Versatile derby shoes with reinforced soles for premium comfort.',         img: IMG.derby },
    ]
  },
  belts: {
    title: 'Full-Grain Leather Belts',
    subtitle: 'The Perfect Finish',
    description: 'Single-piece full-grain leather belts with solid brass buckles. No fillers, no bonded layers—just pure premium hide built to hold shape forever.',
    bannerImg: beltsImg,
    products: [
      { id: 1, name: 'Classic Dress Belt',   price: '$55', description: '30mm wide belt with feathered edges, perfect for formal wear.',                      img: IMG.dressBelt },
      { id: 2, name: 'Casual Utility Belt',  price: '$60', description: '40mm wide rugged belt with brushed nickel double prong buckle.',                     img: IMG.utilBelt },
      { id: 3, name: 'Woven Leather Belt',   price: '$75', description: 'Intricately braided leather strips offering stretch and custom fit.',                 img: IMG.wovenBelt },
      { id: 4, name: 'Suede Heritage Belt',  price: '$65', description: 'Soft textured suede belt with contrast stitching and brass buckle.',                  img: IMG.suedeBelt },
    ]
  },
  office: {
    title: 'Office & Desk Accessories',
    subtitle: 'Refined Workspace Elegance',
    description: 'Elevate your daily work environment. Hand-crafted desk pads, portfolios, and tech organizers designed to keep your workspace clean and inspiring.',
    bannerImg: officeImg,
    products: [
      { id: 1, name: 'Executive Portfolio Folder',   price: '$110', description: 'A4 writing pad holder with slots for cards, tablet, and pen loop.',              img: IMG.portfolio },
      { id: 2, name: 'Minimalist Desk Pad',          price: '$85',  description: 'Large leather desk mat protecting your workspace with a premium feel.',           img: IMG.deskPad },
      { id: 3, name: 'Valet Tech Organizer',         price: '$70',  description: 'Roll-up pouch for chargers, mouse, and cables in soft leather.',                 img: IMG.techOrg },
      { id: 4, name: 'Leather Mousepad & Coaster',   price: '$35',  description: 'Smooth glide surface mousepad paired with a matching cup coaster.',              img: IMG.mousepad },
    ]
  },
  catalog: {
    title: 'Full Product Catalog',
    subtitle: 'Browse Our Complete Collection',
    description: 'Explore our entire range of handcrafted leather goods — from everyday carry essentials to executive accessories, all made with premium full-grain hides.',
    bannerImg: catalogImg,
    products: [
      { id: 1, name: 'Bifold Classic Wallet',    price: '$85',  description: 'Handcrafted bifold with 6 card slots and full-grain cow crust leather.',            img: IMG.bifold },
      { id: 2, name: 'Bryant Analyst Briefcase', price: '$450', description: 'Sophisticated professional bag with dedicated laptop sleeve.',                      img: IMG.briefcase },
      { id: 3, name: 'Classic Oxford Brogues',   price: '$220', description: 'Elegant formal shoes featuring hand-burnished crust leather detailing.',            img: IMG.oxford },
      { id: 4, name: 'Classic Dress Belt',       price: '$55',  description: '30mm wide belt with feathered edges, perfect for formal wear.',                     img: IMG.dressBelt },
    ]
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' as const } })
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
