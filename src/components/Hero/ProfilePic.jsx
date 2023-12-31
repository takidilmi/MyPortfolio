import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HoverEffect = () => {
  return (
    <>
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1, type: "tween", ease: "linear" }}>
        <motion.div
          className="coverCard overflow-hidden rounded-full"
          whileHover={{
            y: "-5%",
            boxShadow: "2px 35px 32px -8px rgba(0, 0, 0, 0.25)",
            transition: { duration: 1 },
          }}
          transition={{
            y: { duration: 1 },
            boxShadow: { duration: 0.7 },
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
      </motion.div>
    </>
  );
};
export default HoverEffect;
