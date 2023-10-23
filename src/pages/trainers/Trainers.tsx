import Header from "../../components/Header";
import HeaderImage from "../../assets/images/header_bg_5.jpg";
import { trainers } from "../../assets/data";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Trainer from "../../components/Trainer";

import "./trainers.css";

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        veritatis, impedit ab exercitationem vero quia corporis aperiam
        perferendis quas repellendus. Deleniti, harum ad qui ab cupiditate
        beatae velit provident voluptas.
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {
            trainers.map(trainer => (
              <Trainer 
                key={trainer.id} 
                image={trainer.image}
                job={trainer.job} 
                name={trainer.name}
                socials={[
                  {
                    icon: BsInstagram,
                    link: trainer.socials[0]
                  },
                  {
                    icon: AiOutlineTwitter,
                    link: trainer.socials[1]
                  },
                  {
                    icon: FaFacebook,
                    link: trainer.socials[2]
                  },
                  {
                    icon: FaLinkedin,
                    link: trainer.socials[3]
                  }
                ]}
              />

             
            ))
          }
        </div>
      </section>
    </>
  );
};

export default Trainers;
