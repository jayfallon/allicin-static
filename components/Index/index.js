import Link from 'next/link';

import Footer from '../Footer';
import IndexStyles from './styles';

const Index = () => (
  <IndexStyles>
    <section>
      <h1>Allicin</h1>
      <p>Your courseware companion.</p>
      <h3>Ttitle Here</h3>
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
      </ul>
    </section>
  </IndexStyles>
);

export default Index;
