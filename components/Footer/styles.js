import styled from 'styled-components';

const FooterStyles = styled.footer`
  background-color: ${props => props.theme.footerBg};
  padding: 4rem 0 8rem;
  .footer__inner {
    margin: ${props => props.theme.pageMargin};
    width: ${props => props.theme.pageWidth};
    color: ${props => props.theme.footerText};
  }
  .footer__copyright {
    padding-top: 3rem;
    font-size: 1.6rem;
  }
  a {
    color: ${props => props.theme.footerLinks};
  }
`;

export default FooterStyles;
