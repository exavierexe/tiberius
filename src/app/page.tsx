"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const clientLogos = [
  "/logo1.svg",
  "/logo2.svg",
  "/logo3.svg",
  "/logo4.svg",
  "/logo5.svg",
];

const caseStudies = [
  {
    title: "E-Commerce Growth",
    result: "+400% ROAS in 3 months",
    description: "Scaled a local retailer with Google Ads & CRO.",
    image: "/case0.jpg",
  },
  {
    title: "SaaS Lead Gen",
    result: "Tripled qualified leads",
    description: "Full-funnel strategy for a NZ SaaS company.",
    image: "/case2.jpg",
  },
  {
    title: "Brand Awareness",
    result: "+200% new customers",
    description: "Creative social campaigns for a hospitality group.",
    image: "/case3.jpg",
  },
];

const blogPosts = [
  {
    title: "How to Scale Google Ads in 2025",
    excerpt: "Our expert tips for NZ brands looking to grow with paid search.",
    image: "/blog1.jpg",
    link: "#",
  },
  {
    title: "Social Media Trends in Auckland",
    excerpt: "What’s working now for local businesses on Instagram & Facebook.",
    image: "/blog2.jpg",
    link: "#",
  },
];

const faqs = [
  {
    q: "How quickly can I see results?",
    a: "Most clients see positive ROI within the first 30-60 days, depending on campaign type and goals.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Absolutely! We tailor strategies for both startups and established brands across New Zealand.",
  },
  {
    q: "What platforms do you specialize in?",
    a: "Google Ads, YouTube, Facebook, Instagram, LinkedIn, and more.",
  },
  {
    q: "Is there a minimum contract?",
    a: "We offer flexible month-to-month engagements to suit your needs.",
  },
];

const socials = [
  { href: "https://www.linkedin.com/", icon: "/linkedin.svg", label: "LinkedIn" },
  { href: "https://www.instagram.com/", icon: "/instagram.svg", label: "Instagram" },
  { href: "https://twitter.com/", icon: "/twitter.svg", label: "Twitter" },
];

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#070e25] text-blue-100 flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-30 bg-[#101a3c]/90 backdrop-blur shadow-sm w-full animate-fade-in-down">
        <div className="flex items-center justify-between max-w-6xl mx-auto px-2 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/transparentlogo.PNG" alt="Tiberius Logo" width={40} height={40} className="h-10 w-10 object-contain" />
            <span className="font-bold text-lg text-blue-100 hidden sm:inline">Tiberius</span>
          </Link>
          <button className="sm:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" aria-label="Toggle navigation" onClick={() => setNavOpen((o) => !o)}>
            <svg className="w-7 h-7 text-blue-100" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="hidden sm:flex gap-8 items-center">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#case-studies" className="hover:text-blue-600 transition">Case Studies</a>
            <a href="/portfolio" className="hover:text-blue-600 transition">Portfolio</a>
            <a href="#testimonials" className="hover:text-blue-600 transition">Testimonials</a>
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#blog" className="hover:text-blue-600 transition">Blog</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
        {/* Mobile Nav Dropdown */}
        {navOpen && (
          <div className="sm:hidden bg-[#101a3c] px-4 pb-4 animate-fade-in-down">
            <a href="#services" className="block py-2 text-blue-100 hover:text-blue-600">Services</a>
            <a href="#case-studies" className="block py-2 text-blue-100 hover:text-blue-600">Case Studies</a>
            <a href="/portfolio" className="block py-2 text-blue-100 hover:text-blue-600">Portfolio</a>
            <a href="#testimonials" className="block py-2 text-blue-100 hover:text-blue-600">Testimonials</a>
            <a href="#about" className="block py-2 text-blue-100 hover:text-blue-600">About</a>
            <a href="#blog" className="block py-2 text-blue-100 hover:text-blue-600">Blog</a>
            <a href="#contact" className="block py-2 text-blue-100 hover:text-blue-600">Contact</a>
          </div>
        )}
      </nav>
      

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-24 px-4 text-center bg-gradient-to-br from-[#101a3c] to-[#16224a] animate-fade-in">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-blue-100 drop-shadow-lg">Tiberius Digital Marketing</h1>
        <h2 className="text-xl sm:text-2xl font-medium text-blue-200 mb-6">Auckland’s Premier Growth Agency for Ambitious Brands</h2>
        <p className="max-w-xl mx-auto mb-8 text-blue-200">Unlock your brand’s full potential with Tiberius – the digital marketing partner trusted by New Zealand’s fastest-growing businesses. We deliver data-driven campaigns, creative strategies, and measurable results.</p>
        <a href="#contact" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-800 transition">Book a Free Strategy Call</a>
      </section>

      {/* Brands We’ve Helped */}
      <section className="py-8 px-4 bg-[#101a3c] animate-fade-in-up" id="brands">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <span className="uppercase text-xs text-blue-300 tracking-widest mb-2">Brands We’ve Helped</span>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-80">
            {clientLogos.map((logo, i) => (
              <Image key={i} src={logo} alt="Client logo" width={100} height={40} className="object-contain grayscale hover:grayscale-0 transition" />
            ))}
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-20 px-4 bg-[#101a3c]" id="services">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 text-blue-100">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#16224a] p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-xl mb-2 text-blue-200">Google & YouTube Ads</h4>
              <p className="text-blue-300">Expert campaign management, optimization, and scaling for maximum ROI. We make every dollar count.</p>
            </div>
            <div className="bg-[#16224a] p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-xl mb-2 text-blue-200">Social Media Marketing</h4>
              <p className="text-blue-300">Grow your brand with creative, targeted campaigns on Facebook, Instagram, LinkedIn, and more.</p>
            </div>
            <div className="bg-[#16224a] p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-xl mb-2 text-blue-200">Conversion Rate Optimization</h4>
              <p className="text-blue-300">Turn more visitors into customers with data-driven landing pages and funnel strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 bg-[#070e25] animate-fade-in-up" id="case-studies">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 text-blue-100">Case Studies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((cs, i) => (
              <div key={i} className="bg-[#101a3c] rounded-xl shadow hover:shadow-lg transition flex flex-col items-center p-6">
                <Image src={cs.image} alt={cs.title} width={240} height={140} className="rounded mb-4 object-cover" />
                <h4 className="font-semibold text-lg mb-2 text-blue-200">{cs.title}</h4>
                <span className="text-blue-300 font-bold mb-1">{cs.result}</span>
                <p className="text-blue-300 text-sm">{cs.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-[#070e25] animate-fade-in-up" id="faq">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 text-blue-100">Frequently Asked Questions</h3>
          <div className="divide-y divide-blue-100">
            {faqs.map((faq, i) => (
              <div key={i} className="py-4">
                <div className="font-semibold text-blue-200 mb-1">Q: {faq.q}</div>
                <div className="text-blue-300">A: {faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 px-4 bg-[#070e25] animate-fade-in-up" id="newsletter">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-blue-100">Subscribe to Our Newsletter</h3>
          <p className="mb-6 text-blue-300">Get the latest marketing tips, case studies, and news from Tiberius – straight to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input type="email" placeholder="Your Email" className="px-4 py-3 rounded w-full max-w-xs bg-[#101a3c] text-blue-100 placeholder:text-blue-300 border border-blue-800" required />
            <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-800 transition">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 px-4 bg-[#070e25] animate-fade-in-up" id="blog">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 text-blue-100">From Our Blog</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <a key={i} href={post.link} className="bg-[#101a3c] rounded-xl shadow hover:shadow-lg transition flex flex-col items-center p-6 group">
                <Image src={post.image} alt={post.title} width={320} height={160} className="rounded mb-4 object-cover group-hover:scale-105 transition-transform" />
                <h4 className="font-semibold text-lg mb-2 text-blue-200 group-hover:text-blue-100 transition">{post.title}</h4>
                <p className="text-blue-300 text-sm">{post.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-[#070e25]" id="testimonials">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 text-blue-100">What Our Clients Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="bg-[#1b294f] rounded-xl shadow p-6 text-blue-200">
              <p className="mb-2">“Tiberius helped us scale our e-commerce brand in months. Their Google Ads expertise is unmatched!”</p>
              <footer className="text-blue-300 font-semibold">– Sarah, Auckland Retailer</footer>
            </blockquote>
            <blockquote className="bg-[#1b294f] rounded-xl shadow p-6 text-blue-200">
              <p className="mb-2">“The Tiberius team delivers results and communicates every step. We saw a 5x ROAS within weeks.”</p>
              <footer className="text-blue-300 font-semibold">– James, NZ SaaS Founder</footer>
            </blockquote>
            <blockquote className="bg-[#1b294f] rounded-xl shadow p-6 text-blue-200">
              <p className="mb-2">“Our brand awareness in Auckland exploded thanks to Tiberius’ creative campaigns.”</p>
              <footer className="text-blue-300 font-semibold">– Priya, Local Business Owner</footer>
            </blockquote>
            <blockquote className="bg-[#1b294f] rounded-xl shadow p-6 text-blue-200">
              <p className="mb-2">“Professional, proactive, and always on point. Highly recommended for NZ businesses.”</p>
              <footer className="text-blue-300 font-semibold">– Matt, E-commerce Director</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-[#0a1126]" id="about">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-4 text-blue-100">Who We Are</h3>
            <p className="text-blue-200 mb-4">Tiberius is a results-driven digital marketing agency based in Auckland, New Zealand. Our team brings years of experience across e-commerce, SaaS, and local business growth. We don’t believe in cookie-cutter solutions – every strategy is tailored to your brand’s unique goals.</p>
            <ul className="list-disc pl-6 text-blue-200 mb-4">
              <li>100+ brands scaled across NZ & globally</li>
              <li>Data-driven, creative, and transparent</li>
              <li>Proactive communication & reporting</li>
              <li>Local Auckland experts, global reach</li>
            </ul>
            <p className="text-blue-200">Ready to grow? Let’s talk!</p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/auckland-skyline.jpg" alt="Auckland Skyline" width={400} height={300} className="rounded-xl shadow-lg object-cover" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-blue-900 text-white" id="contact">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
          <p className="mb-8">Let’s discuss how Tiberius can help your business grow. Fill out the form below and our team will be in touch within 24 hours.</p>
          <form className="flex flex-col gap-4 items-center">
            <input type="text" placeholder="Your Name" className="w-full max-w-md px-4 py-3 rounded bg-white text-gray-900" required />
            <input type="email" placeholder="Your Email" className="w-full max-w-md px-4 py-3 rounded bg-white text-gray-900" required />
            <textarea placeholder="How can we help you?" className="w-full max-w-md px-4 py-3 rounded bg-white text-gray-900" rows={4} required />
            <button type="submit" className="mt-4 px-8 py-3 bg-sky-400 text-blue-900 font-semibold rounded-full hover:bg-sky-300 transition">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-blue-950 text-blue-100 text-center text-sm">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-2">
          <span>© {new Date().getFullYear()} Tiberius Digital Marketing, Auckland NZ</span>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
        <div className="flex justify-center gap-4 mt-2">
          {socials.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="inline-block hover:scale-110 transition-transform">
              <Image src={s.icon} alt={s.label} width={28} height={28} />
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
