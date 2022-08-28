import PartnerBox from "./PartnerBox";
import grass from "/public/grass.png";
import Image from "next/image";

import chula from "public/partner_chula.png";
import first from "public/partner_first.png";
import diprom from "public/partner_diprom.png";
import nia from "public/partner_nia.png";
import nstda from "public/partner_nstda.png";

const Partner = () => {
  return (
    <div className="min-h-screen flex  items-center relative flex-col bg-[#f5f5f5]">
      <div
        className="absolute bottom-0 w-full"
        style={{
          height: grass.height / 3,
          zIndex: 1,
        }}
      >
        <Image src={grass.src} layout="fill" alt="grass" className="blur" />
      </div>

      <div className="py-8" />

      <p
        className="text-4xl semi-bold text-hero text-center md:text-6xl "
        style={{
          lineHeight: 1,
        }}
      >
        Our key partners
      </p>
      <div className="py-4" />
      <p className="text-body-2 text-hero">Our multi-stakeholder partnership</p>
      <p className="text-body-2 text-hero">for sustainable development tech</p>

      <div className="py-2" />

      <div className="max-w-screen-md w-full" style={{ zIndex: 2 }}>
        <PartnerBox
          desc="National Innovation Agency (Public Organization)"
          img={nia.src}
          name="NIA"
        />

        <PartnerBox
          desc="The First Science, Technology and Innovation hub of Thailand (Public Organization)"
          img={nstda.src}
          name="NSTDA"
        />

        <PartnerBox
          desc="Department of Industrial Promotion of Thailand"
          img={diprom.src}
          name="DIPROM"
        />

        <PartnerBox
          desc="Future Innovation & Research in Science and Technology (FIRST)"
          img={first.src}
          name="FIRST"
        />

        <PartnerBox
          desc="Chulalongkorn University, a leading university in Thailand"
          img={chula.src}
          name="CU"
        />
      </div>

      <div className="pb-40" />
    </div>
  );
};

export default Partner;
