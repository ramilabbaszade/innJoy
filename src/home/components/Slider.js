import React, { useState, useEffect } from "react";
import ImgComp from "./ImgComp";
import { Link } from "react-router-dom";

import "./slider.scss";

const Slider = (props) => {
  const [x, setX] = useState(0);
  const slides = props.slides;

  const goLeft = () => {
    x === 0 ? setX(-100 * (slides.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (slides.length - 1) ? setX(0) : setX(x - 100);
  };
  useEffect(() => {
    setTimeout(() => {
      goRight();
    }, 5000);
    return clearTimeout();
  });

  return (
    <div className='slider'>
      {props.slides.map((slide) => {
        return (
          <div
            key={slide.id}
            className='slide'
            style={{ transform: `translateX(${x}%)` }}>
            <ImgComp src={slide.image} />
          </div>
        );
      })}
      <button id='goLeft' onClick={goLeft}>
        <i className='fa fa-chevron-left'></i>
      </button>
      <button id='goRight' onClick={goRight}>
        <i className='fa fa-chevron-right'></i>
      </button>
      <div className='slider-online center'>
        <Link to='/'>Online dərs</Link>
      </div>
    </div>
  );
};

export default Slider;
