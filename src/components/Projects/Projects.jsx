import React from "react";
import Image from "next/image";
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
            className={`flex flex-wrap ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            } justify-between mb-5`}>
            <div className="w-1/2">
              <Image
                src={image.src}
                alt={image.alt}
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
            <p
              className={`w-1/2 break-words text-justify ${
                index % 2 === 0 ? "text-right p-3" : "text-left p-3"
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
