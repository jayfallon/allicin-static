import Link from 'next/link';

import AuthStyles from '../AuthStyles';

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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        expedita dicta dolorem dolores. Quae officiis suscipit, similique fugiat
        quod atque maxime sed aperiam dolorem dolore! Dolore ad rerum in
        asperiores.
      </div>
    </section>
  </AuthStyles>
);

export default SignIn;
