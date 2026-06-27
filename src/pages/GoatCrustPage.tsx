import ProductDetailPage from '../components/ProductDetailPage';
import heroImg from '../assets/images/chrome-free-goat1.jpg';
import img1 from '../assets/images/chrome-free-goat1.jpg';
import img2 from '../assets/images/goat-crust-h-product1.jpg';
import img3 from '../assets/images/chrome-free-goat1.jpg';
import img4 from '../assets/images/goat-crust-h-product1.jpg';
import cowImg from '../assets/images/cow-crust222.jpg';
import finishImg from '../assets/images/finish_quality-background879.jpg';
import wbsImg from '../assets/images/2-Wet-Blue-Splits-min.jpg';

export default function GoatCrustPage() {
  return (
    <ProductDetailPage
      tag="Caprine Leather"
      title="Goat Crust Leather"
      subtitle="Supple caprine crust with natural grain"
      description="Goat Crust Leather from Labenza is renowned for its natural pebble grain, lightweight feel, and remarkable softness. Sourced from premium goat hides and processed through our eco-conscious tanning lines, it is the material of choice for gloves, garments, small leather goods, and premium shoe linings."
      heroImage={heroImg}
      gallery={[img1, img2, img3, img4, img1, img2]}
      specs={[
        { label: 'Type', value: 'Goat Crust Leather' },
        { label: 'Origin', value: 'Premium Goat Hide' },
        { label: 'Thickness', value: '0.6mm – 1.2mm' },
        { label: 'Tanning', value: 'Chrome Tanned' },
        { label: 'Surface', value: 'Natural Pebble Grain' },
        { label: 'Finish', value: 'Crust / Semi-finished' },
        { label: 'MOQ', value: '200 sq. ft.' },
        { label: 'Usage', value: 'Gloves, Garments, SLG' },
      ]}
      features={[
        { icon: '🪶', title: 'Featherlight Softness', desc: 'Natural lightweight structure makes it ideal for garments and accessories requiring comfort and drape.' },
        { icon: '✨', title: 'Pebble Grain Texture', desc: "Goat hide's distinctive natural grain adds visual character that synthetic alternatives simply cannot replicate." },
        { icon: '♻️', title: 'Eco-Friendly Tanning', desc: 'Our chrome-free option is available, passing EU REACH standards and meeting demand for sustainable sourcing.' },
      ]}
      relatedProducts={[
        { name: 'Cow Crust Leather', path: '/products/cow-crust', img: cowImg, tag: 'Bovine' },
        { name: 'Finish Leather', path: '/products/finish-leather', img: finishImg, tag: 'Finished' },
        { name: 'Wet Blue Splits', path: '/products/wet-blue-splits', img: wbsImg, tag: 'Bovine' },
      ]}
    />
  );
}
