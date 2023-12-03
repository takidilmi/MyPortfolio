import Image from "next/image";
import React from "react";
import { TfiGithub } from "react-icons/tfi";
import { IoLogoLinkedin } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 z-[999]">
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
