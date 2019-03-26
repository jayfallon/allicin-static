import GradeStyles from './styles';
import HomeSideNavMenu from '../SideNav';
import PersonalNav from '../PersonalNav';
import StatusBar from './status-bar';

const Home = () => (
  <GradeStyles>
    <div className="side__nav--wrapper">
      <HomeSideNavMenu />
    </div>
    <div className="main__content--wrapper">
      <PersonalNav />
      <StatusBar />
      <section>
        <p className="updates">
          Dudo's bio/updates/messages/etc.: ipsum dolor sit amet consectetur
          adipisicing elit. Iure repellendus suscipit quibusdam, mollitia porro
          similique adipisci. Iste, debitis magnam nihil quo sequi harum eos,
          molestiae laudantium, mollitia sint itaque. Voluptatum!
        </p>
      </section>
      <section className="classes">
        <h3>Grades</h3>

        <article>
          <div className="class__wrapper">
            <div className="logo">
              <img src="/static/logos/edx-logo-header.png" alt="edx logo" />
            </div>
            <div className="meta">
              <h4>American Capitalism: A History</h4>
              <p>Making Capitalism American: 1787–1877</p>
            </div>
            <div className="grade">
              <ul>
                <li>A</li>
                <li>pass</li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    </div>
  </GradeStyles>
);

export default Home;
