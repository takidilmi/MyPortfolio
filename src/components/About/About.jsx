import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ y: -250, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 4 }}
        className="text-slate-200 text-[30px] justify-center flex flex-col items-center mt-20">
        <h1 className="font-[500]">AboutMe</h1>
        <motion.p
          initial={{ y: -250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 5 }}
          className="font-[300]">
          Hi, I&apos;m Takieddine Dilmi, a front end web developer with proven
          experience in creating beautiful and responsive websites. I specialize
          in <span>Next.js</span>, a React framework that enables fast and
          SEO-friendly web development. I also have strong skills in{" "}
          <span>JavaScript</span>, <span>HTML</span>, <span>CSS</span>, and
          Tailwind, a utility-first CSS framework that helps me design stunning
          layouts. I&apos;m passionate about learning new technologies and best
          practices, and I always strive to deliver high-quality code and user
          experience. Whether you need a landing page, a blog, an e-commerce
          site, or anything in between, I can help you turn your vision into
          reality.
        </motion.p>
      </motion.div>
    </>
  );
};

export default About;
