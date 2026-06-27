import ProductDetailPage from '../components/ProductDetailPage';
import heroImg from '../assets/images/cow-crust3512.jpg';
import img1 from '../assets/images/cow-crust222.jpg';
import img2 from '../assets/images/cow-crust325.jpg';
import img3 from '../assets/images/cow-crust3512.jpg';
import img4 from '../assets/images/cow-crust-h-product1.jpg';
import goatImg from '../assets/images/chrome-free-goat1.jpg';
import finishImg from '../assets/images/finish_quality-background879.jpg';
import wbsImg from '../assets/images/2-Wet-Blue-Splits-min.jpg';

export default function CowCrustPage() {
  return (
    <ProductDetailPage
      tag="Bovine Leather"
      title="Cow Crust Leather"
      subtitle="Full-grain bovine crust, tannery-ready"
      description="Our Cow Crust Leather is produced from premium full-grain bovine hides using controlled chrome and vegetable tanning processes. Celebrated for its natural grain structure, exceptional tensile strength, and outstanding breathability — ideal for high-end footwear, upholstery, bags, and belts."
      heroImage={heroImg}
      gallery={[img1, img2, img3, img4, img1, img2]}
      specs={[
        { label: 'Type', value: 'Cow Crust Leather' },
        { label: 'Origin', value: 'Full Bovine Hide' },
        { label: 'Thickness', value: '1.4mm – 3.0mm' },
        { label: 'Tanning', value: 'Chrome / Veg Combo' },
        { label: 'Surface', value: 'Full Grain' },
        { label: 'Finish', value: 'Crust / Semi-finished' },
        { label: 'MOQ', value: '300 sq. ft.' },
        { label: 'Usage', value: 'Footwear, Upholstery' },
      ]}
      features={[
        { icon: '🐄', title: 'Full-Grain Quality', desc: 'Sourced from premium cattle hides retaining the natural grain for superior durability and aesthetics.' },
        { icon: '🌿', title: 'Dual Tanning', desc: 'Chrome-vegetable combination tanning delivers optimal softness, firmness, and environmental compliance.' },
        { icon: '📦', title: 'Ready to Finish', desc: 'Shipped in crust form — ready for your choice of dyeing, embossing, or coating process.' },
      ]}
      relatedProducts={[
        { name: 'Wet Blue Splits', path: '/products/wet-blue-splits', img: wbsImg, tag: 'Bovine' },
        { name: 'Goat Crust Leather', path: '/products/goat-crust', img: goatImg, tag: 'Goat' },
        { name: 'Finish Leather', path: '/products/finish-leather', img: finishImg, tag: 'Finished' },
      ]}
    />
  );
}
