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
        className="bg-white p-16 rounded-xl max-w-screen-sm w-full my-12"
        style={{
          borderRadius: 60,
        }}
      >
        <p className="text-6xl semi-bold">Maxflow Make Flow</p>

        <div className="py-4" />

        <p className="text-body-2">
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

        <div className="py-4" />
      </div>

      <div className="flex justify-center w-full max-w-screen-sm text-white">
        <img src={maxflow.src} alt="maxflow" className="w-[128px]" />
        <div className="px-4" />
        <div>
          <p
            className="text-title semi-bold m-0"
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

      <div className="absolute top-0 w-full h-[75%]">
        <Image
          src={bgHero.src}
          layout="fill"
          alt="whirpool"
          className="lg:blur"
          style={{ zIndex: -1 }}
        />
      </div>
      <div
        className="absolute top-0 w-full h-[75%] bg-hero"
        style={{
          zIndex: -2,
        }}
      />
      <div
        className="absolute bottom-0 w-full h-[50%]"
        style={{
          transform: "translateY(50%)",
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
          transform: "translateY(50%)",
          zIndex: -2,
          backgroundColor: "#2c8633",
        }}
      />
    </div>
  );
};

export default MaxFlowMakeFlow;
