import profile from "../img/profile.png";
import { useState } from "react";

import Navbar from "./Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import { titleAnim, photoAnim, fade } from "../animation";

const AboutMe = () => {
  return (
    <div className="aboutme grid grid-cols-1 h-full mb-10 md:!mb-0">
      <Navbar />
      <div className="main-section bg-stone-900 h-full w-full grid grid-cols-1 align-content-center content-center md:grid-cols-2">
        <div className="stone900  h-full w-full  grid content-center md:justify-items-end md:h-screen">
          <div className="flex flex-col justify-center items-center md:mb-3 md:justify-center md:items-end md:px-5">
            <motion.div className="flex flex-col items-center">
              <div class="avatar justify-end w-36 md:w-48 mb-3 sm:!mb-5 md:!mb-8">
                <div class="rounded-full ring ring-emerald-900 ring-offset-black ring-offset-4">
                  <motion.img
                    src={profile}
                    alt={profile}
                    variants={photoAnim}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <motion.div
                  variants={photoAnim}
                  className="mockup-code bg-green-900 mockup-code:before text-black"
                >
                  <pre className="text-center">
                    <code className="text-white text-sm">
                      while(!(succeed = try()))
                    </code>
                  </pre>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="stone300 h-full w-full text-stone-300/50 grid content-start md:justify-items-start md:content-center md:!bg-stone-300 md:!text-stone-900">
          <div
            className="flex-1 flex sm:h-full justify-center items-center md:justify-center md:justify-start md:px-5
          "
          >
            <motion.div class="flex flex-col items-center md:h-full md:items-start">
              <div>
                <motion.h1
                  variants={titleAnim}
                  className="text-base font-bold mt-3 md:text-lg"
                >
                  Hi There !
                </motion.h1>
              </div>
              <div className="text-lg md:text-2xl ">
                <motion.h1 variants={titleAnim} className="font-bold">
                  I am{" "}
                  <span className="text-pink-900 text-2xl font-medium md:text-4xl">
                    LINH BUI
                  </span>
                </motion.h1>
              </div>
              <div>
                <motion.h2
                  variants={titleAnim}
                  className="text-2xl text-green-900 md:text-3xl "
                >
                  Front End Web Developer
                </motion.h2>
              </div>
              <div
                className="my-2 px-10 text-sm 
              sm:text-md md:!px-0 md:text-md lg:text-lg"
              >
                <motion.p variants={fade} className="text-center md:!text-left">
                  With a Graphic Design background, I found myself at the
                  intersection of design ideals and teachnical reality. I am
                  fueled by coffee and driven by passion. When I am not working,
                  you can find me cooking, cuddling with my 2 dogs and taking
                  care of 70 houseplants.
                </motion.p>
              </div>
              <motion.div className="flex flex-col items-center gap-4 md:flex-row sm:gap-6">
                <motion.button
                  variants={fade}
                  className="btn btn-outline rounded-full border-2 border-green-800 text-green-800 hover:bg-green-800 px-5 mt-3 md:mt-3"
                >
                  <a
                    href={process.env.PUBLIC_URL + "/LinhBui.pdf"}
                    alt="LinhBui-resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-stone-300"
                  >
                    Resume
                  </a>
                </motion.button>
                <motion.div variants={fade}>
                  <ul className="flex mt-1 gap-3 text-3xl sm:mt-3">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/linh-bui-525129219/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:text-green-900 hover:text-green-900"
                      >
                        <FaLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/Linhbui88"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:text-green-900  hover:text-green-900"
                      >
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/LinhbuiDev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:text-green-900  hover:text-green-900"
                      >
                        <FaTwitterSquare />
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col justify-center bg-stone-900 py-3 sm:flex-row sm:!py-0 md:flex-row lg:flex-row xl:flex-row 2xl:flex-row h-screen">
        <div className="flex-1 flex justify-center items-center sm:justify-center sm:items-center md:justify-end bg-stone-900 text-stone-300/50 h-full px-4">
          <div className="flex flex-col h-full justify-center sm:justify-center items-center sm:mb-3">
            <div className="flex flex-col items-center">
              <div class="avatar justify-end w-24 sm:w-48">
                <div class="rounded-full ring ring-emerald-900 ring-offset-black ring-offset-4">
                  <img src={profile} alt={profile} />
                </div>
              </div>
              <div className="flex flex-col items-center mt-4 sm:!mt-5">
                <div className="mockup-code bg-green-900 mockup-code:before text-black">
                  <pre className="text-center">
                    <code className="text-white text-sm">
                      while(!(succeed = try()))
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center bg-stone-900 text-stone-300/50 h-full sm:!bg-stone-300 sm:text-green-900 sm:justify-center items-center md:justify-start h-full px-4">
          <div
            className="flex flex-col h-full sm:justify-center items-center
          "
          >
            <div class="flex flex-col items-center sm:items-start">
              <div>
                <p className="text-base sm:text-lg">Hi There !</p>
              </div>
              <div>
                <h1 className="text-xl sm:text-3xl">
                  I am{" "}
                  <span className="text-pink-900 text-2xl sm:text-4xl">
                    Linh Bui
                  </span>
                </h1>
              </div>
              <div>
                <h2 className="text-2xl text-green-600 sm:text-4xl sm:text-stone-800">
                  Front End Web Developer
                </h2>
              </div>
              <div className="my-2 text-sm sm:text-base">
                <p>
                  With a Graphic Design background, I found myself at the
                  intersection of design ideals and teachnical reality. I am
                  also a coffeeholic who is currently based in Michigan, USA.
                  When I am not working, you can find me cooking, cuddling with
                  my 2 dogs and taking care of 70 houseplants.
                </p>
              </div>
              <div className="flex flex-col items-center sm:flex-row gap-6">
                <button className="btn btn-outline rounded-full border-2 border-green-800 text-green-800 hover:bg-green-800 px-5 mt-3">
                  <a
                    href={process.env.PUBLIC_URL + "/LinhBui.pdf"}
                    alt="LinhBui-resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-stone-300"
                  >
                    Resume
                  </a>
                </button>
                <div>
                  <ul className="flex mt-3 gap-3 text-3xl">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/linh-bui-525129219/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-900"
                      >
                        <FaLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/Linhbui88"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-900"
                      >
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/LinhbuiDev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-900"
                      >
                        <FaTwitterSquare />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutMe;
