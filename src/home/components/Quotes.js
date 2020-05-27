import React, { useState } from "react";


import person1 from '../../img/photos/person1.jpg'

import "./quotes.scss";

const Slider = () => {
  const [x, setX] = useState(0);
  const quotes = [
    {
      id: 1,
      writer: "Ferid Hemidov",
      image: person1,
      description:
        "Men innjoyu sevirem, ora ilk getdiyim gunden neler oldu anlatamam",
    },
    {
      id: 2,
      writer: "Ferid Hemidov",
      image: person1,
      description:
        "Men innjoyu sevirem, ora ilk getdiyim gunden neler oldu anlatamam.Men innjoyu sevirem, ora ilk getdiyiMen innjoyu sevirem, ora ilk getdiyim gunden neler oldu anlatamam.m gunden neler oldu anlatamam.. Men innjoyu sevirem, ora ilk getdiyim gunden neler oldu anlatamam",
    },
    {
      id: 3,
      writer: "Ferid Hemidov",
      image: person1,
      description:
        "Men innjoyu sevirem, ora ilk getdiyim gunden neler oldu anlatamam",
    },
  ];


  const goLeft = () => {
    x === 0 ? setX(-100 * (quotes.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (quotes.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className='quoter'>
      {quotes.map((quote) => {
        return (
          <div
            key={quote.id}
            className='quote center'
            style={{ transform: `translateX(${x}%)` }}>
            <img src={quote.image} alt={quote.writer} />
            <h4 className="quote-writer">{quote.writer}</h4>
            <p> {quote.description} </p>
          </div>
        );
      })}
      <button id='goLeft' onClick={goLeft}>
        <i className='fa fa-chevron-left'></i>
      </button>
      <button id='goRight' onClick={goRight}>
        <i className='fa fa-chevron-right'></i>
      </button>
    </div>
  );
};

export default Slider;
