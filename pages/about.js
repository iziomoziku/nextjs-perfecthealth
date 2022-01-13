// import Nav from "../components/header/nav/Nav";
import indexStyles from "../styles/index.module.css";
import aboutStyles from "../styles/about.module.css";
import Image from "next/image";
import Button from "../components/button/Button";
import Link from "next/link";
import Review from "../components/review/Review";
import Hero from "../components/header/hero/hero";
import Styling from "../components/styling/Styling";
import { useState } from "react";
import Head from "next/head";

const About = () => {
  const starter =
    "Jordyn graduated from Marvel Beauty School with a aesthetics\
  and makeup artistry diploma and completed her certification in\
  Medical Esthetics from the Canadian Beauty College. After six\
  years of skin care, Jordyn pursued her passion for relaxation\
  massage and has been happily serving clients in the field for\
  eight years.";
  let originalNameTag = (
    <div className="name_wrapper">
      <input
        type="button"
        value="Jordyn"
        className={aboutStyles.specialists_content_on}
        onClick={displayContent}
      />
      <input
        type="button"
        value="Jennifer"
        className={aboutStyles.specialists_name}
        onClick={displayContent}
      />
      <input
        type="button"
        value="Cassidy"
        className={aboutStyles.specialists_name}
        onClick={displayContent}
      />
    </div>
  );
  const [nameTag, setNameTag] = useState(originalNameTag);
  const [specialistsDescription, setSpecialistsDescription] = useState(starter);

  const title = "Your beauty is our top priority";
  const content =
    "Enjoy our massage, facial, manicure and pedicure services in a relaxing environment";

  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida\
    mattis ullamcorper neque sapien ultrices vulputate tincidunt quam.\
    Lacus nunc dignissim urna, non arcu. Egestas commodo, at placerat\
    nisl hendrerit arcu feugiat. Lacus nunc dignissim urna, non arcu.\
    Egestas commodo, at placerat nisl hendrerit arcu feugiat.";

  const image = "/Images/beauty_package.jpg";
  const about_title = "What we do";

  const description2 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida\
  mattis ullamcorper neque sapien ultrices vulputate tincidunt quam.\
  Lacus nunc dignissim urna, non arcu. Egestas commodo, at placerat\
  nisl hendrerit arcu feugiat. Lacus nunc dignissim urna, non arcu.\
  Egestas commodo, at placerat nisl hendrerit arcu feugiat.";

  const image2 = "/Images/face_mask.jpg";
  const about_title2 = "Our Journey";

  const _false = false;
  const _true = true;

  function displayContent(e) {
    let Description;
    if (e.target.value === "Jordyn") {
      Description =
        "Jordyn graduated from Marvel Beauty School with a aesthetics\
      and makeup artistry diploma and completed her certification in\
      Medical Esthetics from the Canadian Beauty College. After six\
      years of skin care, Jordyn pursued her passion for relaxation\
      massage and has been happily serving clients in the field for\
      eight years.";
    } else if (e.target.value === "Cassidy") {
      Description =
        "Cassidy has always been interested in the health care field and has been working and volunteering alongside several health care practitioners for the past 10 years. Her studies included skin theory, anatomy, chemical peels, microdermabrasion, facials and relaxation massage. She was passionate about her future career and ensured she learned all forms of esthetics. She comleted her Esthetician diploma from Lambton College";
    } else {
      Description =
        "Jennifer is a highly motivated, enthusiastic and very personable Health Care Practitioner who has been in practice since 2010. Jennifer graduated from the University of Toronto with a Bachelor’s Degree in Physical and Health Education. Further to her practice in Kinesiology, she pursued a career in Massage Therapy, graduating from Sutherland Chan School of Massage Therapy";
    }
    setSpecialistsDescription(Description);
    renderNameTag(e.target.value);
  }

  function renderNameTag(name) {
    let renderTag;

    if (name === "Jordyn") {
      renderTag = (
        <div className="name_wrapper">
          <input
            type="button"
            value="Jordyn"
            className={aboutStyles.specialists_content_on}
            onClick={displayContent}
          />
          <input
            type="button"
            value="Jennifer"
            className={aboutStyles.specialists_name}
            onClick={displayContent}
          />
          <input
            type="button"
            value="Cassidy"
            className={aboutStyles.specialists_name}
            onClick={displayContent}
          />
        </div>
      );
    } else if (name === "Jennifer") {
      renderTag = (
        <div className="name_wrapper">
          <input
            type="button"
            value="Jordyn"
            className={aboutStyles.specialists_name}
            onClick={displayContent}
          />
          <input
            type="button"
            value="Jennifer"
            className={aboutStyles.specialists_content_on}
            onClick={displayContent}
          />
          <input
            type="button"
            value="Cassidy"
            className={aboutStyles.specialists_name}
            onClick={displayContent}
          />
        </div>
      );
    } else {
      renderTag = (
        <div className="name_wrapper">
          <input
            type="button"
            value="Jordyn"
            className={aboutStyles.specialists_name}
            onClick={displayContent}
          />
          <input
            type="button"
            value="Jennifer"
            className={aboutStyles.specialists_name}
            onClick={displayContent}
          />
          <input
            type="button"
            value="Cassidy"
            className={aboutStyles.specialists_content_on}
            onClick={displayContent}
          />
        </div>
      );
    }

    setNameTag(renderTag);
  }

  return (
    <>
      <Head>
        <title>About | PerfectHealth</title>
      </Head>
      <div className={aboutStyles.wrapper}>
        <Hero title={title} content={content} />
      </div>

      <div className="section_wrapper">
        <Styling
          title={about_title}
          description={description}
          image={image}
          num={_false}
        />

        <div className={aboutStyles.divider}></div>

        <div className="secondaryBackgroud">
          <Styling
            title={about_title2}
            description={description2}
            image={image2}
            num={_true}
          />
        </div>
      </div>

      <div className="x">
        <div className="section_wrapper">
          <h2 className="title_h2">Meet our specialists</h2>
          <div>
            <div className={aboutStyles.img_wrapper}>
              <Image
                src="/Images/Ellipse_10.png"
                width={200}
                height={200}
                alt=""
                className={aboutStyles.specialists_imgOn}
              />
              <Image
                src="/Images/Ellipse_9.png"
                width={200}
                height={200}
                alt=""
                className={aboutStyles.specialists_img}
              />
              <Image
                src="/Images/Ellipse_8.png"
                width={200}
                height={200}
                alt=""
                className={aboutStyles.specialists_img}
              />
            </div>

            <div className={aboutStyles.contents_wrapper}>
              {nameTag}

              <div className={aboutStyles.content}>
                <p>{specialistsDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={indexStyles.CTA_about}>
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

          {/* <Review /> */}
        </div>
      </div>
    </>
  );
};

export default About;
