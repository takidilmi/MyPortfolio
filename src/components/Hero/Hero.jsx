import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex pt-6 flex-row flex-wrap-reverse justify-around items-center text-white">
        <div className="text-[30px] break-words w-[65vw]">
          <p>
            Hi, my name is <b>Takieddine Dilmi</b>, a talented frontend web
            developer.
          </p>
          <br></br>
          <p className="opacity-70">let me show you...</p>
        </div>
        <div className="w-64 h-64 rounded-full overflow-hidden flex items-center justify-center">
          <Image
            src="/images/Takidilmi.jpg"
            alt="Takidilmi"
            width={500}
            height={500}
            className="h-full w-full object-cover"
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
