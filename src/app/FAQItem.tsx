import { useState } from "react";

export default function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-3">
      <button
        className="w-full flex justify-between items-center text-left font-semibold text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={`faq-panel-${q.replace(/\s+/g, "-")}`}
      >
        <span>Q: {q}</span>
        <svg
          className={`w-5 h-5 ml-2 transform transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id={`faq-panel-${q.replace(/\s+/g, "-")}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
        aria-hidden={!open}
      >
        <div className="text-blue-300 text-base leading-relaxed">A: {a}</div>
      </div>
    </div>
  );
}
