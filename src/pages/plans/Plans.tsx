import Header from "../../components/Header";
import HeaderImage from "../../assets/images/header_bg_4.jpg";
import Card from "../../components/ui/Card";
import { plans } from "../../assets/data";

import "./plans.css";

const Plans = () => {
  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt porro
        quae voluptatem voluptate quaerat blanditiis harum sapiente consequatur
        temporibus natus?
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {
            plans.map(plan => (
              <Card key={plan.id} className="plan">
                <h3>{plan.name}</h3>
                <small>{plan.desc}</small>
                <h1>{`$${plan.price}`}</h1><h2>/mo</h2>
                <h4>Features</h4>
                {
                  plan.features.map((feature, index) => (
                    <p key={index} className={!feature.feature ? 'disabled' : ''}>
                      {feature.feature}
                    </p>
                  ))
                }
                <button className="btn lg">Choose Plan</button>
              </Card>
            ))
          }
        </div>
      </section>
    </>
  );
};

export default Plans;
