import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import NameWriter from "../ScrambleText";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      <div className="flex pt-6 flex-row flex-wrap-reverse justify-around items-center text-white">
        <motion.div
          className="text-[30px] break-words w-[65vw]"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}>
          <p>
            Hi, my name is <b><NameWriter /></b>
            , a talented frontend web developer.
          </p>
          <br></br>
          <p className="opacity-70">let me show you...</p>
        </motion.div>
        <motion.div
          className="w-64 h-64 rounded-full overflow-hidden flex items-center justify-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}>
          <Image
            src="/images/Takidilmi.jpg"
            alt="Takidilmi"
            width={500}
            height={500}
            className="h-full w-full object-cover"
            objectFit="cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
