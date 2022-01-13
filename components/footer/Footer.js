import footerStyles from "./Footer.module.css";
import Link from "next/link";
import Button from "../button/Button";
import Wrapper from "../Wrapper";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <Wrapper>
        <div className={footerStyles.wrapper}>
          <div className={footerStyles.navigation}>
            <h3 className={footerStyles.nav_title}>Navigation</h3>
            <div className={footerStyles.nav}>
              <Link href="/">
                <a>Home</a>
              </Link>

              <Link href="/about">
                <a>About Us</a>
              </Link>

              <Link href="/services/massages">
                <a>Massages</a>
              </Link>

              <Link href="/services/mani_pedi">
                <a>Manicure & Pedicure</a>
              </Link>
            </div>
          </div>

          <div className={footerStyles.contact}>
            <h3 className={footerStyles.contact_title}>Contact</h3>
            <div className={footerStyles.nav}>
              <span>Toronto, ON. Canada</span>
              <span>777-444-333</span>
              <span>spa@yahoo.com</span>
              <span className={footerStyles.bold}> Monday - Saturday </span>
              <span>9:00am - 7:00am</span>
              <span>
                {" "}
                <span className={footerStyles.bold}>Sunday -</span> closed
              </span>
            </div>
          </div>

          <div className={footerStyles.form}>
            <h3 className={footerStyles.form_title}>Get in touch</h3>
            <form className={footerStyles.form_container}>
              <input
                type="text"
                name="Name"
                id="Name"
                placeholder="Your Name*"
                className={footerStyles.modifier}
              />
              <input
                type="text"
                name="Phone"
                id="Phone"
                placeholder="Your Phone*"
                className={footerStyles.modifier}
              />
              <input
                type="text"
                name="Email"
                id="Email"
                placeholder="Your Email*"
                className={footerStyles.modifier}
              />
              <Button value="Send" />
            </form>
          </div>
        </div>

        {/* <p>
          <Link href="/signup">
            <a className={footerStyles.bold}>Sign up with us</a>
          </Link>{" "}
          and get 50% off after every 5 appionments
        </p> */}
      </Wrapper>
    </footer>
  );
};

export default Footer;
