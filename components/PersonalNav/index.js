import Link from 'next/link';
import PersonalNavStyles from './styles';

const PersonalNav = () => (
  <PersonalNavStyles>
    <nav>
      <ul>
        <li>
          <Link href="">
            <a title="Skip to Content">Skip to Content</a>
          </Link>
        </li>
      </ul>
    </nav>
  </PersonalNavStyles>
);

export default PersonalNav;
