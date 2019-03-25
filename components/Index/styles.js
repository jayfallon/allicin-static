import styled from 'styled-components';

const IndexStyles = styled.div`
  section {
    margin: ${props => props.theme.pageMargin};
    width: ${props => props.theme.pageWidth};
  }
`;

export default IndexStyles;
