import Title from "components/Title";
import LandingLayout from "layouts/LandingLayout";
import bg from "public/bg-hero.png";
import tube from "/public/tube.png";
import bgHero from "public/bg-hero.png";
import Image from "next/image";
import maxflow from "public/icon_maxflow.png";
import worldAgri from "public/world-agri.png";
import scienceDirect from "public/science-direct.png";

const Hero = () => {
  return (
    <LandingLayout maxWidth="max-w-screen-xl" useNextArrow className="relative">
      <div
        className="absolute top-0 w-full"
        style={{
          height: bgHero.height,
        }}
      >
        <Image
          src={bgHero.src}
          layout="fill"
          alt="whirpool"
          className="lg:blur"
          style={{ zIndex: -1 }}
        />
      </div>
      <div
        className="absolute top-0 w-full h-full"
        style={{
          zIndex: -2,
        }}
      >
        <div className="w-full h-full bg-hero" style={{ zIndex: -2 }} />
      </div>

      <div className="absolute left-16 top-8 flex flex-col items-center">
        <img src={maxflow.src} alt="maxflow" />
        <p className="text-body-2 bold text-white">maxflow</p>
      </div>

      <div
        className="flex justify-center max-w-screen-lg w-full relative"
        style={
          {
            // perspective: "300px",
            // transformStyle: "preserve-3d",
          }
        }
      >
        <img
          src={tube.src}
          className="absolute top-0 right-[15%] hidden md:block"
          alt="tube"
          style={{
            zIndex: 2,
            height: "120vh",
            marginTop: "35%",
            // transform: "translateZ(5px) scale(0.71)",
          }}
        />

        <div className="relative flex flex-col items-center h-full  w-full">
          <div className="py-24 lg:py-16" />
          <Title />

          <div className="py-12 lg:py-0" />

          <div
            className="md:absolute static bg-white left-6 lg:left-16 bottom-[10%] p-8 drop-shadow-md text-body-2 md:text-body-1"
            style={{
              borderRadius: 80,
            }}
          >
            <p className="semi-bold text-hero ">+ Soften hard water</p>
            <p className="semi-bold text-hero ">+ Speed up crops</p>
            <p className="semi-bold text-hero ">+ Break up calcium in water</p>
            <p className="semi-bold text-hero ">+ Improves water quality</p>
            <div className="flex items-center">
              <img src={scienceDirect.src} className="w-[128px]" />
              <div className="px-1" />
              <img src={worldAgri.src} className="w-[128px]" />
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Hero;
