import Link from 'next/link';
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from '@trendmicro/react-sidenav';

// import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const SideNavMenu = () => (
  <SideNav
    onSelect={selected => {
      // Add your code here
    }}
  >
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
      <NavItem eventKey="home">
        <NavIcon>
          <i className="fas fa-home" />
        </NavIcon>
        <NavText>Home</NavText>
      </NavItem>
      <NavItem eventKey="charts">
        <NavIcon>
          <i className="fas fa-analytics" />
        </NavIcon>
        <NavText>Charts</NavText>
      </NavItem>
    </SideNav.Nav>
  </SideNav>
);

export default SideNavMenu;
