import LandingLayout from "layouts/LandingLayout";
import bg from "public/bg-hero.png";

const Hero = () => {
  return (
    <LandingLayout
      maxWidth="max-w-screen-xl"
      useNextArrow
      className="bg-hero"
      // style={{
      //   background: `url(${bg.src})`,
      // }}
    >
      <div className="relative flex flex-col items-center h-full  w-full">
        <div className="absolute top-[10%]">
          <p className="bold text-white text-title text-center drop-shadow-md">
            MAGNETIZED
          </p>
          <p className="bold text-white text-title text-center drop-shadow-xl">
            VORTEX WATER
          </p>
          <p className="bold text-white text-center" style={{ fontSize: 32 }}>
            TO NET ZERO
          </p>
        </div>

        <div
          className="absolute bg-white left-0 bottom-[10%] p-8 drop-shadow-md"
          style={{
            borderRadius: 80,
          }}
        >
          <p className="semi-bold text-hero text-body-1">+ Soften hard water</p>
          <p className="semi-bold text-hero text-body-1">+ Speed up crops</p>
          <p className="semi-bold text-hero text-body-1">
            + Break up calcium in water
          </p>
          <p className="semi-bold text-hero text-body-1">
            + Improves water quality
          </p>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Hero;
