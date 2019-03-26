import Link from 'next/link';

import AuthStyles, { AuthFormForget } from '../AuthStyles';

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
            <legend>Sign In To Your Account</legend>
            <div className="auth__form--group">
              <label htmlFor="email">Your Email Address</label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="yourname@example.com"
              />
            </div>
            <div className="auth__form--group">
              <label htmlFor="password">Your Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder=""
              />
            </div>
            <div className="auth__form--submit">
              <Link href="/home">
                <button>Sign In</button>
              </Link>
            </div>
            <AuthFormForget />
          </fieldset>
        </form>
      </div>
    </section>
  </AuthStyles>
);

export default SignIn;
