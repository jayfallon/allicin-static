import styled from 'styled-components';

const TermsStyles = styled.section`
  margin: ${props => props.theme.pageMargin};
  width: ${props => props.theme.pageWidth};
  padding: 0 0 10rem;

  h2 {
    padding: 2rem 0;
    font-family: source-serif-pro serif;
    font-size: 2.9rem;
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

  ul,
  ol {
    padding: 1.5rem 0 1.5rem 2rem;
  }

  ul > li {
    list-style: disc;
  }

  ol > li {
    list-style: disc;
  }

  ol > li > ol > li {
    list-style: lower-roman;
  }
`;

export default TermsStyles;
