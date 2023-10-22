import { useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import Card from "./ui/Card";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from "../assets/data";
import SectionHeader from "./SectionHeader";

type Props = {};

const Testimonials = (props: Props) => {
  const [index, setIndex] = useState(0);
  const { id, name, avatar, job, quote } = testimonials[index];

    const prevTestimonialHanlder = () => {
        setIndex((index - 1 + testimonials.length) % testimonials.length)
    }

    const nextTestimonialHandler = () => {
        setIndex((index + 1) % testimonials.length)
    }

  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHeader
          icon={ImQuotesLeft}
          title="Testimonials"
          className="testimonials__head"
        />
        <Card className="testimonial">
          <div className="testimonial__avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial__quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </Card>
        <div className="testimonials__btn-container">
          <button
            className="testimonials__btn"
            onClick={prevTestimonialHanlder}
          >
            <IoIosArrowDropleftCircle />
          </button>
          <button className="testimonials__btn" 
          onClick={nextTestimonialHandler}>
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
