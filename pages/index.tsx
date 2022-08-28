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
      style={
        {
          // perspective: "300px",
          // transformStyle: "preserve-3d",
        }
      }
    >
      <Hero />
      <CatchWord />
      <MaxFlowMakeFlow />
      <Partner />
      <Team />
    </div>
  );
};

export default Home;
