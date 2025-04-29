import Image from "next/image";

interface BrandMarqueeProps {
  logos: string[];
}

export default function BrandMarquee({ logos }: BrandMarqueeProps) {
  // Repeat the logos enough times to ensure seamless looping
  const marqueeLogos = [...logos, ...logos, ...logos]; // 3x for seamlessness
  return (
    <div className="relative w-full overflow-hidden sm:hidden" style={{ height: 48 }}>
      <div className="marquee-track flex gap-8 items-center opacity-80 whitespace-nowrap" style={{ animationDuration: '30s', height: 48 }}>
        {marqueeLogos.map((logo, i) => (
          <div key={i} className="inline-block min-w-[100px] min-h-[40px] flex-shrink-0">
            <Image src={logo} alt="Client logo" width={100} height={40} className="object-contain grayscale hover:grayscale-0 transition" />
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes marquee-track {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .marquee-track {
          animation: marquee-track linear infinite;
        }
      `}</style>
    </div>
  );
}
