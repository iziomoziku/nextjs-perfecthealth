import Nav from "../nav/Nav";
import Button from "../../button/Button";
import heroStyles from "./Hero.module.css";
import Link from "next/link";

const Hero = (props) => {
  return (
    // <Wrapper>
    <div className={heroStyles.main_container}>
      <Nav />
      <div className={heroStyles.container}>
        <h1>{props.title}</h1>
        <p className={heroStyles.content}>{props.content}</p>
        <Link href="/bookapp">
          <a>
            <Button value="Book Now" />
          </a>
        </Link>
      </div>
    </div>
    // </Wrapper>
  );
};

export default Hero;
