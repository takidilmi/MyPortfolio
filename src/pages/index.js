import About from "@/components/About/About";
import Contact from "@/components/About/Contact";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Section from "@/components/Section";
import TechStack from "@/components/TechStack/TechStack";

export default function Home() {
  return (
    <>
      <div className="relative px-3">
        <Section id="hero">
          <Hero />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section className="flex mt-14 flex-col items-center justify-center" id="projects">
          <h2>Why Choose Me</h2>
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
