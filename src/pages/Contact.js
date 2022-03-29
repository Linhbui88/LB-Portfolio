import { FaEnvelope } from "react-icons/fa";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { ImEarth } from "react-icons/im";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
const Contact = () => {
  return (
    <div className="bg-stone-900">
      <div className="h-screen overflow-hidden">
        <motion.div
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
          className="flex-flex-col items-stretch h-full w-screen bg-stone-900 overflow-hidden"
        >
          <div className="bg-stone-300 h-fit">
            <Navbar />
          </div>
          <motion.div className="h-4/5 w-full flex flex-col justify-center items-center overflow-y-hidden">
            <div className="text-stone-300/50 text-lg md:text-xl flex flex-col gap-8">
              <motion.h1
                variants={titleAnim}
                className="text-2xl text-green-900 md:text-xl font-bold"
              >
                Get in touch
              </motion.h1>
              <motion.div
                variants={titleAnim}
                className="email flex items-center gap-2"
              >
                <FaEnvelope />
                <a href="mailto:linhbui.dev@gmail.com">
                  {" "}
                  linhbui.dev@gmail.com
                </a>
              </motion.div>
              <motion.div
                variants={titleAnim}
                className="phone flex items-center gap-2"
              >
                <BsPhoneVibrateFill />
                <a href="tel:313-583-7839">313-583-7839</a>
              </motion.div>
              <motion.div
                variants={titleAnim}
                className="location flex items-center gap-2"
              >
                <ImEarth /> Milan, Michigan 48160
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
