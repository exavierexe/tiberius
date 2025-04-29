"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaMagnet, FaShoppingCart, FaBullhorn } from "react-icons/fa";

const clientLogos = [
  "/partnerlogos/aklroof.PNG",
  "/partnerlogos/casa.PNG",
  "/partnerlogos/climber.PNG",
  "/partnerlogos/greasemonkey.PNG",
  "/partnerlogos/remax.PNG",
  "/partnerlogos/solid.PNG",
  "/partnerlogos/surface.PNG",
];

const caseStudies = [
  {
    title: "E-Commerce Growth",
    result: "+400% ROAS in 3 months",
    description: "Scaled a local retailer with Google Ads & CRO.",
    icon: (
      <FaShoppingCart className="w-12 h-12 text-blue-400 mb-4" />
    ),
  },
  {
    title: "SaaS Lead Gen",
    result: "Tripled qualified leads",
    description: "Full-funnel strategy for a NZ SaaS company.",
    icon: (
      <FaMagnet className="w-12 h-12 text-blue-400 mb-4" />
    ),
  },
  {
    title: "Brand Awareness",
    result: "+200% new customers",
    description: "Creative social campaigns for a hospitality group.",
    icon: (
      <FaBullhorn className="w-12 h-12 text-blue-400 mb-4" />
    ),
  },
];

const blogPosts = [
  {
    title: "How to Scale Google Ads in 2025",
    excerpt: "Our expert tips for NZ brands looking to grow with paid search.",
    image: "/images/barscreen.JPG",
    link: "#",
  },
  {
    title: "Social Media Trends in Auckland",
    excerpt: "What’s working now for local businesses on Instagram & Facebook.",
    image: "/images/cellphone.JPG",
    link: "#",
  },
];

const faqs = [
  {
    q: "How quickly can I see results?",
    a: "Most clients see positive ROI within the first 30-60 days, depending on campaign type and goals. We focus on quick wins as well as long-term growth, so you’ll see improvements as soon as campaigns are live, with compounding results over time.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Absolutely! We tailor strategies for both startups and established brands across New Zealand. Every business gets a bespoke approach, no matter the size or budget.",
  },
  {
    q: "What platforms do you specialize in?",
    a: "Google Ads, YouTube, Facebook, Instagram, LinkedIn, and more. We select the best mix of platforms for your goals and audience.",
  },
  {
    q: "Is there a minimum contract?",
    a: "We offer flexible month-to-month engagements to suit your needs. No lock-in contracts – stay because you love the results!",
  },
  {
    q: "Can you capture drone footage for my business?",
    a: "Yes, we offer high-definition drone footage as part of our creative services. Our team is experienced in aerial videography and can provide stunning visuals to showcase your business, property, or event from unique perspectives. This content is perfect for websites, social media, and ad campaigns.",
  },
  {
    q: "Why wouldn't I just do my marketing in-house?",
    a: "While in-house marketing can work for some, partnering with Tiberius gives you access to a team of experts with deep experience across all digital channels. We stay on top of the latest trends and technologies, implement strategies much faster, and provide full-stack solutions. Not only do we set up and manage your ad campaigns, but we also optimize your website to receive and convert traffic. This holistic approach maximizes your ROI and saves you time and resources.",
  },
  {
    q: "What makes Tiberius unique?",
    a: "We implement things faster and offer full-stack solutions. Unlike many agencies, we don’t just run ads – we ensure your website, landing pages, and analytics are fully optimized to convert visitors into customers. Our team combines creative, technical, and strategic expertise, delivering measurable results with speed and transparency.",
  },
  {
    q: "Do you offer SEO along with Google Ads?",
    a: "Yes, we provide comprehensive SEO services in addition to Google Ads management. Our approach ensures you get both immediate traffic from paid campaigns and sustainable, long-term growth from organic search. We optimize your site structure, content, and technical SEO to help you dominate search rankings while maximizing your paid ad performance.",
  },
];

import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
  { href: "https://www.linkedin.com/", icon: <FaLinkedin size={28} />, label: "LinkedIn" },
  { href: "https://www.instagram.com/", icon: <FaInstagram size={28} />, label: "Instagram" },
  { href: "https://twitter.com/", icon: <FaTwitter size={28} />, label: "Twitter" },
];

import FAQItem from "./FAQItem";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  // Newsletter signup state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState<string|null>(null);
  const [newsletterError, setNewsletterError] = useState<string|null>(null);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string|null>(null);
  const [phone, setPhone] = useState("");
  return (
    <div className="min-h-screen bg-[#070e25] text-blue-100 flex flex-col font-[family-name:var(--font-geist-sans)]">
      {/* Sticky Navbar */}
      <nav className={`sticky top-0 z-30 bg-[#101a3c]/90 backdrop-blur shadow-sm w-full animate-fade-in-down transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex items-center justify-between max-w-6xl mx-auto px-2 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/silverlogo.PNG" alt="Tiberius Logo" width={41} height={41} className="h-[41px] w-[41px] object-contain" />
            <span className="text-blue-100 font-cinzel font-extrabold text-3xl tracking-wide uppercase ml-2" style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.1em' }}>TIBERIUS</span>
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
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-blue-100 drop-shadow-lg">Start Scaling Your Revenue & Profits With Proven Digital Marketing Strategies</h1>
        <h2 className="text-xl sm:text-2xl font-medium text-blue-200 mb-6">We Deliver Data-driven Campaigns and Measurable Results</h2>
        <p className="max-w-xl mx-auto mb-8 text-blue-200">Are you struggling with low conversion rates or wasted ad spend? Unlock your brand’s full potential with the digital marketing partner trusted by New Zealand’s fastest-growing businesses. Our data-driven strategies and creative firepower deliver up to 10x ROI in 90 days.</p>
        <a href="#contact" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-800 transition">Book a Free Strategy Call</a>
      </section>

      {/* Brands We’ve Helped */}
      <section className="py-8 px-4 bg-[#101a3c] animate-fade-in-up" id="brands">
  <div className="max-w-5xl mx-auto flex flex-col items-center">
    <span className="uppercase text-xs text-blue-300 tracking-widest mb-2">Brands We’ve Helped</span>
    <div className="flex flex-wrap justify-center gap-8 items-center opacity-80 w-full">
      {clientLogos.map((logo, i) => (
        <div key={i} className="inline-block min-w-[100px] min-h-[40px] flex-shrink-0">
          <Image src={logo} alt="Client logo" width={100} height={40} className="object-contain grayscale hover:grayscale-0 transition" />
        </div>
      ))}
    </div>
  </div>
</section>

<style jsx global>{`
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    animation: marquee linear infinite;
  }
`}</style>

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
                {cs.icon}
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
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 px-4 bg-[#070e25] animate-fade-in-up" id="newsletter">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-blue-100">Subscribe to Our Newsletter</h3>
          <p className="mb-6 text-blue-300">Get the latest marketing tips, case studies, and news from Tiberius – straight to your inbox.</p>
          <form
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            onSubmit={async (e) => {
              e.preventDefault();
              setNewsletterError(null);
              setNewsletterSuccess(null);
              setNewsletterSubmitting(true);
              try {
                const res = await fetch("/api/email-signup", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email: newsletterEmail }),
                });
                if (!res.ok) {
                  const data = await res.json();
                  throw new Error(data.error || "Signup failed");
                }
                setNewsletterSuccess("Thank you for subscribing!");
                setNewsletterEmail("");
              } catch (err: unknown) {
                let errorMsg = "Signup failed";
                if (err && typeof err === "object" && "message" in err && typeof (err as { message: unknown }).message === "string") {
                  errorMsg = (err as { message: string }).message;
                }
                setNewsletterError(errorMsg);
              } finally {
                setNewsletterSubmitting(false);
              }
            }}
          >
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded w-full max-w-xs bg-[#101a3c] text-blue-100 placeholder:text-blue-300 border border-blue-800"
              required
              value={newsletterEmail}
              onChange={e => setNewsletterEmail(e.target.value)}
              disabled={newsletterSubmitting}
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-800 transition"
              disabled={newsletterSubmitting}
            >
              {newsletterSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
            {newsletterSuccess && <div className="text-green-400 mt-2 w-full">{newsletterSuccess}</div>}
            {newsletterError && <div className="text-red-400 mt-2 w-full">{newsletterError}</div>}
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
          <div className="w-full max-w-xl aspect-video">
  <iframe
    title="vimeo-player"
    src="https://player.vimeo.com/video/1079069674?h=2fbc69a724"
    className="w-full h-full rounded-lg shadow-lg"
    frameBorder="0"
    allowFullScreen
  ></iframe>
</div>
         </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-blue-900 text-white" id="contact">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
          <p className="mb-8">Let’s discuss how Tiberius can help your business grow. Fill out the form below and our team will be in touch within 24 hours.</p>
            <form
              className="flex flex-col gap-4 items-center"
              onSubmit={async (e) => {
                e.preventDefault();
                setSubmitting(true);
                setError(null);
                setSuccess(false);
                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, phone, message }),
                  });
                  if (!res.ok) {
                    const data = await res.json();
                    throw new Error(data.error || "Submission failed");
                  }
                  setSuccess(true);
                  setName("");
                  setEmail("");
                  setPhone("");
                  setMessage("");
                } catch (err: unknown) {
                  let errorMsg = "Submission failed";
                  function isErrorWithMessage(e: unknown): e is { message: string } {
                    return (
                      typeof e === "object" &&
                      e !== null &&
                      "message" in e &&
                      typeof (e as { message: unknown }).message === "string"
                    );
                  }
                  if (isErrorWithMessage(err)) {
                    errorMsg = err.message;
                  }
                  setError(errorMsg);
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full max-w-md px-4 py-3 rounded bg-white text-gray-900"
                required
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full max-w-md px-4 py-3 rounded bg-white text-gray-900"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full max-w-md px-4 py-3 rounded bg-white text-gray-900"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
              <textarea
                placeholder="How can we help you?"
                className="w-full max-w-md px-4 py-3 rounded bg-white text-gray-900"
                rows={4}
                required
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
              <button
                type="submit"
                className="mt-4 px-8 py-3 bg-sky-400 text-blue-900 font-semibold rounded-full hover:bg-sky-300 transition"
                disabled={submitting}
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
              {success && (
                <div className="text-green-400 mt-2">Thank you! Your message has been sent.</div>
              )}
              {error && (
                <div className="text-red-400 mt-2">{error}</div>
              )}
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
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="inline-block hover:scale-110 transition-transform text-blue-100 hover:text-blue-400">
              {s.icon}
            </a>
          ))} 
        </div>
      </footer>
    </div>
  );
}
