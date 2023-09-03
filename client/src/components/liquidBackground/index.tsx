import "./index.css";
import { gsap } from "gsap";
import { useEffect } from "react";

const LiquidBackground: React.FC<{}> = (props) => {
  useEffect(() => {
    gsap.to("#turbwave", 8, {
      attr: { baseFrequency: 0.01 },
      repeat: -1,
      yoyo: true,
    });
  }, []);
  return (
    <>
      <svg className="hidden">
        <filter id="turb">
          <feTurbulence
            id="turbwave"
            type="fractalNoise"
            baseFrequency="0.03"
            numOctaves="2"
            result="turbulence_3"
            data-filterId="3"
          />
          <feDisplacementMap
            xChannelSelector="R"
            yChannelSelector="G"
            in="SourceGraphic"
            in2="turbulence_3"
            scale="40"
          />
        </filter>
      </svg>
      <div
        className="absolute left-1/2 top-6 sm:top-14 lg:top-22 -z-10 -translate-x-1/2  blur-xl"
        aria-hidden="true"
      >
        <div className="beat" style={{ filter: "url(#turb)" }}>
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-40"
            style={{
              clipPath: `polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default LiquidBackground;
