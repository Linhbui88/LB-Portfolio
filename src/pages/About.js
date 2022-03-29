import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import { useState } from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
const About = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-stone-900">
      <motion.div
        className="flex-flex-col items-stretch min-w-screen bg-stone-900"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <AboutMe />
        <Skills />
      </motion.div>
    </div>
  );
};

export default About;
