import Link from 'next/link';

import AuthStyles, { AuthFormAlready } from '../AuthStyles';

const SignIn = () => (
  <AuthStyles>
    <header>
      <h1>
        <Link href="/">
          <a title="Allicin.io">Allicin</a>
        </Link>
      </h1>
    </header>
    <section>
      <div className="auth__form--wrapper">
        <form>
          <fieldset>
            <legend>Sign Up For An Account</legend>
            <div className="auth__form--group">
              <label htmlFor="email">Your Email Address</label>
              <input
                name="email"
                type="text"
                placeholder="yourname@example.com"
              />
            </div>
            <div className="auth__form--group">
              <label htmlFor="passwordOne">Choose A Password</label>
              <input name="passwordOne" type="password" placeholder="" />
            </div>
            <div className="auth__form--group">
              <label htmlFor="passwordTwo">Confirm Your Password</label>
              <input name="passwordTwo" type="password" placeholder="" />
            </div>
            <div className="auth__form--submit">
              <Link href="/home">
                <a title="Sign Up">
                  <button>Sign Up</button>
                </a>
              </Link>
            </div>
            <AuthFormAlready />
          </fieldset>
        </form>
      </div>
    </section>
  </AuthStyles>
);

export default SignIn;
