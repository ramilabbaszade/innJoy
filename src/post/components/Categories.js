import React from "react";

import "./Categories.scss";

const DUMMY_CATEGORIES = [
  { id: "1", name: "english" },
  { id: "2", name: "russian" },
  { id: "3", name: "ielts" },
  { id: "4", name: "sat" },
];

const Categories = () => {
  return (
    <div className='category'>
    <hr/>
      <h2> Other categories </h2>
      {DUMMY_CATEGORIES.map((category) => {
        return (
          <span id={category.id} className='category__tag'>
            {category.name}
          </span>
        );
      })}
    </div>
  );
};

export default Categories;
