"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "Brand X E-Commerce Growth",
    description: "Scaled Brand X's online revenue by 300% through targeted Google Ads and CRO.",
    image: "/portfolio1.jpg",
    tags: ["Google Ads", "CRO", "E-Commerce"],
    link: "#",
  },
  {
    title: "Local Retailer Social Launch",
    description: "Launched a viral social campaign for a local Auckland retailer, driving significant foot traffic and online engagement.",
    image: "/portfolio2.jpg",
    tags: ["Social Media", "Brand Awareness"],
    link: "#",
  },
  {
    title: "SaaS Lead Generation",
    description: "Tripled qualified leads for a SaaS client using multi-channel paid campaigns.",
    image: "/portfolio3.jpg",
    tags: ["Lead Gen", "SaaS", "Multi-Channel"],
    link: "#",
  },
  {
    title: "Auckland Restaurant Launch",
    description: "Full-funnel digital marketing for a new restaurant, resulting in sold-out opening weeks.",
    image: "/portfolio4.jpg",
    tags: ["Full Funnel", "Local", "Launch"],
    link: "#",
  },
  {
    title: "Apparel Brand Expansion",
    description: "Expanded an apparel brand into new markets with YouTube and Google Shopping campaigns.",
    image: "/portfolio5.jpg",
    tags: ["YouTube Ads", "Google Shopping"],
    link: "#",
  },
];

export default function Portfolio() {
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
            <Link href="/portfolio" className="hover:text-blue-600 transition">Portfolio</Link>
            <Link href="/#services" className="hover:text-blue-600 transition">Services</Link>
            <Link href="/#case-studies" className="hover:text-blue-600 transition">Case Studies</Link>
            <Link href="/#testimonials" className="hover:text-blue-600 transition">Testimonials</Link>
            <Link href="/#about" className="hover:text-blue-600 transition">About</Link>
            <Link href="/#blog" className="hover:text-blue-600 transition">Blog</Link>
            <Link href="/#contact" className="hover:text-blue-600 transition">Contact</Link>
          </div>
        </div>
        {/* Mobile Nav Dropdown */}
        {navOpen && (
          <div className="sm:hidden bg-[#101a3c] px-4 pb-4 animate-fade-in-down">
            <Link href="/portfolio" className="block py-2 text-blue-100 hover:text-blue-600">Portfolio</Link>
            <Link href="/#services" className="block py-2 text-blue-100 hover:text-blue-600">Services</Link>
            <Link href="/#case-studies" className="block py-2 text-blue-100 hover:text-blue-600">Case Studies</Link>
            <Link href="/#testimonials" className="block py-2 text-blue-100 hover:text-blue-600">Testimonials</Link>
            <Link href="/#about" className="block py-2 text-blue-100 hover:text-blue-600">About</Link>
            <Link href="/#blog" className="block py-2 text-blue-100 hover:text-blue-600">Blog</Link>
            <Link href="/#contact" className="block py-2 text-blue-100 hover:text-blue-600">Contact</Link>
          </div>
        )}
      </nav>
      <header className="w-full bg-[#101a3c] py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-100">Our Portfolio</h1>
        <p className="max-w-2xl mx-auto text-blue-300 text-lg">A selection of our recent digital marketing projects, campaigns, and client wins across Auckland and beyond.</p>
      </header>
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-[#101a3c] rounded-xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col">
              <a href={project.link} className="block mb-4 group">
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-3">
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h2 className="text-2xl font-bold text-blue-100 mb-1 group-hover:text-blue-200 transition">{project.title}</h2>
              </a>
              <p className="text-blue-300 mb-3 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-[#16224a] text-blue-200 rounded-full text-xs font-semibold">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
