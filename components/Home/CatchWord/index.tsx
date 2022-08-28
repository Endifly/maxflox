import LandingLayout from "layouts/LandingLayout";
import gulf from "public/gulf.png";

const TITLE =
  "Iflowtech is a Deeptech startup for cleantech and greentech development.";

const DESC =
  "We spin off since 2021 from Future Innovation & Research in Science and Technology (FIRST), Chulalongkorn University is established in 2018 to be a research unit in science, engineering, technology to create innovation for sustainable future.";

const CatchWord = () => {
  return (
    <LandingLayout useNextArrow className="bg-white">
      <div className="flex flex-col max-w-screen-lg w-full relative px-4">
        <div
          className="absolute top-[20%] right-0 w-[45%]"
          style={{ zIndex: 1 }}
        >
          <img src={gulf.src} style={{ zIndex: 1 }} />
        </div>
        <div className="py-8" />

        <div className="max-w-screen-sm text-hero">
          <div className="inline">
            <p className="inline font-bold text-body-2 semi-bold">{TITLE}</p>
            <p className="inline text-body-2">{DESC}</p>
          </div>
        </div>

        <div className="flex-1" />

        <div className="max-w-screen-sm text-hero">
          <div className="inline">
            <p className="inline font-bold text-body-2 semi-bold">
              The Magnetic generator device, gone through the enginerring design
              process,
            </p>
            <p className="inline text-body-2">
              was used to magnetize both the tap water and its nutrient solution
              and tested for its influence on the quantity and quality of the
              plant. After the irrigation of plant seeds by magnetized water,
              both the percentage and rate of germination
            </p>
            <p className="inline font-bold text-body-2 semi-bold">
              increased. The germination of seeds,
            </p>
            <p className="inline text-body-2">
              {" "}
              continuously grown in the nutrient solution magnetized by the
              magnetic device, indicated that this system could
            </p>
            <p className="inline font-bold text-body-2 semi-bold">
              increase water content, fresh weight, dry weight, as well as plant
              height.
            </p>
          </div>
        </div>

        <div className="py-8" />
      </div>
    </LandingLayout>
  );
};

export default CatchWord;
