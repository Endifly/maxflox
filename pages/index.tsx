import { Box, Container, Typography } from "@mui/material";
import Canvas from "components/Canvas/canvas";
import CatchWord from "components/Home/CatchWord";
import Hero from "components/Home/Hero";
import MaxFlowMakeFlow from "components/Home/MaxFlowMakeFlow";
import Partner from "components/Home/Partner";
import Team from "components/Home/Team";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import tube from "../public/tube.png";

const Home: NextPage = () => {
  return (
    <div
      className={`${styles.container} relative`}
      // className="w-screen h-screen"
      // style={{
      //   backgroundImage: `url(${bg.src})`,
      //   width: "100%",
      //   height: "100%",
      // }}
    >
      <img
        src={tube.src}
        className="absolute top-0 right-[10%]"
        alt="tube"
        style={{ zIndex: 2, transform: `scale(0.7)` }}
      />
      <Hero />
      <CatchWord />
      <MaxFlowMakeFlow />
      <Partner />
      <Team />
      {/* <div className={styles.bg} /> */}
      {/* <Image src="/public/landing.jpg" layout="fill" alt="asd" /> */}
    </div>
  );
};

export default Home;
