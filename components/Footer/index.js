import Link from 'next/link';

import FooterStyles from './styles';

const Footer = () => (
  <FooterStyles>
    <p>this is the footer</p>
    <ul>
      <li>
        <Link href="/terms">
          <a title="Terms and Conditions">Terms &amp; Conditions</a>
        </Link>
      </li>
      <li>
        <Link href="/privacy">
          <a title="Privacy Policy">Privacy Policy</a>
        </Link>
      </li>
    </ul>
  </FooterStyles>
);

export default Footer;
