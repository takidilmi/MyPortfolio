import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TfiGithub } from "react-icons/tfi";
import { PiFileHtmlLight } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import $ from "jquery";
if (typeof window !== "undefined") {
  window.$ = $;
} //make it globally available so it can be used in the span

const images = [
  {
    src: "/projects/Pebble.png",
    repository: "https://github.com/202306-NEA-DZ-FEW/Pebble-work",
    alt: "PebbleWork",
    link: "https://pebble-work.vercel.app/",
    text: "Pebble Work is a capstone project that showcases my skills and creativity as a web developer including a global chat for users. I used skill:Next.js, skill:Firebase, skill:i18next, skill:MaterialUI, skill:Tailwind, and skill:VanillaCSS to create a responsive and dynamic website that supports multiple languages and animations. It is a platform that connects volunteers and organizers, allowing them to find and work on projects that are aligned with the 17 Sustainable Development Goals (SDGs). I worked with a team of five to create this project, and I was responsible for the front-end development. We communicated and coordinated with each other using Discord, GitHub, and Zoom, and we followed the agile methodology and the Git flow. I also added tests and snapshots to the components using Jest, and used Git action as my deployment tool. I'm proud of this project because it demonstrates my ability to create a stack:full-stack web application that contributes to a better and more sustainable future for all.",
    tech1: "/Tech/icons8-nextjs.svg",
    tech2: "/Tech/icons8-firebase.svg",
    tech3: "/Tech/material-ui.svg",
    tech4: "/Tech/icons8-tailwind-css.svg",
    tech5: "/Tech/i18next.svg",
  },
  {
    src: "/projects/Sougna.png",
    repository:
      "https://github.com/202306-NEA-DZ-FEW/e-commerce-project-buy-or-die",
    alt: "Sougna",
    link: "https://sougna.vercel.app/",
    text: "Sougna is an e-commerce project that I created with five other team members as part of our web development course. It is a platform that provides a seamless online shopping experience for users and a convenient product management and order processing system for the admin. We used skill:NextJs, skill:Firebase, skill:Redux and skill:Stripe to build this project. We also implemented user authentication and registration, product catalog with search and filtering options, shopping cart functionality, secure payment processing, user reviews and ratings, and admin dashboard for managing products and orders. We made sure that the website is responsive and accessible on various devices, and we added some animations and transitions to enhance the user interface. I was responsible for the front-end development and the user interface design, and I used skill:Next.js, skill:Tailwind, and other technologies to create a modern and elegant website. I was also honored to lead this team for a week, and I coordinated the tasks, deadlines, and feedback among the team members. We communicated and collaborated with each other using GitHub, Discord, and Zoom, and we deployed the website on Vercel. I'm proud of this project because it demonstrates my ability to create a stack:full-stack web application that solves a real-world problem and provides a great user experience.",
    tech1: "/Tech/icons8-nextjs.svg",
    tech2: "/Tech/icons8-tailwind-css.svg",
    tech3: "/Tech/icons8-firebase.svg",
  },
  {
    src: "/projects/Madlibs.png",
    repository: "https://github.com/202306-NEA-DZ-FEW/madlibs-911",
    alt: "Madlibs",
    link: "https://202306-nea-dz-few.github.io/madlibs-911/",
    text: "I created my own MadLibs game with five other team members using skill:HTML, skill:CSS, and skill:JS. We wrote a story with some words replaced by blanks that indicate the part of speech, such as nouns, verbs, adjectives, etc. We used regular expressions to find and replace the blanks in our story with inputs, and we showed two copies of the story: one in the edit view, where the players can fill in the inputs, and one in the preview, where the players can see the completed story. We also added some features, such as hotkeys, constraining user inputs, and live update. I was responsible for the front-end development and the user interface design, and I used HTML, CSS, and JS to create a fun and interactive web page. I was also the team leader for a week, and I coordinated the tasks, deadlines, and feedback among the team members. We communicated and collaborated with each other using GitHub, Discord, and Zoom, and we deployed our web page on GitHub Pages. I'm proud of this project because it demonstrates my ability to create a fun and interactive web application that uses skill:HTML, skill:CSS, and skill:JS in unison.",
    tech1: "/Tech/icons8-css.svg",
    tech2: "/Tech/icons8-html.svg",
    tech3: "/Tech/icons8-javascript.svg",
  },
  {
    src: "/projects/Movie.png",
    repository: "https://github.com/202306-NEA-DZ-FEW/movie-project-devsquad",
    alt: "Relio",
    link: "https://reelio-topaz.vercel.app/",
    text: "I created a movie project with five other team members using skill:Next.js, skill:DaisyUI, skill:Tailwind, and an API. It is a platform that allows users to browse and discover movies from different genres, years, and ratings. We used Next.js to create a fast and dynamic website that supports server-side rendering and static site generation. We used skill:DaisyUI and skill:Tailwind to style our website and make it responsive and attractive. We used an API to fetch data from a movie database and display it on our website. We also implemented semantic tags to improve the accessibility and skill:SEO of our website. I was responsible for the front-end development and the user interface design, and I used skill:Next.js, skill:DaisyUI, and skill:Tailwind to create a modern and elegant website. We communicated and collaborated with each other using GitHub, Discord, and Zoom, and we deployed our website on Vercel. I'm proud of this project because it demonstrates my ability to create a stack:full-stack web application that uses skill:Next.js, skill:Daisy UI, skill:Tailwind, and an API in unison.",
    tech1: "/Tech/icons8-nextjs.svg",
    tech2: "/Tech/DaisyUi.webp",
    tech3: "/Tech/icons8-css.svg",
  },
  {
    src: "/projects/Lemon.png",
    repository: "https://github.com/takidilmi/little-lemon",
    alt: "Lemon",
    link: "",
    text: "Little Lemon Booking Website is a capstone project that I created during Meta's Coursera Front-End Development course. It is a platform that allows users to book rooms and services from the Little Lemon restaurant. I used skill:React to create a fast and dynamic website that supports user authentication, booking confirmation, and payment processing. I also used pure skill:CSS to style my website and make it responsive and attractive. I followed the best practices of front-end development, such as using semantic tags, responsive design, and accessibility features. I worked on this project fully alone, and I learned a lot from the experience. I'm proud of this project because it demonstrates my ability to create a stack:full-stack web application that uses React and pure CSS in unison.",
    tech1: "/Tech/icons8-nextjs.svg",
    tech2: "/Tech/icons8-css.svg",
    tech3: "/Tech/icons8-react-native.svg",
  },
];
const Projects = () => {
  const shadowPRefs = useRef([]);

  return (
    <>
      <div className="mt-20 overflow-hidden flex flex-col items-center text-slate-200">
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
              className={`flex justify-center space-y-2 items-center min-h-[300px] flex-wrap ${
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
                className="md:w-[49vw] w-[130vw] relative p-3 rounded-[6px] overflow-hidden"
                whileHover={{
                  scale: 1.1,
                  backdropFilter: "blur(2px)",
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
                <div
                  ref={(el) => (shadowPRefs.current[index] = el)}
                  className="flex flex-col absolute bottom-5 items-center left-0 shadow-p flex-wrap break-words">
                  <p className="textPurple font-[700] bottom-16 ml-5">
                    Used and Learned
                  </p>
                  <p className="text-center flex flex-wrap justify-center gap-8 rounded-[6px] px-3 ">
                    {image.tech1 && (
                      <Image
                        className="techWidth"
                        src={image.tech1}
                        width={40}
                        height={40}
                        alt=""
                      />
                    )}
                    {image.tech2 && (
                      <Image
                        className="techWidth"
                        src={image.tech2}
                        width={40}
                        height={40}
                        alt=""
                      />
                    )}
                    {image.tech3 && (
                      <Image
                        className="techWidth"
                        src={image.tech3}
                        width={40}
                        height={40}
                        alt=""
                      />
                    )}
                    {image.tech4 && (
                      <Image
                        className="techWidth"
                        src={image.tech4}
                        width={40}
                        height={40}
                        alt=""
                      />
                    )}
                    {image.tech5 && (
                      <Image
                        className="techWidth"
                        src={image.tech5}
                        width={40}
                        height={40}
                        alt=""
                      />
                    )}
                  </p>
                </div>
              </motion.div>
              <div
                className={`md:w-[47vw] w-[95vw] mobileWidth break-words text-justify max-h-[180px] overflow-y-auto  scrollBar ${
                  index % 2 === 0 ? "text-right p-5" : "text-left p-5"
                }`}>
                <div className="flex justify-between items-center">
                  <Link
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[24px] font-[600]">
                    {image.alt}
                  </Link>

                  <p className="opacity-50 items-center gap-1 justify-center sm:flex hidden text-[1rem]">
                    <p>Visit Links</p>{" "}
                    <motion.div
                      animate={{ x: ["-10%", "10%"] }}
                      transition={{ repeat: Infinity, duration: 2 }}>
                      <FaArrowRight size={15} />
                    </motion.div>
                  </p>
                  <div className="flex gap-5">
                    <Link
                      href={image.repository}
                      target="_blank"
                      rel="noopener noreferrer">
                      <TfiGithub size={30} />
                    </Link>
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noopener noreferrer">
                      <PiFileHtmlLight size={30} />
                    </Link>
                  </div>
                </div>
                <br></br>
                <p
                  dangerouslySetInnerHTML={{
                    __html: image.text
                      .replace(
                        /skill:(\w+)/g,
                        "<span style=\"font-weight: bold; cursor: pointer; text-decoration: underline;\" onClick=\"(function() { if (typeof window !== 'undefined') { $('html, body').animate({ scrollTop: $('#techStack').offset().top }, 1000); } })();\">$1</span>"
                      )
                      .replace(
                        /stack:([\w-]+)/g,
                        "<span style=\"font-weight: bold; cursor: pointer; text-decoration: underline;\" onClick=\"(function() { if (typeof window !== 'undefined') { $('html, body').animate({ scrollTop: $('#techStack').offset().top }, 1000); } })();\">$1</span>"
                      ),
                  }}></p>
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
