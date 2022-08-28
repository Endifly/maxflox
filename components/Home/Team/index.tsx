import FounderBox from "./FounderBox";

import kongpop from "public/founder_kongpop.png";
import krit from "public/founder_krit.png";
import chanida from "public/founder_chanida.png";
import pariwat from "public/founder_pariwat.png";

import chuchai from "public/member_chuchai.png";
import jeff from "public/member_jeff.png";
import wanpasuk from "public/member_wanpasuk.png";
import tanakorn from "public/member_tanakorn.png";
import MemberBox from "./MemberBox";
import Title from "components/Title";

import bgHero from "public/bg-hero.png";
import Image from "next/image";

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="py-8" />

      <div className="flex flex-col justify-center items-center max-w-screen-md">
        <p className="text-center text-hero text-6xl semi-bold">
          Our founding team
        </p>
        <div className="py-2" />
        <p className="text-body-2 text-hero max-w-xs text-center">
          looking for collaboration with leading researchers.
        </p>
      </div>

      <div className="py-4" />

      <div className="max-w-screen-md w-full">
        <FounderBox
          imgSrc={kongpop.src}
          name="PH.D. Kongpop U-Yen"
          position="President"
          side="left"
          experiences={[
            "PH.D. Degree in Electrical",
            "Enginerring from Georgia Institute of Technology, USA",
            "Formal senior enginerr, NASA. USA",
          ]}
        />

        <div className="py-2" />

        <FounderBox
          imgSrc={krit.src}
          name="Krit Sangvichien"
          position="CEO"
          side="right"
          experiences={[
            "MA in R&D industrial design, IED, Italy",
            "Formal chairperson of product design department, Bangkok university",
            "+18 years in serial tech entrepreneur",
          ]}
        />

        <div className="py-2" />

        <FounderBox
          imgSrc={chanida.src}
          name="Chanida Pengpol"
          position="CMO"
          side="left"
          experiences={[
            "MA in MBA",
            "+30 years in Brand management online marketing in UK and APEC.",
          ]}
        />

        <div className="py-2" />

        <FounderBox
          imgSrc={pariwat.src}
          name="Pariwat Siripitchayapat"
          position="COO"
          side="right"
          experiences={[
            "BA in Science, Chulalongkorn university",
            "+8 years experience in financial consultant.",
          ]}
        />
      </div>

      <div className="py-12" />

      <div className="inline text-hero">
        <p className="inline bold text-5xl">Our team member</p>
        <p className="inline text-2xl"> who work with us</p>
      </div>

      <div className="py-4" />

      <div className="max-w-screen-sm w-full grid grid-cols-2">
        <MemberBox
          imgSrc={chuchai.src}
          name="Ph.D. Chuchai .S"
          position="CTO"
        />
        <MemberBox imgSrc={jeff.src} name="Jeff Hamilton" position="CPO" />
        <MemberBox
          imgSrc={wanpasuk.src}
          name="Wanpasuk .S"
          position="Environment Engineer"
        />
        <MemberBox
          imgSrc={tanakorn.src}
          name="Tanakorn .T"
          position="Full Stack Dev"
        />
      </div>

      <div className="py-40" />

      <Title />

      <div>F</div>

      <div className="pb-8" />

      <div
        className="absolute bottom-0 w-full"
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
        className="absolute bottom-0 w-full"
        style={{
          height: bgHero.height,
          zIndex: -2,
          background: "linear-gradient(white, #e5e5e6)",
        }}
      />
    </div>
  );
};

export default Team;
