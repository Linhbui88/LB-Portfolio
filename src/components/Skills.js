import React from "react";
import girlswhocode from "../img/girlswhocode.png";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const Skills = () => {
  const [element, controls] = useScroll();
  return (
    <motion.div
      className="skills-section bg-stone-900 h-full w-screen grid grid-cols-1 justify-items-center content-center md:!h-screen"
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <div className="skills grid grid cols-1 justify-items-center md:grid-cols-2">
        <img src={girlswhocode} alt="girls who code" className="w-48 sm:w-96" />

        <div className="skills m-3 font-bold grid grid-cols-1 gap-3 justify-items-center text-stone-300/50 sm:!grid-cols-2 !justify-items-start">
          <div className="flex items-center gap-2 sm:my-10">
            <ImHtmlFive className="text-green-900 text-3xl" />
            <h1>HTML</h1>
          </div>
          <div className="flex items-center gap-2 sm:my-10">
            <IoLogoCss3 className="text-green-900 text-3xl" />
            <h1>CSS</h1>
          </div>
          <div className="flex items-center gap-2 sm:my-10">
            <SiJavascript className="text-green-900 text-3xl" />
            <h1>JavaScript</h1>
          </div>
          <div className="flex items-center gap-2 sm:my-10">
            <FaReact className="text-green-900 text-3xl" />
            <h1>React</h1>
          </div>
          <div className="flex items-center gap-2 sm:my-10">
            <FaNodeJs className="text-green-900 text-3xl" />
            <h1>Node JS</h1>
          </div>

          <div className="flex items-center gap-2 sm:my-10">
            <SiMongodb className="text-green-900 text-3xl" />
            <h1>MongoDB</h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
