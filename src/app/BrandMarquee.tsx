import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface BrandMarqueeProps {
  logos: string[];
}

export default function BrandMarquee({ logos }: BrandMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  // Duplicate the logos once for seamless loop
  const marqueeLogos = [...logos, ...logos];

  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.scrollWidth / 2); // width of one full logo set
    }
  }, [logos]);

  return (
    <div className="relative w-full overflow-hidden sm:hidden" style={{ height: 48 }}>
      <div
        className="marquee-track flex gap-8 items-center opacity-80 whitespace-nowrap"
        ref={trackRef}
        style={{
          animation: trackWidth
            ? `marquee-px ${Math.max(trackWidth / 60, 8)}s linear infinite` // 60px/sec or at least 8s
            : undefined,
          height: 48,
        }}
      >
        {marqueeLogos.map((logo, i) => (
          <div key={i} className="inline-block min-w-[100px] min-h-[40px] flex-shrink-0">
            <Image src={logo} alt="Client logo" width={100} height={40} className="object-contain grayscale hover:grayscale-0 transition" />
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes marquee-px {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

