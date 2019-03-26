import Link from 'next/link';
import styled from 'styled-components';

const HomeSideNavMenu = () => (
  <HomeSideNavMenuStyles>
    <ul>
      <li className="allicin__link">
        <Link href="/">
          <a title="Allicin.io">A</a>
        </Link>
      </li>
      <li>
        <Link href="/home">
          <a title="Home">
            <i className="far fa-home" />
            <span>Home</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a title="Settings">
            <i className="fal fa-cog" />
            <span>Settings</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/signout">
          <a title="Sign Out">
            <i className="far fa-power-off" />
            <span>Sign Out</span>
          </a>
        </Link>
      </li>
    </ul>
    <ul>
      <li>
        <Link href="">
          <a title="Expand Menu">
            <i className="far fa-arrow-to-right" />
            <span>Expand Menu</span>
          </a>
        </Link>
      </li>
    </ul>
  </HomeSideNavMenuStyles>
);

const HomeSideNavMenuStyles = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ul {
    width: 6.9rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }
  li {
    padding: 1rem 0;
    text-align: center;
    span {
      display: none;
    }
  }
  a {
    color: ${props => props.theme.sideNavLinks};
  }
  .allicin__link {
    background-color: var(--Lima);
    font-family: fenway-park-jf, sans-serif;
    font-size: 3rem;
    a {
      color: #ffffff;
      text-decoration: none;
      /* text-shadow: 2px 2px #332c51; */
    }
  }
`;

export default HomeSideNavMenu;
