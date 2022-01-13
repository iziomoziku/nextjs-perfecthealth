import { useState } from "react";
import reviewStyles from "./Review.module.css";
import classNames from "classnames";
import Image from "next/image";

const Review = () => {
  const [count, setCount] = useState(0);
  let circle;
  let name;
  let content;

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  if (count === 0) {
    circle = (
      <div className={reviewStyles.toggle_wrapper}>
        <div className={reviewStyles.toggleOn}></div>
        <div className={reviewStyles.toggleOff}></div>
        <div className={reviewStyles.toggleOff}></div>
      </div>
    );

    name = "Jannette Holland";
    content =
      "I‘ve been to your store multiple times and I always love how clean, \
    and the energy i get. I will recommend family and friends. Thank you!";
  } else if (count === 1) {
    circle = (
      <div className={reviewStyles.toggle_wrapper}>
        <div className={reviewStyles.toggleOff}></div>
        <div className={reviewStyles.toggleOn}></div>
        <div className={reviewStyles.toggleOff}></div>
      </div>
    );

    name = "Josephine Carrie";
    content =
      "Their team always does their best. Great results, very professional approach and very knowledgeable. 5 Stars for sure! Highly recommended.";
  } else if (count === 2) {
    circle = (
      <div className={reviewStyles.toggle_wrapper}>
        <div className={reviewStyles.toggleOff}></div>
        <div className={reviewStyles.toggleOff}></div>
        <div className={reviewStyles.toggleOn}></div>
      </div>
    );

    name = "Abby King";
    content =
      "So incredibly happy with my manicure and pedicure I had done and can’t wait to go back for more services, professional, clean, amazing service, and great to chat with if I could give them more than 5 stars I would!!";
  } else {
    setCount(0);
    name = "Jannette Holland";
    content =
      "I‘ve been to your store multiple times and I always love how clean, \
    and the energy i get. I will recommend family and friends. Thank you!";
  }

  return (
    <div className="section_margin">
      <h2 className="title_h2">What our customers are saying</h2>
      <div className={reviewStyles.wrapper}>
        <p className={reviewStyles.content}>{content}</p>

        <div className={reviewStyles.name}>
          {/* <Image src="pic/Images/Home/Spa and Salon/Jennifer.png" alt="" class="referral-img"/> */}
          {/* <div className={reviewStyles.image}></div> */}
          <span>{name}</span>
        </div>

        <div className={reviewStyles.toggle_wrapper}>
          <div onClick={decrement} className={reviewStyles.toggle}>
            {"\u25C0"}
          </div>
          <div>{circle}</div>
          <div onClick={increment} className={reviewStyles.toggle}>
            {" "}
            {"\u25B6"}
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Review;
