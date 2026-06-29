import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const } }),
};

// Animated count-up hook
function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// Stat item with count-up
function StatItem({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  // Parse numeric part and suffix (e.g. '500K+' => num=500, suffix='K+')
  const match = value.match(/^(\d+)(.*)$/);
  const numericTarget = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : value;
  const isNumeric = !!match;

  const count = useCountUp(numericTarget, 1600, inView && isNumeric);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={delay}
    >
      <div className="text-2xl md:text-3xl font-bold">
        {isNumeric ? `${count}${suffix}` : value}
      </div>
      <div className="text-xs font-semibold tracking-wider uppercase opacity-80 mt-1">{label}</div>
    </motion.div>
  );
}

const offices = [
  { city: 'Dhaka HQ', address: 'Hazaribagh Tannery Area, Dhaka-1209, Bangladesh', phone: '+880 1700-000000', email: 'dhaka@labenza.com' },
  { city: 'Export Office', address: 'Chittagong Export Zone, Chittagong, Bangladesh', phone: '+880 1800-000000', email: 'export@labenza.com' },
];

const faqs = [
  { q: 'What is the minimum order quantity?', a: 'Our standard MOQ is 500 sq. ft. per SKU. Bulk orders above 5,000 sq. ft. receive preferential pricing.' },
  { q: 'Do you provide samples?', a: 'Yes, we offer sample swatches for all product lines. Contact our sales team and samples will be dispatched within 5 business days.' },
  { q: 'What certifications do you hold?', a: 'We hold ISO 9001 quality management, ISO 14001 environmental, and REACH compliance certifications across all production lines.' },
  { q: 'What are your lead times?', a: 'Standard lead time is 3–4 weeks for stock items and 6–8 weeks for custom specifications.' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', product: '', message: '' });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputCls = "w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-[#B05A28] focus:ring-1 focus:ring-[#B05A28] rounded-lg transition-all duration-200";

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 lg:px-10 overflow-hidden" style={{ background: 'linear-gradient(135deg,#0D0B09 0%,#2d1a0a 60%,#1a0e07 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #B05A28 0%, transparent 60%)' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.span variants={fadeUp} initial="hidden" animate="visible" custom={0} className="inline-block text-xs tracking-[0.3em] text-[#B05A28] uppercase font-semibold mb-4">
            We'd Love to Hear from You
          </motion.span>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1} className="text-5xl md:text-7xl font-bold text-white mb-5" style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}>
            Get in<br /><span className="text-[#B05A28]">Touch</span>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2} className="text-gray-300 text-lg max-w-xl leading-relaxed">
            Whether you need a custom quote, product samples, or want to discuss a partnership — our team is ready to help.
          </motion.p>
        </div>
      </section>

      {/* Stat bar */}
      <section className="bg-[#B05A28]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
          {[
            { value: '25+', label: 'Years Experience' },
            { value: '60+', label: 'Countries Served' },
            { value: '500+', label: 'Sq ft Monthly (K)' },
            { value: '24+', label: 'Hour Response Time' },
          ].map((s, i) => (
            <StatItem key={i} value={s.value} label={s.label} delay={i} />
          ))}
        </div>
      </section>

      {/* Main contact section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-5 gap-14">
        {/* Left: offices + info */}
        <div className="lg:col-span-2 space-y-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>Our Offices</h2>
            <div className="space-y-6">
              {offices.map((o, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                  className="p-6 border border-gray-100 rounded-xl hover:border-[#B05A28]/30 hover:shadow-md transition-all duration-300"
                >
                  <span className="text-xs font-bold tracking-widest uppercase text-[#B05A28] mb-3 block">{o.city}</span>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{o.address}</p>
                  <div className="space-y-2">
                    <a href={`tel:${o.phone}`} className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#B05A28] transition-colors">
                      <svg className="w-4 h-4 text-[#B05A28]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      {o.phone}
                    </a>
                    <a href={`mailto:${o.email}`} className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#B05A28] transition-colors">
                      <svg className="w-4 h-4 text-[#B05A28]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      {o.email}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map embed placeholder */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-xl overflow-hidden border border-gray-100 h-52">
            <iframe
              title="Labenza Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.0!2d90.3638!3d23.7201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQzJzEyLjMiTiA5MMKwMjEnNTAuMSJF!5e0!3m2!1sen!2sbd!4v1234567890"
              width="100%" height="100%" style={{ border: 0, filter: 'grayscale(0.3)' }}
              allowFullScreen loading="lazy"
            />
          </motion.div>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-3">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>Send an Inquiry</h2>
            <p className="text-gray-500 text-sm mb-8">Fill in the form and our team will get back to you within 24 hours.</p>

            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20 px-10 bg-green-50 border border-green-100 rounded-2xl">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                <p className="text-gray-500 text-sm">Thank you for reaching out. We'll respond within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="John Smith" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Company</label>
                    <input name="company" value={form.company} onChange={handleChange} placeholder="Your Company Ltd." className={inputCls} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="john@company.com" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 234 567 8900" className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Product of Interest</label>
                  <select name="product" value={form.product} onChange={handleChange} className={inputCls}>
                    <option value="">Select a product...</option>
                    <option>Wet Blue Splits</option>
                    <option>Cow Crust Leather</option>
                    <option>Goat Crust Leather</option>
                    <option>Finish Leather</option>
                    <option>Custom / Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us about your requirements, quantity, specifications..." className={inputCls + ' resize-none'} />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  className="w-full py-4 text-sm font-bold tracking-widest uppercase text-white rounded-lg transition-opacity hover:opacity-90"
                  style={{ background: '#B05A28' }}
                >
                  Send Inquiry →
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] text-[#B05A28] uppercase font-semibold mb-3">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Frequently Asked</h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left text-sm font-semibold text-gray-900 hover:text-[#B05A28] transition-colors"
                >
                  {faq.q}
                  <motion.svg animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }} className="w-4 h-4 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
