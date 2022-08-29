import tube from "public/tube.png";
import gulf from "public/gulf.png";

const Tube = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center relative md:hidden bg-white">
      <div className="absolute w-[75%]" style={{ zIndex: 0 }}>
        <img src={gulf.src} style={{ zIndex: 0 }} />
      </div>
      <div style={{ zIndex: 1 }}>
        <img src={tube.src} alt="tube" className="h-screen" />
      </div>
    </div>
  );
};

export default Tube;
