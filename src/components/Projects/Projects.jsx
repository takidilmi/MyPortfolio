import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

const images = [
  {
    src: "/images/Takidilmi.jpg",
    alt: "Image 1",
    text: "coming soon xD why not just testing out my writing speed as yah i got experienced a lot and this is amazing i can thing and type fast",
  },
  {
    src: "/images/Takidilmi.jpg",
    alt: "Image 2",
    text: "coming soon xD why not just testing out my writing speed as yah i got experienced a lot and this is amazing i can thing and type fast",
  },
  {
    src: "/images/Takidilmi.jpg",
    alt: "Image 3",
    text: "coming soon xD why not just testing out my writing speed as yah i got experienced a lot and this is amazing i can thing and type fast",
  },
  {
    src: "/images/Takidilmi.jpg",
    alt: "Image 4",
    text: "coming soon xD why not just testing out my writing speed as yah i got experienced a lot and this is amazing i can thing and type fast",
  },
];
const Projects = () => {
  return (
    <>
      <div className="mt-20 text-slate-200">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex justify-center items-center min-h-[300px] flex-wrap ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            } justify-between mb-5`}>
            <motion.div
              className="w-1/2 relative p-3"
              whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
              style={{ zIndex: 1 }}>
              <InteractiveImage src={image.src} alt={image.alt} />
              <p className="text-center bg-red-600 absolute top-0">
                {image.alt}
              </p>
              <p className="text-center bg-red-600 absolute top-5">
                {image.alt}
              </p>
              <p className="text-center bg-red-600 absolute top-10">
                {image.alt}
              </p>
            </motion.div>
            <p
              className={`w-1/2 break-words text-justify max-h-[260px] overflow-y-auto  scrollBar ${
                index % 2 === 0 ? "text-right p-5" : "text-left p-5"
              }`}>
              {image.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
const InteractiveImage = ({ src, alt }) => {
  const imageRef = useRef(null);
  let animationFrameId = null;

  const handleMouseMove = (event) => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
  
    animationFrameId = requestAnimationFrame(() => {
      let { left, top, width, height } = imageRef.current.getBoundingClientRect();
      let x = ((event.clientX - left) / width - 0.2) * 1.2;
      let y = ((event.clientY - top) / height - 0.2) * 1.2;
      imageRef.current.style.transform = `perspective(500px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
    });
  };
  const handleMouseLeave = () => {
    imageRef.current.style.transform = `perspective(500px) rotateX(0) rotateY(0)`;
  };

  useEffect(() => {
    const imageElement = imageRef.current;
    imageElement.addEventListener("mousemove", handleMouseMove);
    imageElement.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      imageElement.removeEventListener("mousemove", handleMouseMove);
      imageElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={imageRef}
      style={{
        perspective: "500px",
        transformStyle: "preserve-3d",
        transition: "transform 50ms linear",
      }}
    >
      <Image src={src} alt={alt} layout="responsive" width={500} height={300} />
    </div>
  );
};

export default Projects;
