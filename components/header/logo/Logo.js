import Image from "next/image";
import Link from "next/link";
import companyLogo from "../../../public/Images/logo.svg";
import logostyles from "./Logo.module.css";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <a className={logostyles.headerLogo}>
          <Image
            src={companyLogo}
            alt="compony logo"
            height={50}
            width={50}
            className={logostyles.logo}
          />
          <span className={logostyles.companyName}>PerfectHealth</span>
        </a>
      </Link>
    </>
  );
};

export default Logo;
