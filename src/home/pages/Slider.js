import React, { useState, useEffect } from "react";
import ImgComp from "./ImgComp";

import p1 from "../../assets/img/fullscreen1.jpg";
import p2 from "../../assets/img/fullscreen2.jpg";
import p3 from "../../assets/img/edu.jpg";
import p4 from "../../assets/img/fullscreen1.jpg";

import "./slider.scss";

const Slider = () => {
  const [x, setX] = useState(0);

  let sliderArr = [
    <ImgComp src={p1} />,
    <ImgComp src={p2} />,
    <ImgComp src={p3} />,
    <ImgComp src={p4} />,
  ];

  useEffect(()=>{
    setTimeout(()=>(goRight()),5000)
  })

  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className='slider'>
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className='slide'
            style={{ transform: `translateX(${x}%)` }}>
            {item}
          </div>
        );
      })}
      <button id='goLeft' onClick={goLeft}>
        <i class='fa fa-chevron-left'></i>
      </button>
      <button id='goRight' onClick={goRight}>
        <i class='fa fa-chevron-right'></i>
      </button>
    </div>
  );
};

export default Slider;
