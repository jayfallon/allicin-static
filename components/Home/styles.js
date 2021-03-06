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

    p.updates {
      padding: 0 1.2rem;
    }

    section.classes {
      h3 {
        padding: 3rem 1.2rem;
        font-size: 2.3rem;
        font-family: source-serif-pro, serif;
        font-weight: 700;
      }
      .class__wrapper {
        background-color: var(--QuarterPearlLusta);
        margin: 0 0 2rem 0;
        border-bottom: 0.2rem solid #d6d7d2;
        display: flex;
        justify-content: flex-start;
        .logo {
          padding: 0 1rem;
          border-right: 0.1rem solid #d6d7d2;
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 0 0 auto;
        }
        .meta {
          padding: 0.5rem 1rem;
          flex: 1 0 auto;
          h4 {
            font-size: 2rem;
            font-weight: 700;
          }
        }
        .due_date {
          background-color: var(--Starship);
          padding: 0.5rem 1rem;
          flex: 0 0 auto;
          ul li:nth-child(2) {
            font-size: 4rem;
            line-height: 1.25;
          }
          li {
            text-transform: uppercase;
            text-align: center;
          }
        }
      }
    }
  }
`;

export default HomeStyles;
