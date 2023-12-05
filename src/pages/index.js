import About from "@/components/About/About";
import Contact from "@/components/About/Contact";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Section from "@/components/Section";
import TechStack from "@/components/TechStack/TechStack";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden px-3">
        <Section id="hero">
          <Hero />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section
          className="flex mt-14 flex-col items-center justify-center"
          id="projects">
          <motion.h2
          className="pointer-events-none"
            initial={{ y: -250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 5 }}>
            Why Choose Me
          </motion.h2>
          <Projects />
        </Section>
        <Section className="overflow-hidden" id="techStack">
          <TechStack />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </div>
    </>
  );
}
