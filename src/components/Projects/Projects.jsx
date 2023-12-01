import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  {
    src: "/projects/Pebble.png",
    alt: "https://pebble-work.vercel.app/",
    text: "coming soon xD why not just testing out my writing speed as yah i got experienced a lot and this is amazing i can thing and type fast",
    tech1: "/Tech/icons8-nextjs.svg",
    tech2: "/Tech/icons8-firebase.svg",
    tech3: "/Tech/material-ui.svg",
  },
  {
    src: "/projects/Sougna.png",
    alt: "https://sougna.vercel.app/",
    text: "coming soon xD why not just testing out my writing speed as yah i got experienced a lot and this is amazing i can thing and type fast",
    tech1: "/Tech/icons8-nextjs.svg",
    tech2: "",
    tech3: "",
  },
  {
    src: "/projects/Madlibs.png",
    alt: "https://202306-nea-dz-few.github.io/madlibs-911/",
    text: "coming soon xD why not just testing out my writing speed as yah i got experienced a lot and this is amazing i can thing and type fast",
    tech1: "/Tech/icons8-nextjs.svg",
    tech2: "",
    tech3: "",
  },
  {
    src: "/projects/Movie.png",
    alt: "https://reelio-topaz.vercel.app/",
    text: "coming soon xD why not just testing out my writing speed as yah i got experienced a lot and this is amazing i can thing and type fast",
    tech1: "/Tech/icons8-nextjs.svg",
    tech2: "",
    tech3: "",
  },
  {
    src: "/projects/Lemon.png",
    alt: "Lemon",
    text: "coming soon xD why not just testing out my writing speed as yah i got experienced a lot and this is amazing i can thing and type fast",
    tech1: "/Tech/icons8-nextjs.svg",
    tech2: "",
    tech3: "",
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
                  p.style.backdropFilter = "blur(10px)";
                });
              }}
              onHoverEnd={() => {
                shadowPRefs.current[index].forEach((p) => {
                  p.style.backdropFilter = "none";
                });
              }}>
              <InteractiveImage src={image.src} alt={image.alt} />
              <p
                ref={(el) =>
                  (shadowPRefs.current[index] = [
                    ...(shadowPRefs.current[index] || []),
                    el,
                  ])
                }
                className="text-center flex absolute top-0 shadow-p">
                <Image src={image.tech1} width={30} height={30} alt="" />

                <Image src={image.tech1} width={30} height={30} alt="" />

                <Image src={image.tech1} width={30} height={30} alt="" />
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
          transition: backdrop-filter 0.2s ease-in-out;
        }
      `}</style>
    </>
  );
};

const InteractiveImage = ({ src, alt }) => {
  const imageRef = useRef(null);
  let animationFrameId = null;

  const handleInteractionMove = (event) => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    animationFrameId = requestAnimationFrame(() => {
      if (imageRef.current) {
        let { left, top, width, height } =
          imageRef.current.getBoundingClientRect();
        let x, y;
        if (event.type === "mousemove") {
          x = ((event.clientX - left) / width - 0.5) * 1.5;
          y = ((event.clientY - top) / height - 0.5) * 1.5;
        } else if (event.type === "touchmove") {
          x = ((event.touches[0].clientX - left) / width - 0.5) * 1.5;
          y = ((event.touches[0].clientY - top) / height - 0.5) * 1.5;
        }
        imageRef.current.style.transform = `perspective(500px) rotateX(${
          -y * 10
        }deg) rotateY(${x * 10}deg)`;
      }
    });
  };

  const handleInteractionEnd = () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    animationFrameId = requestAnimationFrame(() => {
      if (imageRef.current) {
        imageRef.current.style.transition = "transform 0.2s linear";
        imageRef.current.style.transform =
          "perspective(500px) rotateX(0) rotateY(0)";
      }
    });
  };

  useEffect(() => {
    const imageElement = imageRef.current;
    imageElement.addEventListener("mousemove", handleInteractionMove);
    imageElement.addEventListener("mouseleave", handleInteractionEnd);
    imageElement.addEventListener("touchmove", handleInteractionMove);
    imageElement.addEventListener("touchend", handleInteractionEnd);
    return () => {
      imageElement.removeEventListener("mousemove", handleInteractionMove);
      imageElement.removeEventListener("mouseleave", handleInteractionEnd);
      imageElement.removeEventListener("touchmove", handleInteractionMove);
      imageElement.removeEventListener("touchend", handleInteractionEnd);
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
      <Image
        className="object-cover max-h-[200px]"
        src={src}
        alt={alt}
        layout="responsive"
        width={500}
        height={300}
      />
    </div>
  );
};

export default Projects;
