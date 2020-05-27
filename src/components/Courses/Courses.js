import React from "react";

import './courses.scss'

const Courses = () => {
  return (
    <div className='courses'>
      <div className='price-table-wrapper'>
        <h1>İngilis dili/ Rus dili </h1>
        <div className='pricing-table'>
          <h2 className='pricing-table__header'>Individual</h2>
          <h3 className='pricing-table__price'>⋔50</h3>
          <a className='pricing-table__button' href='/'>
            Join Now!
          </a>
          <ul className='pricing-table__list'>
            <li>30 day free trial</li>
            <li>50gb storage space</li>
            <li>20% discount</li>
            <li>24 hour support</li>
          </ul>
        </div>
        <div className='pricing-table featured-table'>
          <h2 className='pricing-table__header'>Group</h2>
          <h3 className='pricing-table__price'>⋔80</h3>
          <a className='pricing-table__button' href='/'>
            Join Now!
          </a>
          <ul className='pricing-table__list'>
            <li>40 day free trial</li>
            <li>100gb storage space</li>
            <li>25% discount</li>
            <li>24 hour support</li>
          </ul>
        </div>
        <div className='pricing-table'>
          <h2 className='pricing-table__header'>Small Group</h2>
          <h3 className='pricing-table__price'>⋔130</h3>
          <a className='pricing-table__button' href='/'>
            Join Now!
          </a>
          <ul className='pricing-table__list'>
            <li>50 day free trial</li>
            <li>200gb storage space</li>
            <li>40% discount</li>
            <li>24 hour support</li>
          </ul>
        </div>
      </div>
      <div className='price-table-wrapper'>
        <h1>İELTS/TOEFL/SAT </h1>
        <div className='pricing-table'>
          <h2 className='pricing-table__header'>Individual</h2>
          <h3 className='pricing-table__price'>⋔50</h3>
          <a className='pricing-table__button' href='/'>
            Join Now!
          </a>
          <ul className='pricing-table__list'>
            <li>30 day free trial</li>
            <li>50gb storage space</li>
            <li>20% discount</li>
            <li>24 hour support</li>
          </ul>
        </div>
        <div className='pricing-table featured-table'>
          <h2 className='pricing-table__header'>Group</h2>
          <h3 className='pricing-table__price'>⋔80</h3>
          <a className='pricing-table__button' href='/'>
            Join Now!
          </a>
          <ul className='pricing-table__list'>
            <li>40 day free trial</li>
            <li>100gb storage space</li>
            <li>25% discount</li>
            <li>24 hour support</li>
          </ul>
        </div>
        <div className='pricing-table'>
          <h2 className='pricing-table__header'>Small Group</h2>
          <h3 className='pricing-table__price'>⋔130</h3>
          <a className='pricing-table__button' href='/'>
            Join Now!
          </a>
          <ul className='pricing-table__list'>
            <li>50 day free trial</li>
            <li>200gb storage space</li>
            <li>40% discount</li>
            <li>24 hour support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Courses;
