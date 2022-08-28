import React from "react";

interface Props {
  imgSrc: string;
  title: string;
  desc: string;
}
const DescBox: React.FC<Props> = ({ desc, imgSrc, title }) => {
  return (
    <div className="grid gap-x-8 grid-cols-[128px_1fr] items-center">
      <img src={imgSrc} alt={title} />
      <div className="inline">
        <p className="inline semi-bold text-body-2">{title}</p>
        <div className="px-1 inline" />
        <p className="inline text-body-2">{desc}</p>
      </div>
    </div>
  );
};

export default DescBox;
