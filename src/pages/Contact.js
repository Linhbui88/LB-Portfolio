import { FaEnvelope } from "react-icons/fa";

import { ImLocation } from "react-icons/im";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { ImEarth } from "react-icons/im";
import "../shared/Section.css";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="section">
      <div className="section-head">
        <span>SAY HELLO</span>
        <h2>CONTACT</h2>
      </div>
      <div className="section-container">
        <div className="section-container-contact">
          <p>Get in touch</p>
          <div className="contact">
            <div className="contact-email">
              <FaEnvelope />
              <a href="mailto:linhbui.dev@gmail.com"> linhbui.dev@gmail.com</a>
            </div>
            <div class="contact-tel">
              <BsPhoneVibrateFill />
              <a href="tel:313-583-7839">313-583-7839</a>
            </div>
          </div>
          <p className="contact-location">
            <ImLocation /> Milan, Michigan 48160
          </p>
        </div>
      </div>
      <div className="text-base text-green-900 my-3">
        <div className="email flex items-center gap-2">
          <FaEnvelope />
          <a href="mailto:linhbui.dev@gmail.com"> linhbui.dev@gmail.com</a>
        </div>
        <div class="phone flex items-center gap-2">
          <BsPhoneVibrateFill />
          <a href="tel:313-583-7839">313-583-7839</a>
        </div>
        <div className="location flex items-center gap-2">
          <ImEarth /> Milan, Michigan 48160
        </div>
      </div>
    </div>
  );
};

export default Contact;
