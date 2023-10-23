import Header from "../../components/Header";
import HeaderImage from "../../assets/images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import "./contact.css";

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
        reprehenderit, perferendis cumque doloremque rem officia!
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:julio.sanic.gt.256@gmail.com" target="_blank" rel="noreferrer noopener">
            <MdEmail />
            </a>
            <a href="https://m.me/mafer.miranda.18" target="_blank" rel="noreferrer noopener">
              <BsMessenger />
            </a>
            <a href="https://wa.me/+50258385370" target="_blank" rel="noreferrer noopener">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
