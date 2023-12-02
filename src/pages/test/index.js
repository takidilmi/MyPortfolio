import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HoverEffect = () => {
  return (
    <>
      <motion.div
        className="coverCard rounded-full"
        whileHover={{
          y: "-5%",
          rotateX: 30,
          boxShadow: "2px 35px 32px -8px rgba(0, 0, 0, 0.75)",
          transition: { duration: 1 },
        }}>
        <div className="coverWrapper">
          <Image
            className="coverEffect"
            src="/images/Takidilmi.jpg"
            alt="Image 1"
            width={500}
            height={300}
          />
        </div>
        <Image
          className="character "
          src="/images/Taki3D.png"
          alt="Image 2"
          width={500}
          height={300}
        />
      </motion.div>
    </>
  );
};
export default HoverEffect;
