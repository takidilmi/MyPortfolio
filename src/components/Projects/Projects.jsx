import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const images = [
  {
    src: "/projects/Pebble.png",
    repository:"https://github.com/202306-NEA-DZ-FEW/Pebble-work",
    alt: "PebbleWork",
    link: "https://pebble-work.vercel.app/",
    text: "Pebble Work is a capstone project that showcases my skills and creativity as a web developer. It is a platform that connects volunteers and organizers, allowing them to find and work on projects that are aligned with the 17 Sustainable Development Goals (SDGs). I worked with a team of five to create this project, and I was responsible for the front-end development. We communicated and coordinated with each other using Discord, GitHub, and Zoom, and we followed the agile methodology and the Git flow. I used Next.js, Firebase, i18next, Material UI, Tailwind, and vanilla CSS to create a responsive and dynamic website that supports multiple languages and animations. I also added tests and snapshots to the components using Jest, and used Git action as my deployment tool. I'm proud of this project because it demonstrates my ability to create a full-stack web application that contributes to a better and more sustainable future for all.",
    tech1: "/Tech/icons8-nextjs.svg",
    tech2: "/Tech/icons8-firebase.svg",
    tech3: "/Tech/material-ui.svg",
    tech4: "/Tech/icons8-tailwind-css.svg",
    tech5: "/Tech/i18next.svg",
  },
  {
    src: "/projects/Sougna.png",
    repository:"https://github.com/202306-NEA-DZ-FEW/e-commerce-project-buy-or-die",
    alt: "Sougna",
    link: "https://sougna.vercel.app/",
    text: "coming soon xD why not just testing out my writing speed as yah i got experienced a lot and this is amazing i can thing and type fast",
    tech1: "/Tech/icons8-nextjs.svg",
    tech2: "/Tech/icons8-tailwind-css.svg",
    tech3: "/Tech/icons8-firebase.svg",
  },
  {
    src: "/projects/Madlibs.png",
    repository:"https://github.com/202306-NEA-DZ-FEW/madlibs-911",
    alt: "Madlibs",
    link: "https://202306-nea-dz-few.github.io/madlibs-911/",
    text: "coming soon xD why not just testing out my writing speed as yah i got experienced a lot and this is amazing i can thing and type fast",
    tech1: "/Tech/icons8-css.svg",
    tech2: "/Tech/icons8-html.svg",
    tech3: "/Tech/icons8-javascript.svg",
  },
  {
    src: "/projects/Movie.png",
    repository:"https://github.com/202306-NEA-DZ-FEW/movie-project-devsquad",
    alt: "Relio",
    link: "https://reelio-topaz.vercel.app/",
    text: "coming soon xD why not just testing out my writing speed as yah i got experienced a lot and this is amazing i can thing and type fast",
    tech1: "/Tech/icons8-nextjs.svg",
    tech2: "/Tech/DaisyUi.webp",
    tech3: "/Tech/icons8-css.svg",
  },
  {
    src: "/projects/Lemon.png",
    repository:"https://github.com/takidilmi/little-lemon",
    alt: "Lemon",
    link: "",
    text: "coming soon xD why not just testing out my writing speed as yah i got experienced a lot and this is amazing i can thing and type fast",
    tech1: "/Tech/icons8-nextjs.svg",
    tech2: "/Tech/icons8-css.svg",
    tech3: "/Tech/icons8-react-native.svg",
  },
];
const Projects = () => {
  const shadowPRefs = useRef([]);

  return (
    <>
      <div className="mt-20 text-slate-200">
        {images.map((image, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const controls = useAnimation();
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.6, // Adjusts when the animation triggers (0.5 means when 50% of the element is visible)
          });

          // eslint-disable-next-line react-hooks/rules-of-hooks
          useEffect(() => {
            if (inView) {
              controls.start("visible");
            }
          }, [controls, inView]);

          return (
            <motion.div
              ref={ref}
              key={index}
              className={`flex justify-center items-center min-h-[300px] flex-wrap ${
                index % 2 === 0
                  ? "md:flex-row-reverse flex-col"
                  : "md:flex-row flex-col"
              } justify-between mb-5`}
              initial={{ opacity: 0, translateX: index % 2 === 0 ? 200 : -200 }}
              animate={controls}
              transition={{ duration: 1 }}
              variants={{
                visible: { opacity: 1, translateX: 0 },
              }}>
              <motion.div
                className="w-1/2 relative p-3 rounded-[6px] overflow-hidden"
                whileHover={{
                  scale: 1.1,
                  backdropFilter: "blur(10px)",
                  transition: { duration: 0.5 },
                }}
                transition={{
                  scale: { duration: 0.35 },
                  backdropFilter: { duration: 0.35 },
                }}
                style={{ zIndex: 1 }}
                onHoverStart={() => {
                  shadowPRefs.current[index].style.backdropFilter =
                    "blur(10px)";
                }}
                onHoverEnd={() => {
                  shadowPRefs.current[index].style.backdropFilter = "none";
                }}>
                <InteractiveImage src={image.src} alt={image.alt} />
                <p
                  ref={(el) => (shadowPRefs.current[index] = el)}
                  className="text-center flex gap-8 rounded-[6px] px-3 absolute bottom-5 items-center left-0 shadow-p">
                  {image.tech1 && (
                    <Image src={image.tech1} width={40} height={40} alt="" />
                  )}
                  {image.tech2 && (
                    <Image src={image.tech2} width={40} height={40} alt="" />
                  )}
                  {image.tech3 && (
                    <Image src={image.tech3} width={40} height={40} alt="" />
                  )}
                  {image.tech4 && (
                    <Image src={image.tech4} width={40} height={40} alt="" />
                  )}
                  {image.tech5 && (
                    <Image src={image.tech5} width={40} height={40} alt="" />
                  )}
                </p>
              </motion.div>
              <div
                className={`w-1/2 break-words text-justify max-h-[180px] overflow-y-auto  scrollBar ${
                  index % 2 === 0 ? "text-right p-5" : "text-left p-5"
                }`}>
                <div className="flex justify-between items-center">
                  <h3 className="text-[18px] font-[600]">{image.alt}</h3>
                  <div>
                    <Link href={image.link}></Link>
                    <Link href={image.link}>LINK</Link>
                  </div>
                </div>
                <br></br>
                <p>{image.text}</p>
              </div>
            </motion.div>
          );
        })}
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
        imageRef.current.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
      }
    });
  };

  const handleInteractionEnd = () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    animationFrameId = requestAnimationFrame(() => {
      if (imageRef.current) {
        imageRef.current.style.transition =
          "transform 1s linear, background-position 5s linear";
        imageRef.current.style.transform =
          "perspective(500px) rotateX(0) rotateY(0)";
        imageRef.current.style.backgroundPosition = "center";
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
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "transform 1s linear, background-position 5s linear",
        width: "100%",
        height: "200px",
        overflow: "hidden",
        borderRadius: "4px",
      }}
    />
  );
};

export default Projects;
