import HomeStyles from './styles';
import HomeSideNavMenu from './sidenav';

import Footer from '../Footer';

const Home = () => (
  <HomeStyles>
    <div className="side__nav--wrapper">
      <nav>
        <HomeSideNavMenu />
      </nav>
    </div>
    <div className="main__content--wrapper">
      <section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          repellendus suscipit quibusdam, mollitia porro similique adipisci.
          Iste, debitis magnam nihil quo sequi harum eos, molestiae laudantium,
          mollitia sint itaque. Voluptatum!
        </p>
      </section>
    </div>
  </HomeStyles>
);

export default Home;
