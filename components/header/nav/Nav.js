import Section from "../section/Section";
import style from "../section/Section.module.css";
import Logo from "../logo/Logo";
import navStyles from "./Nav.module.css";
import Wrapper from "../../Wrapper";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../../button/Button";

// function getWindowDimensions() {
//   let width;
//   let height;

//   if (typeof window !== "undefined") {
//     width = window.innerWidth;
//     height = window.innerHeight;
//   }
//   return {
//     width,
//     height,
//   };
// }

// function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(
//     getWindowDimensions()
//   );

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return windowDimensions;
// }

const Nav = () => {
  const [className, setClassName] = useState("header_nav_wrapper_close");

  const hamburger = (
    <div className={navStyles.hamburger} onClick={showNav}>
      <Image width={30} height={30} src="/Images/whiteHam.svg" />
    </div>
  );

  function showNav() {
    setClassName("header_nav_wrapper_open");
  }

  function closeNav() {
    setClassName("header_nav_wrapper_close");
  }
  // const breakpoint = 920;

  // const { height, width } = useWindowDimensions();
  return (
    <>
      <Wrapper>
        {/* className={navStyles.container} */}
        <div className={navStyles.container}>
          <Logo />
          {hamburger}
          <Section />

          <div className={className}>
            <span onClick={closeNav} className={style.header_close}>
              X
            </span>

            <div className={style.header_nav}>
              <Link href="/">
                <a className={style.nav_link}>Home</a>
              </Link>

              <Link href="/about">
                <a className={style.nav_link}>About Us</a>
              </Link>

              <div className={style.dropdown}>
                <span className={(style.nav_link, style.dropbtn)}>
                  Services {"\u25BE"}
                </span>
                <div className={style.dropdownContent}>
                  <Link href="/services/massages">
                    <a>Massages</a>
                  </Link>
                  <Link href="/services/mani_pedi">
                    <a>Manicure & Pedicure</a>
                  </Link>
                </div>
              </div>

              <Link href="/bookapp">
                <a className={style.nav_link}>
                  <Button value="Book Now" />
                </a>
              </Link>
            </div>
          </div>

          {/* {width > breakpoint ? <Section /> : hamburger} */}
        </div>
      </Wrapper>
    </>
  );
};

export default Nav;
