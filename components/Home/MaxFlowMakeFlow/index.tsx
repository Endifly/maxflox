import DescBox from "./DescBox";

import clock from "public/clock.png";
import pig from "public/pig.png";
import cloud from "public/cloud.png";
import bgHero from "public/bg-hero.png";
import agri from "public/agri.png";
import Image from "next/image";
import Title from "components/Title";
import maxflow from "public/icon_maxflow.png";

const MaxFlowMakeFlow = () => {
  return (
    <div className="min-h-screen relative flex flex-col justify-center items-center text-hero">
      <div
        className="bg-white p-8 md:p-16 rounded-xl max-w-screen-sm w-full my-12"
        style={{
          borderRadius: 60,
        }}
      >
        <p className="text-4xl md:text-6xl semi-bold text-center md:text-left">
          Maxflow Make Flow
        </p>

        <div className="py-2" />

        <p className="text-body-2 text-center md:text-left">
          Our IPRs and science Directs Journals Prove that we are the one and
          only Dual Halbach Arrays Magnetize Vortex Water Innovation
        </p>

        <div className="py-4" />

        <div>
          <DescBox imgSrc={clock.src} title="+30%" desc="speedup crops." />

          <div className="py-4" />
          <DescBox
            imgSrc={pig.src}
            title="-30% Cost"
            desc="Watering, Fertilizer, Crop maintenance."
          />

          <div className="py-4" />
          <DescBox
            imgSrc={cloud.src}
            title="No energy consume"
            desc="needed. Cut-loss CO2 emission in agriculture."
          />
        </div>
      </div>

      <div className="flex justify-center items-center w-full max-w-screen-sm text-white">
        <img
          src={maxflow.src}
          alt="maxflow"
          className="w-[96px] md:w-[128px]"
        />
        <div className="px-4" />
        <div>
          <p
            className="text-4xl md:text-8xl semi-bold m-0"
            style={{
              letterSpacing: 1,
            }}
          >
            maxflow
          </p>
          <p className="light text-body-2 -mt-4">
            Magnetize Vortex Water for Agriculture
          </p>
        </div>
      </div>

      <div className="py-12" />

      <div className="absolute top-0 w-full h-[70%]">
        <Image
          src={bgHero.src}
          layout="fill"
          alt="whirpool"
          className="lg:blur"
          style={{ zIndex: -1 }}
        />
      </div>
      <div
        className="absolute top-0 w-full h-[70%] bg-hero"
        style={{
          zIndex: -2,
        }}
      />
      <div
        className="absolute bottom-0 w-full h-[50%]"
        style={{
          transform: "translateY(40%)",
          zIndex: -1,
        }}
      >
        <Image
          src={agri.src}
          layout="fill"
          alt="whirpool"
          className="lg:blur"
          style={{ zIndex: -1 }}
        />
      </div>
      <div
        className="absolute bottom-0 w-full h-[50%]"
        style={{
          transform: "translateY(40%)",
          zIndex: -2,
          backgroundColor: "#2c8633",
        }}
      />
    </div>
  );
};

export default MaxFlowMakeFlow;
