import Link from 'next/link';

import IndexStyles from '../Index/styles';

const SignOut = () => (
  <IndexStyles>
    <section>
      <h1>Allicin</h1>
      <p>Your courseware companion.</p>
      <h3>You Have Been Signed Out</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea hic numquam
        vitae inventore neque quidem, expedita, ipsa facere mollitia cupiditate
        esse repellat explicabo dolores. Placeat incidunt praesentium quos et
        sed.
      </p>
      <h3>Ttitle Here</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea hic numquam
        vitae inventore neque quidem, expedita, ipsa facere mollitia cupiditate
        esse repellat explicabo dolores. Placeat incidunt praesentium quos et
        sed.
      </p>
    </section>
    <section>
      <ul>
        <li>
          <Link href="/signin">
            <a title="Sign In">Sign In</a>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <a title="Sign Up">Sign Up</a>
          </Link>
        </li>
        <li>
          <Link href="/reset-password">
            <a title="Reset Password">Reset Password</a>
          </Link>
        </li>
      </ul>
    </section>
  </IndexStyles>
);

export default SignOut;
