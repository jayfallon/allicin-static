import Link from 'next/link';

import FooterStyles from './styles';

const Footer = () => (
  <FooterStyles>
    <div className="footer__inner">
      <nav>
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
      </nav>
      <div className="footer__copyright">{'\u00A9'}2019-Allicin</div>
    </div>
  </FooterStyles>
);

export default Footer;
