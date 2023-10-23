import Header from "../../components/Header";
import "./about.css";

import HeaderImage from "../../assets/images/header_bg_1.jpg";
import StoryImage from "../../assets/images/about1.jpg";
import VisionImage from "../../assets/images/about2.jpg";
import MissionImage from "../../assets/images/about3.jpg";


const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
        maiores. Animi quaerat et beatae hic quia atque delectus sunt
        necessitatibus?
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              consectetur nulla rerum explicabo corporis harum vel qui
              recusandae beatae facere?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              ipsam itaque a incidunt omnis, esse recusandae adipisci impedit
              odio eveniet.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, unde
              cumque perferendis suscipit deserunt incidunt.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              consectetur nulla rerum explicabo corporis harum vel qui
              recusandae beatae facere?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              ipsam itaque a incidunt omnis, esse recusandae adipisci impedit
              odio eveniet.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              consectetur nulla rerum explicabo corporis harum vel qui
              recusandae beatae facere?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              ipsam itaque a incidunt omnis, esse recusandae adipisci impedit
              odio eveniet.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, unde
              cumque perferendis suscipit deserunt incidunt.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
