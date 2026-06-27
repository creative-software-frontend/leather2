import ProductDetailPage from '../components/ProductDetailPage';
import heroImg from '../assets/images/finish_quality-background879.jpg';
import img1 from '../assets/images/finish_quality-background879.jpg';
import img2 from '../assets/images/finish-h-product1.jpg';
import img3 from '../assets/images/finish_quality-background879.jpg';
import img4 from '../assets/images/finish-h-product1.jpg';
import cowImg from '../assets/images/cow-crust222.jpg';
import goatImg from '../assets/images/chrome-free-goat1.jpg';
import wbsImg from '../assets/images/2-Wet-Blue-Splits-min.jpg';

export default function FinishLeatherPage() {
  return (
    <ProductDetailPage
      tag="Finished Leather"
      title="Finish Leather"
      subtitle="Ready-to-use premium finished leather"
      description="Labenza Finish Leather represents the pinnacle of our production pipeline — fully processed, dyed, and coated leather ready for immediate use by manufacturers and designers. Available in a wide range of colours, textures, and finishes including matte, gloss, metallic, and antique pull-up effects."
      heroImage={heroImg}
      gallery={[img1, img2, img3, img4, img1, img2]}
      specs={[
        { label: 'Type', value: 'Fully Finished Leather' },
        { label: 'Origin', value: 'Bovine / Goat Hide' },
        { label: 'Thickness', value: '0.8mm – 2.0mm' },
        { label: 'Finish Options', value: 'Matte, Gloss, Metallic' },
        { label: 'Colors', value: '200+ Standard Options' },
        { label: 'Tanning', value: 'Chrome / Combination' },
        { label: 'MOQ', value: '500 sq. ft.' },
        { label: 'Usage', value: 'Shoes, Bags, Garments' },
      ]}
      features={[
        { icon: '🎨', title: '200+ Color Options', desc: 'Our in-house dyehouse offers an extensive palette with custom color matching on orders over 1,000 sq. ft.' },
        { icon: '💎', title: 'Production Ready', desc: 'Fully finished and quality-checked — no additional processing needed. Cut directly into components.' },
        { icon: '🏆', title: 'Multi-surface Finishes', desc: 'Choose from pull-up, nubuck, patent, suede, or printed finishes — all available from a single supplier.' },
      ]}
      relatedProducts={[
        { name: 'Cow Crust Leather', path: '/products/cow-crust', img: cowImg, tag: 'Bovine' },
        { name: 'Goat Crust Leather', path: '/products/goat-crust', img: goatImg, tag: 'Caprine' },
        { name: 'Wet Blue Splits', path: '/products/wet-blue-splits', img: wbsImg, tag: 'Bovine' },
      ]}
    />
  );
}
