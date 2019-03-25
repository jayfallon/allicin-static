import styled from 'styled-components';

const FooterStyles = styled.footer`
  padding: 12rem 0 8rem;
  .footer__inner {
    margin: ${props => props.theme.pageMargin};
    width: ${props => props.theme.pageWidth};
    color: ${props => props.theme.footerText};
  }
  nav {
    margin: 0 auto;
  }
  nav ul {
    display: flex;
    justify-content: center;
  }
  nav ul li {
    padding: 0 1.1rem;
  }
  a {
    color: #1e0dc0;
    font-size: 1.6rem;
  }
  .footer__copyright {
    padding-top: 3rem;
    color: var(--CodGray);
    font-size: 1.6rem;
    text-align: center;
  }
`;

export default FooterStyles;
