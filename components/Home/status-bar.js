import Link from 'next/link';
import StatusBarStyles from '../StatusBar';

const StatusBar = props => (
  <StatusBarStyles>
    <ul className="meta__wrapper">
      <li className="avatar">
        <img src="/static/people/person-01.png" alt="Person 01" />
      </li>
      <li className="meta">
        <div>
          Dudo Burrows<span>★★★★</span>
        </div>
        <div>Teacher</div>
        <div>Favorites: Math, History, Science, Art, Music</div>
      </li>
    </ul>
    <ul className="info__wrapper">
      <li className="work active">
        <i className="fal fa-edit" />
        <Link href="/home">
          <a title="Home">
            <span>3</span>
          </a>
        </Link>
      </li>
      <li className="grades">
        <i className="fal fa-award" />
        <Link href="/grades">
          <a title="Grades">
            <span>1</span>
          </a>
        </Link>
      </li>
      <li className="calendar">
        <i className="fal fa-calendar-alt" />
        <Link href="/calendar">
          <a title="calendar">
            <span>0</span>
          </a>
        </Link>
      </li>
      <li className="meeting">
        <i className="fal fa-clock" />
        <Link href="/meetings">
          <a title="meetings">
            <span>0</span>
          </a>
        </Link>
      </li>
      <li className="notifications">
        <i className="fal fa-bell" />
        <Link href="/notifications">
          <a title="notifications">
            <span>12</span>
          </a>
        </Link>
      </li>
    </ul>
  </StatusBarStyles>
);

export default StatusBar;
