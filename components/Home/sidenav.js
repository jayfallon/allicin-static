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
          <a title="home">
            <i className="fas fa-home" />
          </a>
        </Link>
      </li>
    </ul>
  </HomeSideNavMenuStyles>
);

const HomeSideNavMenuStyles = styled.nav`
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
  }
  a {
    color: ${props => props.theme.sideNavLinks};
  }
  .allicin__link {
    border-bottom: 1px solid #45537b;
    font-family: fenway-park-jf, sans-serif;
    font-size: 3rem;
    a {
      color: #cbd41d;
      text-decoration: none;
    }
  }
`;

export default HomeSideNavMenu;
