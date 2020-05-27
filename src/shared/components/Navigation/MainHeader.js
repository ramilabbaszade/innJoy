import React, {useState, useEffect} from "react";

import "./MainHeader.scss";

const MainHeader = (props) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY >= 130;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return <header className={`main-header ${props.transparent}`} style={scroll?{background:"white"}:null}> {props.children} </header>;
};

export default MainHeader;
