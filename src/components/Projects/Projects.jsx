import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
              <Image
                src={image.src}
                alt={image.alt}
                layout="responsive"
                width={500}
                height={300}
              />
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

export default Projects;
