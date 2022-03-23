import profile from "../img/profile.png";
import Header from "./Header";
import Navbar from "./Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const AboutMe = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <Navbar />
      <div className="bg-stone-900 grid grid cols-1 sm:grids-col-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 ">
        <div className="bg-stone-900 text-stone-300 md:bg-stone-900 md:text-stone-300">
          avarta
        </div>
        <div className="bg-stone-900 text-stone-300 md:bg-stone-300 md:text-stone-900">
          info
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
    </>
  );
};

export default AboutMe;
