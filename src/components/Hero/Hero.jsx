import { motion } from "framer-motion";
import React from "react";
import NameWriter from "../ScrambleText";
import HoverEffect from "./ProfilePic";
import PdfViewer from "../PdfViewer/PdfViewer";

const Hero = () => {
  return (
    <>
      <div className="flex mt-10 flex-row flex-wrap-reverse justify-around items-center text-white">
        <HoverEffect />
        <motion.h1 className="text-[30px] break-words">
          <motion.p
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
            Hello, I’m{" "}
          </motion.p>
          <motion.b
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}>
            <NameWriter />
          </motion.b>
          <motion.p
            className="lg:w-[40vw] md:w-[80vw] sm:w-[95vw] w-[99vw] break-words"
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}>
            , a proficient front-end web developer specializing in JavaScrip
            Next.js, Redux, CSS, HTML, and Firebase. Welcome to my portfolio
            where innovation meets design.
          </motion.p>
          <div>
            <PdfViewer />
          </div>
          <motion.br></motion.br>
          <motion.p
            className="opacity-70"
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: 0, opacity: 0.8 }}
            transition={{ duration: 1, delay: 2.5 }}>
            let me show you...
          </motion.p>
        </motion.h1>
      </div>
    </>
  );
};

export default Hero;
