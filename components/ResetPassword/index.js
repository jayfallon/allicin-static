import Link from 'next/link';

import AuthStyles, { AuthFormUnregistered } from '../AuthStyles';

const ResetPassword = () => (
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
            <legend>Reset Your Password</legend>
            <div className="auth__form--group">
              <label htmlFor="email">Your Email Address</label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="yourname@example.com"
              />
            </div>
            <div className="auth__form--submit">
              <Link href="/reset-check">
                <a title="Reset My Password">
                  <button>Reset My Password</button>
                </a>
              </Link>
            </div>
            <AuthFormUnregistered />
          </fieldset>
        </form>
      </div>
    </section>
  </AuthStyles>
);

const ResetCheck = () => (
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
        <h3>Check Your Inbox</h3>
        <p>
          If you have an account with Allicin, check your email inbox for a link
          that will help you reset your password.
        </p>
        <p>...and check your spam folder, too!</p>
        <p>
          <Link href="/password-new">
            <a title="Temporary Reset Link">(Temporary Reset Link)</a>
          </Link>
        </p>
      </div>
    </section>
  </AuthStyles>
);

const PasswordNew = () => (
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
            <legend>Choose A New Password</legend>
            <div className="auth__form--group">
              <label htmlFor="passwordOne">Choose A Password</label>
              <input
                id="passwordOne"
                name="passwordOne"
                type="password"
                placeholder=""
              />
            </div>
            <div className="auth__form--group">
              <label htmlFor="passwordTwo">Confirm Your Password</label>
              <input
                id="passwordTwo"
                name="passwordTwo"
                type="password"
                placeholder=""
              />
            </div>
            <div className="auth__form--submit">
              <Link href="/home">
                <a title="Sign Up">
                  <button>Set My Password</button>
                </a>
              </Link>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  </AuthStyles>
);

export default ResetPassword;

export { ResetCheck, PasswordNew };
