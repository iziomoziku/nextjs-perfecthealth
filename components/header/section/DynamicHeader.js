import React, { useState } from "react";
import Section from "./Section";
import sectionStyles from "./Section.module.css";
import hamburgerMenu from "../../../public/Images/whiteHam.svg";

const DynamicHeader = () => {
  //   const [width, setWidth] = React.useState(window.innerWidth);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 970;
  const hamburger = (
    <img src={hamburgerMenu} alt="" class={sectionStyles.header_hamburger} />
  );

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ? (
    <img src={hamburgerMenu} alt="" class={sectionStyles.header_hamburger} />
  ) : (
    <Section />
  );
};

export default DynamicHeader;
