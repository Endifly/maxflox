import React, { useCallback, useEffect, useRef } from "react";
import { BaseChildren, BaseMaxWidth, BaseStyle } from "types/style-types";
import bg from "public/bg-hero.png";
import Image from "next/image";

interface Props extends BaseChildren, BaseStyle, BaseMaxWidth {
  useNextArrow?: boolean;
}

const LandingLayout: React.FC<Props> = ({
  children,
  className,
  style,
  maxWidth = "max-w-none",
  useNextArrow = false,
}) => {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // const disableScrolling = () => {
  //   window.onscroll = function () {
  //     bottomRef.current?.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   };
  // };

  // const enableScrolling = () => {
  //   window.onscroll = function () {};
  // };

  // const handleObserver = useCallback(() => {
  //   if (useNextArrow) {
  //     disableScrolling();
  //   } else {
  //     enableScrolling();
  //   }
  // }, [useNextArrow]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(handleObserver);
  //   if (bottomRef.current) {
  //     observer.observe(bottomRef.current);
  //   }
  // }, [handleObserver]);

  const scrollToNext = () => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`h-screen w-screen flex justify-center relative ${className}`}
      style={style}
    >
      <Image
        src={bg.src}
        layout="fill"
        className="absolute xl:blur"
        alt="whirepool"
      />
      <div className={`w-full relative ${maxWidth}`}>{children}</div>
      <div
        className="arrow-down absolute bottom-[32px]"
        onClick={scrollToNext}
      />
      <div className="absolute bottom-0" ref={bottomRef} />
      <div className="absolute top-0" ref={topRef} />
      {/* <img className="absolute" src={`${bg.src}`} atl="asd" /> */}
    </div>
  );
};

export default LandingLayout;
