import Hero from "../components/header/hero/hero";
import indexStyles from "../styles/index.module.css";
import Image from "next/image";
import Button from "../components/button/Button";
import Link from "next/link";
import Review from "../components/review/Review";
import Head from "next/head";

const index = () => {
  const title = "Your beauty is our top priority";
  const content =
    "Enjoy our massage, facial, manicure and pedicure services in a relaxing environment";

  return (
    <>
      <Head>
        <title>Home | PerfectHealth</title>
      </Head>

      <div className={indexStyles.wrapper}>
        <Hero title={title} content={content} />
      </div>

      <div className="x">
        <div className="section_wrapper">
          <h2 className="title_h2">Benefits you get from us</h2>

          <div className={indexStyles.benefit_wrapper}>
            <div className={indexStyles.content}>
              <h3 className="title_h3">Experience</h3>
              <p className={indexStyles.content_description}>
                All our specialists are fully licensed and certified.
              </p>
            </div>

            <div className={indexStyles.content}>
              <h3 className="title_h3">Comfort & Privacy</h3>
              <p className={indexStyles.content_description}>
                We take the utmost care to provide out client a clean and safe
                environment. Where their privacy is taken seriously.
              </p>
            </div>

            <div className={indexStyles.content}>
              <h3 className="title--h3">Latest Products</h3>
              <p className={indexStyles.content_description}>
                We invest in our company to ensure we are providing the best and
                latest products and technique the industry has to offer.
              </p>
            </div>
          </div>
        </div>

        <div className="section_margin">
          <h2 className="title_h2">Our Services</h2>

          <div className={indexStyles.service_wrapper}>
            <div
              className={(indexStyles.service_container, indexStyles.mani_pedi)}
            >
              <div className={indexStyles.image}>
                <Image
                  height={350}
                  width={350}
                  src="/Images/pedi.jpeg"
                  className={indexStyles.image}
                />
              </div>

              <div className={indexStyles.service_content}>
                <h3 className="title_h3">Manicures & Pedicure</h3>
                <p className={indexStyles.service_content_description}>
                  Get that spicy look on your nails for any special occasion.
                </p>
                <Link href="/services/mani_pedi">
                  <a>
                    <Button value="More Info" />
                  </a>
                </Link>
              </div>
            </div>

            <div
              className={(indexStyles.service_container, indexStyles.massage)}
            >
              <div className={indexStyles.image}>
                <Image
                  height={350}
                  width={350}
                  src="/Images/massage.jpg"
                  className={indexStyles.image}
                />
              </div>

              <div className={indexStyles.service_content}>
                <h3 className="title_h3">Massages</h3>
                <p className={indexStyles.service_content_description}>
                  Keep your health on point by booking with us for a relaxing
                  massage.
                </p>
                <Link href="/services/massages">
                  <a>
                    <Button value="More Info" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Review />
      </div>

      <div className={indexStyles.CTA}>
        <div className="x">
          <div className={indexStyles.CTA_wrapper}>
            <h2 className={indexStyles.CTA_title}>
              Your beauty, comfort and satisfaction are our top priority
            </h2>
            <p>
              Come relax in our clean hygenic environment while we pamper and
              take good care of you.
            </p>
            <Link href="/bookapp">
              <a>
                <Button value="Book Now" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
