import Image from "next/image";
import React from "react";

interface Props {
  imgSrc: string;
  position: string;
  name: string;
  experiences: Array<string>;
  side?: "left" | "right";
}

const FounderBox: React.FC<Props> = ({
  experiences,
  imgSrc,
  name,
  position,
  side = "left",
}) => {
  return (
    <div
      className="grid gap-x-4 grid-cols-[128px_1fr] w-full items-center"
      style={{
        direction: side === "left" ? "ltr" : "rtl",
      }}
    >
      <img src={imgSrc} alt={name} />
      <div>
        <p className="semi-bold text-hero">{position}</p>
        <p className="semi-bold text-hero">{name}</p>
        {experiences.map((ex, i) => (
          <p key={i} className="light text-hero">
            {ex}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FounderBox;
