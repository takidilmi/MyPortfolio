import About from "@/components/About/About";
import Contact from "@/components/About/Contact";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import TechStack from "@/components/TechStack/TechStack";

export default function Home() {
  return (
    <>
      <div className="relative px-3">
        <Hero />
        <About />
        <Projects />
        {/* <TechStack /> */}
        <Contact />
      </div>
    </>
  );
}
