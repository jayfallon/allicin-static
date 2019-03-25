import Link from 'next/link';
import styled from 'styled-components';

const StatusBar = props => (
  <StatusBarStyles>
    <ul className="meta__wrapper">
      <li className="avatar">
        <img src="/static/people/person-01.png" alt="Person 01" />
      </li>
      <li className="meta">
        <ul>
          <li>
            Dudo Burrows<span>★★★★</span>
          </li>
          <li>Teacher</li>
          <li>Favorites: Math, History, Science, Art, Music</li>
        </ul>
      </li>
    </ul>
    <ul className="info__wrapper">
      <li className="calendar">
        <i className="fas fa-calendar-exclamation" />
        <span>4</span>
      </li>
      <li className="notifications">
        <i className="fas fa-bell" />
        <span>12</span>
      </li>
    </ul>
  </StatusBarStyles>
);

const StatusBarStyles = styled.div`
  background-color: var(--QuarterPearlLusta);
  margin: 4rem auto;
  width: ${props => props.theme.pageWidth};
  height: 12rem;
  /* box-shadow: ${props => props.theme.boxShadow}; */
  display: flex;
  justify-content: space-between;

  ul.meta__wrapper {
    display: flex;
    justify-content: flex-start;
    li.avatar img {
      height: 12rem;
    }

    li.meta ul {
      padding: 0 0 0 1.6rem;
      display: flex;
      flex-direction: column;
      li {
        flex: 1 0 auto;
      }
      li:first-child {
        padding-top: 1rem;
        font-size: 2rem;
        font-weight: 700;
        line-height: 2;

        span {
          margin-left: 1rem;
          font-size: 1.6rem;
        }
      }
    }
  }

  ul.info__wrapper {
    display: flex;
    li {
        padding: 1rem 2.5rem;
        color: #FFF;
        text-align: center;
        display: flex;
        flex-direction:column;
        justify-content: space-between;
        i {
            font-size: 3rem;
        }

        span{
            font-size: 3rem;
            font-weight: 700;
        }

    }
    li.calendar {
      background-color: var(--RoyalBlue);
    }
    li.notifications {
      background-color: var(--CodGray);
      
    }
  }
`;

export default StatusBar;
