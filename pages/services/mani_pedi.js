import Hero from "../../components/header/hero/hero";
import massageStyles from "../../styles/massage.module.css";
import Link from "next/link";
import Styles from "../../styles/mani.module.css";
import aboutStyles from "../../styles/about.module.css";
import Styling from "../../components/styling/Styling";
import Button from "../../components/button/Button";
import Image from "next/image";
import Head from "next/head";

const ManiPedi = () => {
  const title = "Manicure & Pedicure";
  const content =
    "Please enjoy our selection of pedicure options. From french manicures to polish pedicure application. We have what you need.";

  const massage_title = "What we do";
  const description =
    "We have your massage and beauty needs under one place. From a variety of massages to an assortment of manicure and pedicure services. We aim to provide the full spa experience for our customers.";
  const _false = false;
  const image = "/Images/Manicure.jpeg";

  const massage_title2 = "Our Journey";
  const description2 =
    "We aim to put our customers' needs and priorities first and foremost. That is why we offer all types of massage specialists to ensure you are comfortable at all times. Take advantage of one of the many massage treatments we have to offer including: Deep Tissue, Swedish, and Hot massage. We will melt your tensions away and leave you feeling relaxed and rejuvenated.";
  const _true = true;
  const image2 = "/Images/nail_mani.jpg";

  return (
    <>
      <Head>
        <title>Manicure & Pedicure | PerfectHealth</title>
      </Head>
      <div className={Styles.wrapper}>
        <Hero title={title} content={content} />
      </div>

      <div className="section_wrapper">
        <Styling
          title={massage_title}
          description={description}
          image={image}
          num={_false}
        />

        <div className={aboutStyles.divider}></div>
        <div className="secondaryBackgroud">
          <Styling
            title={massage_title2}
            description={description2}
            image={image2}
            num={_true}
          />
        </div>
      </div>

      <div className="mani_banner"></div>

      <div className="x">
        <h2 className="title_h2">Our Manicure and Pedicure Fees</h2>

        <div className={massageStyles.fee_container}>
          <div className={massageStyles.fee_wrapper}>
            <div className={massageStyles.image_wrapper}>
              <Image
                width={150}
                height={150}
                priority="true"
                src="/Images/pedi.jpeg"
              />
              <span className={massageStyles.fees}>$100 per visit</span>
            </div>
            <div className={massageStyles.massage_container}>
              <h3 className="title_h3">Manicure</h3>
              <span>Services Includes</span>
              <ul className="fee-manicure">
                <div className="fee-service">
                  <li>
                    <span>Classic Manicure</span>
                  </li>
                  <span>$22</span>
                </div>

                <div className="fee-service">
                  <li>
                    <span>French Manicure</span>
                  </li>
                  <span>$27</span>
                </div>
              </ul>
              <Link href="/bookapp">
                <a>
                  <Button value="Book a massage" />
                </a>
              </Link>{" "}
            </div>
          </div>

          <div className={massageStyles.fee_wrapper}>
            <div className={massageStyles.image_wrapper}>
              <Image width={150} height={150} src="/Images/pedicure.jpg" />
              <span className={massageStyles.fees}>$90 per visit</span>
            </div>
            <div className={massageStyles.massage_container}>
              <h3 className="title_h3">Pedicure</h3>
              <span>Services Includes</span>
              <ul className="fee-manicure">
                <div className="fee-service">
                  <li>
                    <span>Classic Pedicure</span>
                  </li>
                  <span>$33</span>
                </div>

                <div className="fee-service">
                  <li>
                    <span>Polish Application</span>
                  </li>
                  <span>$15</span>
                </div>
              </ul>
              <Link href="/bookapp">
                <a>
                  <Button value="Book a massage" />
                </a>
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManiPedi;
