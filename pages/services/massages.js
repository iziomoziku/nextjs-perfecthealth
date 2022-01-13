import Hero from "../../components/header/hero/hero";
import massageStyles from "../../styles/massage.module.css";
import indexStyles from "../../styles/index.module.css";
import aboutStyles from "../../styles/about.module.css";
import Styling from "../../components/styling/Styling";
import Button from "../../components/button/Button";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Massages = () => {
  const title = "Massage";
  const content =
    "Please enjoy our selection of massage options. From deep tissue massages to Swedish and hot massages. We have what you need.";

  const massage_title = "What we do";
  const description =
    "We have your massage and beauty needs under one place. From a variety of massages to an assortment of manicure and pedicure services. We aim to provide the full spa experience for our customers.";
  const _false = false;
  const image = "/Images/Rectangle_68.jpg";

  const massage_title2 = "Our Journey";
  const description2 =
    "We aim to put our customers' needs and priorities first and foremost. That is why we offer all types of massage specialists to ensure you are comfortable at all times. Take advantage of one of the many massage treatments we have to offer including: Deep Tissue, Swedish, and Hot massage. We will melt your tensions away and leave you feeling relaxed and rejuvenated.";
  const _true = true;
  const image2 = "/Images/massage_wellness.jpeg";

  return (
    <>
      <Head>
        <title>Massages | PerfectHealth</title>
      </Head>
      <div className={indexStyles.wrapper}>
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

      <div className="banner"></div>

      <div className="x">
        <h2 className="title_h2">Our Massage Fees</h2>

        <div className={massageStyles.fee_container}>
          <div className={massageStyles.fee_wrapper}>
            <div className={massageStyles.image_wrapper}>
              <Image
                width={150}
                height={150}
                src="/Images/Deep_tissue_massage.jpeg"
              />
              <span className={massageStyles.fees}>$100 per visit</span>
            </div>
            <div className={massageStyles.massage_container}>
              <h3 className="title_h3">Deep tissue massage</h3>
              <p>
                Deep tissure massage applies much more pressure than swedish
                massage to release tension deep within the muscles and fascia.
                This is intended mainly for working out deep muscle tension or
                aiding recovery from a muscle strain.
              </p>
              <Link href="/bookapp">
                <a>
                  <Button value="Book a massage" />
                </a>
              </Link>
            </div>
          </div>

          <div className={massageStyles.fee_wrapper}>
            <div className={massageStyles.image_wrapper}>
              <Image
                width={150}
                height={150}
                src="/Images/swedish_massage.jpg"
              />
              <span className={massageStyles.fees}>$90 per visit</span>
            </div>
            <div className={massageStyles.massage_container}>
              <h3 className="title_h3">Swedish massage</h3>
              <p>
                Swedish massage is a more relaxing massage that uses long
                strokes and light to firm pressure to alleviate light musscle
                tension and stress.
              </p>
              <Link href="/bookapp">
                <a>
                  <Button value="Book a massage" />
                </a>
              </Link>{" "}
            </div>
          </div>

          <div className={massageStyles.fee_wrapper}>
            <div className={massageStyles.image_wrapper}>
              <Image width={150} height={150} src="/Images/hot_stone.jpg" />
              <span className={massageStyles.fees}>$100 per visit</span>
            </div>
            <div className={massageStyles.massage_container}>
              <h3 className="title_h3">Hot stone massage</h3>
              <p>
                This type of massage is similar to the swedish massage. The only
                difference is the use of hot stones which can be placed on your
                spine, stomach, chest etc. The hot stone massage relieve more
                muscle tension than the swedish massage because of the added
                heat.
              </p>
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

export default Massages;
