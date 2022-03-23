import React from "react";
import girlswhocode from "../img/girlswhocode.png";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiGraphql } from "react-icons/si";

const Skills = () => {
  return (
    <div className="skills-section bg-stone-900 text-white flex flex-col justify-center items-center p-10  sm:flex-row-reverse justify-around sm:items-stretch sm:h-screen">
      <div className="girlswhocode mb-3">
        <img src={girlswhocode} alt="girls who code" className="w-36 sm:w-96" />
      </div>
      <div className="flex flex-col items-center sm:items-start sm:self-stretch">
        <div className="text-xl text-pink-500 sm:text-4xl">
          <h1> Skills</h1>
        </div>
        <div className="skills m-3 font-bold grid grid-cols-1 gap-8 xl:grid-cols-2 lg:grids-cols-2 md:grid-cols-2 sm: grid-cols-2 justify-center items-center text-stone-300/50">
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
            <h1>Node JS // Express JS</h1>
          </div>

          <div className="flex items-center gap-2 sm:my-10">
            <SiMongodb className="text-green-900 text-3xl" />
            <h1>MongoDB</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
