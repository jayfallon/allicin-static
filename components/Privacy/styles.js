import styled from 'styled-components';

const PrivacyStyles = styled.section`
  margin: ${props => props.theme.pageMargin};
  padding: 4rem 0 10rem;
  width: ${props => props.theme.pageWidth};

  h2 {
    margin-bottom: 4rem;
    font-family: source-serif-pro serif;
    font-size: 2.9rem;
    text-transform: uppercase;
  }

  h3 {
    padding: 1.6rem 0;
    font-family: source-serif-pro, serif;
    font-size: 2.6rem;
  }

  h4 {
    padding: 1.3rem 0;
    font-size: 2rem;
    font-weight: 700;
  }

  ul {
    padding: 1.5rem 0 1.5rem 2rem;
  }

  ul > li {
    list-style: disc;
  }
`;

export default PrivacyStyles;
