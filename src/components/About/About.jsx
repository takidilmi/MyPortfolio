import React from "react";
import { motion } from "framer-motion";
import $ from "jquery";
import YouTubeVideo from "../YouTubeVideo";

const About = () => {
  const scrollToTechStack = () => {
    if (typeof window !== "undefined") {
      $("html, body").animate(
        { scrollTop: $("#techStack").offset().top },
        1000
      );
    }
  };
  return (
    <>
      <motion.div
        initial={{ y: -250, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="text-slate-200 pointer-events-none justify-center flex flex-col items-center mt-20">
        <h2 className="font-[500] mb-1">About Me</h2>
        <div className="font-[500] pointer-events-auto relative">
          <YouTubeVideo />
        </div>
        <motion.p
          initial={{ y: -250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
          className="font-[300] text-[25px]">
          Hi, I&apos;m Takieddine Dilmi, a front end web developer with proven
          experience in creating beautiful and responsive websites. I specialize
          in{" "}
          <span
            className="cursor-pointer pointer-events-auto hover:text-slate-300"
            onClick={scrollToTechStack}>
            Next.js
          </span>
          , a React framework that enables fast and{" "}
          <span
            className="cursor-pointer pointer-events-auto hover:text-slate-300"
            onClick={scrollToTechStack}>
            SEO-friendly
          </span>{" "}
          web development. I also have strong skills in{" "}
          <span
            className="cursor-pointer pointer-events-auto hover:text-slate-300"
            onClick={scrollToTechStack}>
            JavaScript
          </span>
          ,{" "}
          <span
            className="cursor-pointer pointer-events-auto hover:text-slate-300"
            onClick={scrollToTechStack}>
            HTML
          </span>
          ,{" "}
          <span
            className="cursor-pointer pointer-events-auto hover:text-slate-300"
            onClick={scrollToTechStack}>
            CSS
          </span>
          , and{" "}
          <span
            className="cursor-pointer pointer-events-auto hover:text-slate-300"
            onClick={scrollToTechStack}>
            Tailwind
          </span>
          , a utility-first CSS framework that helps me design stunning layouts.
          I&apos;m passionate about learning new technologies and best
          practices, and I always strive to deliver high-quality code and user
          experience. Whether you need a landing page, a blog, an e-commerce
          site, or anything in between, I can help you turn your vision into
          reality.
        </motion.p>
      </motion.div>
      <style jsx>{`
        span {
          color: white;
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default About;
