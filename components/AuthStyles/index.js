import styled from 'styled-components';

const AuthStyles = styled.div`
  margin: ${props => props.theme.pageMargin};
  width: ${props => props.theme.pageWidth};
  header {
    h1 {
      margin-bottom: 4rem;
      font-family: source-serif-pro serif;
      font-size: 3.1rem;
      text-transform: uppercase;
      text-align: center;
    }
  }

  .auth__form--wrapper {
    background-color: var(--QuarterPearlLusta);
    box-shadow: ${props => props.theme.boxShadow};
  }
`;

export default AuthStyles;
