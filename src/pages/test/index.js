import React from "react";
import Image from "next/image";

const HoverEffect = () => {
  return (
    <>
      <div className="coverCard">
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
      </div>
    </>
  );
};
export default HoverEffect;
