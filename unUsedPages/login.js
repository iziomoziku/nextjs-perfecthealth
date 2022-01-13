import Nav from "../components/header/nav/Nav";
import Wrapper from "../components/Wrapper";
import loginStyles from "../styles/login.module.css";
import Link from "next/link";
import Button from "../components/button/Button";

const login = () => {
  return (
    <div className={loginStyles.body}>
      <Nav />
      <Wrapper>
        <div class={loginStyles.login}>
          <p class={loginStyles.title}>
            Don't have an account?{" "}
            <Link href="/signup">
              <a class={loginStyles.link}>sign-up</a>
            </Link>
          </p>

          <div class={(loginStyles.wrapper, loginStyles.container)}>
            <div class={loginStyles.wrapper}>
              <h2 class="title_h2">Login to your account</h2>
              <form action="#" class={loginStyles.mylogin}>
                <input
                  type="text"
                  class={loginStyles.email}
                  placeholder="Enter your email"
                />
                <input
                  type="password"
                  class={loginStyles.pwd}
                  placeholder="Enter your password"
                />
                <Button value="Login" />
              </form>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default login;
