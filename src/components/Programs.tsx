import React from "react";
import { FaCrown } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";

import SectionHeader from "./SectionHeader";
import { programs } from "../assets/data";
import Card from "./ui/Card";
import { Link } from "react-router-dom";

type Props = {};

const Programs = (props: Props) => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHeader icon={FaCrown} title="Programs" />
        <div className="programs__wrapper">
          {programs.map((program) => (
            <Card key={program.id} className="programs__program">
              <span>{<program.icon />}</span>
              <h4>{program.title}</h4>
              <small>{program.info}</small>
              <Link to={program.path} className="btn sm">
                Learn More <AiFillCaretRight />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
