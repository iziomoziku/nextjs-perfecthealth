import Hero from "../components/header/hero/hero";
import Nav from "../components/header/nav/Nav";
import indexStyles from "../styles/index.module.css";
import styles from "../styles/bookapp.module.css";
import Image from "next/image";
import Button from "../components/button/Button";
import Link from "next/link";
import Review from "../components/review/Review";
import Head from "next/head";

const Bookapp = () => {
  const title = "";
  const content = "Fill up the form to book an appiontment with us";
  return (
    <>
      <Head>
        <title>My appiontment | PerfectHealth</title>
      </Head>
      <div className={styles.wrapper}>
        <Nav />
        <div className="x">
          <h1 className="title_h1">
            Fill up the form to book an appiontment with us
          </h1>

          <form action="#" className={styles.form_container}>
            <div className={styles.form_modifier}>
              <label htmlFor="" className={styles.title}>
                What would you like to book?
              </label>{" "}
              <br />
              <div className={styles.form_checkbox}>
                <input
                  type="checkbox"
                  name="massage"
                  id="massage"
                  value="massage"
                />
                <label htmlFor="massage">Deep Tissue Massage</label> <br />
                <input
                  type="checkbox"
                  name="sweedish_massage"
                  id="sweedish_massage"
                  value="sweedish_massage"
                />
                <label htmlFor="sweedish_massage">Sweedish Massage</label>{" "}
                <br />
                <input
                  type="checkbox"
                  name="hot_stone_massage"
                  id="hot_stone_massage"
                  value="hot_stone_massage"
                />
                <label htmlFor="hot_stone_massage">Hot Stone Massage</label>{" "}
                <br />
              </div>
            </div>

            <div className={styles.form_modifier}>
              <label htmlFor="date" className={styles.title}>
                Select your time
              </label>{" "}
              <br />
              <input
                type="date"
                name="date"
                id="date"
                className={styles.form_input}
              />
            </div>

            <div className={styles.form_modifier}>
              <label htmlFor="" className={styles.title}>
                Manicure
              </label>
              <div>
                <div className={styles.fee_service}>
                  <span>Classic Manicure</span>
                  <div className={styles.fee_price_wrapper}>
                    <span>$22</span>
                    <select name="specialist" id="">
                      <option value="0"> 0</option>
                      <option value="1"> 1</option>
                      <option value="2"> 2</option>
                      <option value="3"> 3</option>
                      <option value="4"> 4</option>
                      <option value="5"> 5</option>
                    </select>
                  </div>
                </div>

                <div className={styles.fee_service}>
                  <span>French Manicure</span>
                  <div className={styles.fee_price_wrapper}>
                    <span>$27</span>
                    <select name="specialist" id="">
                      <option value="0"> 0</option>
                      <option value="1"> 1</option>
                      <option value="2"> 2</option>
                      <option value="3"> 3</option>
                      <option value="4"> 4</option>
                      <option value="5"> 5</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.form_modifier}>
              <label htmlFor="" className={styles.title}>
                Pedicure
              </label>
              <div>
                <div className={styles.fee_service}>
                  <span>Classic Pedicure</span>
                  <div className={styles.fee_price_wrapper}>
                    <span>$33</span>
                    <select name="specialist" id="">
                      <option value="0"> 0</option>
                      <option value="1"> 1</option>
                      <option value="2"> 2</option>
                      <option value="3"> 3</option>
                      <option value="4"> 4</option>
                      <option value="5"> 5</option>
                    </select>
                  </div>
                </div>

                <div className={styles.fee_service}>
                  <span>Polish Application</span>
                  <div className={styles.fee_price_wrapper}>
                    <span>$15</span>
                    <select name="specialist" id="">
                      <option value="0"> 0</option>
                      <option value="1"> 1</option>
                      <option value="2"> 2</option>
                      <option value="3"> 3</option>
                      <option value="4"> 4</option>
                      <option value="5"> 5</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.form_modifier}>
              <label htmlFor="" className={styles.title}>
                Pick a time
              </label>{" "}
              <br />
              <select name="specialist" id="" className={styles.form_input}>
                <option value=""> 9am - 10am</option>
                <option value=""> 10am - 11am</option>
                <option value=""> 11am - 12pm</option>
                <option value=""> 12pm - 1pm</option>
                <option value=""> 1pm - 2pm</option>
                <option value=""> 2pm - 3pm</option>
                <option value=""> 3pm - 4pm</option>
                <option value=""> 4pm - 5pm</option>
                <option value=""> 5pm - 6pm</option>
                <option value=""> 6pm - 7pm</option>
              </select>{" "}
              <br />
            </div>

            <div className={styles.form_modifier}>
              <label htmlFor="" className={styles.title}>
                Pick a specialist
              </label>{" "}
              <br />
              <select name="specialist" id="" className={styles.form_input}>
                <option value=""> Jordyn Blake</option>
                <option value=""> Jennifer Hen</option>
                <option value=""> Cassidy Oasi</option>
              </select>{" "}
              <br />
            </div>

            <div className={styles.form_modifier}>
              <label htmlFor="" className={styles.title}>
                Any note to leave with your specialist
              </label>{" "}
              <br />
              <textarea
                name=""
                id=""
                cols="30"
                rows="7"
                className={styles.form_input}
              ></textarea>{" "}
              <br />
            </div>

            <Button value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Bookapp;
