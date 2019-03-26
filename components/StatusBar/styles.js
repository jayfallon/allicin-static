import styled from 'styled-components';

const StatusBarStyles = styled.div`
  background-color: var(--QuarterPearlLusta);
  margin: 4rem auto;
  width: ${props => props.theme.pageWidth};
  border-bottom: 3px solid #d6d7d2;
  display: flex;
  justify-content: space-between;

  ul.meta__wrapper {
    display: flex;
    justify-content: flex-start;
    li {
      height: 12rem;
    }
    li.avatar img {
      height: 12rem;
    }

    li.meta {
      padding: 1.6rem;
      display: flex;
      flex-direction: column;
      span {
        margin-left: 1rem;
        font-size: 1.6rem;
      }
    }
  }

  ul.info__wrapper {
    display: flex;
    li {
      padding: 1rem 2.5rem;
      border-left: 0.1rem solid #d6d7d2;
      color: var(--CodGray);
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &.active {
        background-color: var(--Martinique);
        color: var(--QuarterPearlLusta);
        a {
          color: var(--QuarterPearlLusta);
          text-decoration: none;
        }
      }
      a {
        color: var(--CodGray);
        text-decoration: none;
      }
      i {
        font-size: 3rem;
      }

      span {
        font-size: 3rem;
        font-weight: 700;
      }
    }
  }
`;

export default StatusBarStyles;
