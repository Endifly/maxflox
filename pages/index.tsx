import { Box, Container, Typography } from "@mui/material";
import Canvas from "components/Canvas/canvas";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className="h-screen">
        <Box pt={2} />
        <Typography variant="h3">Tanakorn Tampanya</Typography>
        <Typography variant="subtitle1" color="CaptionText" className="ml-2">
          I am ...
        </Typography>
        <div className="absolute bottom-0">
          <Canvas />
        </div>
      </div>
      <Typography>asd</Typography>
    </div>
  );
};

export default Home;
