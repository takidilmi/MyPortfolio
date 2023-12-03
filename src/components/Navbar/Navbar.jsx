import Image from "next/image";
import React from "react";
import { TfiGithub } from "react-icons/tfi";
import { IoLogoLinkedin } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 z-[999]">
        <div className="text-white flex justify-around relative">
          <div className="flex justify-between gap-20 p-2 flex-wrap text-[25px]">
            <a
              className="flex gap-2 flex-wrap items-center"
              href="https://www.linkedin.com/in/takidilmi/"
              target="_blank"
              rel="noopener noreferrer">
              <IoLogoLinkedin size={30} />
              <p>Linkedin</p>
            </a>
            <a
              className="flex gap-2 items-center"
              href="https://github.com/takidilmi"
              target="_blank"
              rel="noopener noreferrer">
              <p>Github</p>
              <TfiGithub size={30} />
            </a>
          </div>
          <Image
            className="absolute top-[-20px]"
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
