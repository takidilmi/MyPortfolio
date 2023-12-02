import { motion } from "framer-motion";
import React from "react";
import NameWriter from "../ScrambleText";
import HoverEffect from "./ProfilePic";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap-reverse justify-around items-center text-white">
        <HoverEffect />
        <motion.div className="text-[30px] break-words">
          <motion.p
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
            Hi, my name is{" "}
          </motion.p>
          <motion.b
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}>
            <NameWriter />
          </motion.b>
          <motion.p
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}>
            , a talented frontend web developer.
          </motion.p>
          <motion.br></motion.br>
          <motion.p
            className="opacity-70"
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: 0, opacity: 0.8 }}
            transition={{ duration: 1, delay: 3 }}>
            let me show you...
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
