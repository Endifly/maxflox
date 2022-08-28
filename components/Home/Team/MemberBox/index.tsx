import Image from "next/image";
import React from "react";

interface Props {
  imgSrc: string;
  name: string;
  position: string;
}

const MemberBox: React.FC<Props> = ({ imgSrc, name, position }) => {
  return (
    <div className="text-hero flex justify-center">
      <div className="w-[128px]">
        <img src={imgSrc} alt={name} />
        <p className="text-right semi-bold mr-2">{position}</p>
        <p className="text-right semi-bold mr-2">{name}</p>
      </div>
    </div>
  );
};

export default MemberBox;
