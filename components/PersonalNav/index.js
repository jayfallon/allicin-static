import Link from 'next/link';
import PersonalNavStyles from './styles';

const PersonalNav = () => (
  <PersonalNavStyles>
    <nav>
      <ul>
        <li>
          <Link href="">
            <a title="Help">Help</a>
          </Link>
        </li>
        <li>
          <Link href="/signout">
            <a title="Sign Out">Sign Out</a>
          </Link>
        </li>
      </ul>
    </nav>
  </PersonalNavStyles>
);

export default PersonalNav;
