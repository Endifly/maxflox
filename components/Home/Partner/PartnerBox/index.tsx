import Image from "next/image";
import React from "react";

interface Props {
  img: string;
  name: string;
  desc: string;
}

const PartnerBox: React.FC<Props> = ({ desc, img, name }) => {
  return (
    <div className="grid gap-x-4 gap-y-2 w-full items-center lg:grid-cols-[156px_1fr] grid-rows-[1fr_1fr] mb-6 lg:mb-0">
      <div className="pr-4 lg:border-r-2 border-black flex justify-center">
        <img src={img} className="lg:w-full" alt={name} />
      </div>
      <div className="inline text-center lg:text-left">
        <p className="inline bold text-body-2">{name}</p>
        <p className="inline text-body-2">{` ${desc}`}</p>
      </div>
    </div>
  );
};

export default PartnerBox;
