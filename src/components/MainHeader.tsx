import React from "react";
import { Link } from "react-router-dom";
import image from '../assets/images/main_header.png'

type Props = {};

const MainHeader = (props: Props) => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            aperiam sint? Enim fuga nam autem tenetur debitis adipisci libero
            praesentium?
          </p>
          <Link to='/plans' className='btn lg'>
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;