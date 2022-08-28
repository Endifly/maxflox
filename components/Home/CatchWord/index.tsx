import LandingLayout from "layouts/LandingLayout";

const TITLE =
  "Iflowtech is a Deeptech startup for cleantech and greentech development.";

const DESC =
  "We spin off since 2021 from Future Innovation & Research in Science and Technology (FIRST), Chulalongkorn University is established in 2018 to be a research unit in science, engineering, technology to create innovation for sustainable future.";

const CatchWord = () => {
  return (
    <LandingLayout
      className="bg-red-200"
      maxWidth="max-w-screen-xl"
      useNextArrow
    >
      <div className="max-w-screen-sm">
        <div className="inline">
          <p className="inline font-bold">{TITLE}</p>
          <p className="inline">{DESC}</p>
        </div>
      </div>
    </LandingLayout>
  );
};

export default CatchWord;
