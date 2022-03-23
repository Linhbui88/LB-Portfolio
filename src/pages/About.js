import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import { useState } from "react";

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div>
        <AboutMe />
      </div>
      {/* <div className="flex flex-col h-screen w-full bg-stone-900 sm:h-screen">
        <div className="snap-y snap-mandatory h-screen">
          <AboutMe menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Skills />
        </div>
      </div> */}
    </>
  );
};

export default About;
