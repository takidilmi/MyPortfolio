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
  const shadowPRefs = useRef([]);

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
              style={{ zIndex: 1 }}
              onHoverStart={() => {
                shadowPRefs.current[index].forEach((p) => {
                  p.style.boxShadow = "3px 3px 3px rgba(0, 0, 0, 0.5)";
                });
              }}
              onHoverEnd={() => {
                shadowPRefs.current[index].forEach((p) => {
                  p.style.boxShadow = "none";
                });
              }}>
              <InteractiveImage src={image.src} alt={image.alt} />
              <p ref={el => shadowPRefs.current[index] = [...(shadowPRefs.current[index] || []), el]} className="text-center bg-red-600 absolute top-0 shadow-p">
                {image.alt}
              </p>
              <p ref={el => shadowPRefs.current[index] = [...(shadowPRefs.current[index] || []), el]} className="text-center bg-red-600 absolute top-5 shadow-p">
                {image.alt}
              </p>
              <p ref={el => shadowPRefs.current[index] = [...(shadowPRefs.current[index] || []), el]} className="text-center bg-red-600 absolute top-10 shadow-p">
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
      <style jsx>{`
        .shadow-p {
          transition: box-shadow 0.3s ease-in-out;
        }
      `}</style>
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
      let { left, top, width, height } =
        imageRef.current.getBoundingClientRect();
      let x = ((event.clientX - left) / width - 0.5) * 1.5;
      let y = ((event.clientY - top) / height - 0.5) * 1.5;
      imageRef.current.style.transform = `perspective(500px) rotateX(${
        -y * 10
      }deg) rotateY(${x * 10}deg)`;
    });
  };
  const handleMouseLeave = () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    animationFrameId = requestAnimationFrame(() => {
      imageRef.current.style.transition = "transform 0.2s linear";
      imageRef.current.style.transform =
        "perspective(500px) rotateX(0) rotateY(0)";
    });
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
      }}>
      <Image src={src} alt={alt} layout="responsive" width={500} height={300} />
    </div>
  );
};

export default Projects;
