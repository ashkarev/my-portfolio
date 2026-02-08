import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skills";
import Experience from "./components/ExperienceSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>

      <Navbar />

      < Hero />
      <Project />
      <Skill />
      <Experience />
      <Contact />
      <Footer />


    </>
  );
}
