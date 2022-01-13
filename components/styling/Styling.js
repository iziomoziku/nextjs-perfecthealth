import Image from "next/image";
import { useState } from "react";
import style from "./Styling.module.css";

// 4 props are used here, description, image, title and num

const Styling = (props) => {
  const [displayUI, setDisplayUI] = useState(props.num);
  //   console.log(props.num);

  const imageRight = (
    <div className="x">
      <div className={style.wrapper}>
        <div className={style.flex_item}>
          <h2>{props.title}</h2>
          <p className={style.description}>{props.description}</p>
        </div>

        <div className={style.image}>
          <Image width={350} height={350} src={props.image} />
        </div>
      </div>
    </div>
  );

  const imageLeft = (
    <div className="x">
      <div className={style.wrapper}>
        <div className={style.image}>
          <Image width={350} height={350} src={props.image} />
        </div>

        <div className={style.flex_item}>
          <h2>{props.title}</h2>
          <p className={style.description}>{props.description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* {displayUI ? imageLeft : imageRight} */}
      {displayUI ? imageLeft : imageRight}
    </>
  );
};

export default Styling;
