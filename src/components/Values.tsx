import Image from "../assets/images/values.jpg";
import SectionHeader from "./SectionHeader";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../assets/data";
import Card from "./ui/Card";

type Props = {};

const Values = (props: Props) => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
          <img src={Image} alt="Values Image" />
          </div>
        </div>
        <div className="values__right">
          <SectionHeader icon={GiCutDiamond} title="Values" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            cupiditate cumque, ea earum quibusdam magni explicabo, nemo totam
            deserunt amet alias incidunt ipsa eaque non minus reprehenderit
            molestias aut itaque.
          </p>
          <div className="values__wrapper">
            {
                values.map(value => (
                    <Card className="values__value" key={value.id}>
                        <span>{<value.icon />}</span>
                        <h4>{value.title}</h4>
                        <small>{value.desc}</small>
                    </Card>
                ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
