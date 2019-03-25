import styled from 'styled-components';

const HomeStyles = styled.div`
  height: 100vh;

  display: flex;

  .side__nav--wrapper {
    background-color: #221720;
    border-left: 1px solid #45537b;

    flex: 0 0 6.9rem;
  }

  .main__content--wrapper {
    flex: 1 0 auto;

    section {
      margin: ${props => props.theme.pageMargin};
      width: ${props => props.theme.pageWidth};
    }
  }
`;

export default HomeStyles;
