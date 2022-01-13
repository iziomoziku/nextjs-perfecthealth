import Nav from "../components/header/nav/Nav";
import loginStyles from "../styles/login.module.css";
import Wrapper from "../components/Wrapper";
import signupStyles from "../styles/signup.module.css";
import Link from "next/link";
import Button from "../components/button/Button";

const signup = () => {
  return (
    <div className={loginStyles.body}>
      <Nav />
      <Wrapper>
        <p class={loginStyles.title}>
          Have an account already?{" "}
          <Link href="/login">
            <a className={loginStyles.link}>Login</a>
          </Link>
        </p>

        <main className={signupStyles.signup}>
          <div>
            <h2 className={signupStyles.title} className="title_h2">
              Fill up the following form to become a member with us
            </h2>

            <form action="">
              <div className={signupStyles.wrapper}>
                <label for="">First Name</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className={signupStyles.input}
                />
              </div>

              <div className={signupStyles.wrapper}>
                <label for="">Last Name</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className={signupStyles.input}
                />
              </div>

              <div className={signupStyles.wrapper}>
                <label for="">Password</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className={signupStyles.input}
                />
              </div>

              <div className={signupStyles.wrapper}>
                <label for="">Email</label>
                <input
                  type="text"
                  name=""
                  id=""
                  className={signupStyles.input}
                />
              </div>

              <Button value="Sign Up" />
            </form>
          </div>
        </main>
      </Wrapper>
    </div>
  );
};

export default signup;
