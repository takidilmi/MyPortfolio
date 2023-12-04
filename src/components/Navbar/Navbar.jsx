import $ from "jquery";
import Image from "next/image";
import React from "react";
import { TfiGithub } from "react-icons/tfi";
import { IoLogoLinkedin } from "react-icons/io5";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Navbar = () => {
  const [hover, setHover] = React.useState(false);
  const handleScrollToBottom = () => {
    $("html, body").animate(
      { scrollTop: $(document).height() - $(window).height() },
      1000
    );
  };

  return (
    <>
      <div className="sticky textShadow top-0 z-[999]">
        <div className="text-white flex justify-around relative">
          <div className="flex justify-around w-full p-2 flex-wrap text-[25px]">
            <Link
              className="flex flex-row gap-2 flex-wrap items-center"
              href="https://www.linkedin.com/in/takidilmi/"
              target="_blank"
              rel="noopener noreferrer">
              <IoLogoLinkedin size={30} />
              <p>Linkedin</p>
            </Link>
            <div className="flex gap-2 items-center">
              <motion.div
                animate={{ x: ["-10%", "10%"] }}
                transition={{ repeat: Infinity, duration: 2 }}>
                <FaArrowRight size={20} />
              </motion.div>
              <p
                onClick={handleScrollToBottom}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className={`text-[18px] cursor-pointer self-center ${
                  hover ? "opacity-70" : ""
                }`}>
                Get in Touch
              </p>
              <motion.div
                animate={{ x: ["10%", "-10%"] }}
                transition={{ repeat: Infinity, duration: 2 }}>
                <FaArrowLeft size={20} />
              </motion.div>
            </div>
            <Link
              className="flex gap-2 items-center"
              href="https://github.com/takidilmi"
              target="_blank"
              rel="noopener noreferrer">
              <p>Github</p>
              <TfiGithub size={30} />
            </Link>
          </div>
          <Image
            className="absolute top-[-20px] z-[-1]"
            src="/logo.svg"
            width={200}
            height={200}
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
