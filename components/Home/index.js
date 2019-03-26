import HomeStyles from './styles';
import HomeSideNavMenu from '../SideNav';
import PersonalNav from '../PersonalNav';
import StatusBar from './status-bar';

const Home = () => (
  <HomeStyles>
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
        <h3>Upcoming Work</h3>
        <article>
          <div className="class__wrapper">
            <div className="logo">
              <img src="/static/logos/edx-logo-header.png" alt="edx logo" />
            </div>
            <div className="meta">
              <h4>Globalization: Past and Future</h4>
              <p>Read: Module 3: The Anglo-American World: 1800-2000</p>
            </div>
            <div className="due_date">
              <ul>
                <li>June</li>
                <li>03</li>
                <li>23:59PM</li>
              </ul>
            </div>
          </div>
        </article>
        <article>
          <div className="class__wrapper">
            <div className="logo">
              <img src="/static/logos/edx-logo-header.png" alt="edx logo" />
            </div>
            <div className="meta">
              <h4>Mao to Now: On Chinese Marxism</h4>
              <p>Study: Module 5: Mao’s Mausoleum.</p>
            </div>
            <div className="due_date">
              <ul>
                <li>June</li>
                <li>07</li>
                <li>23:59PM</li>
              </ul>
            </div>
          </div>
        </article>
        <article>
          <div className="class__wrapper">
            <div className="logo">
              <img src="/static/logos/edx-logo-header.png" alt="edx logo" />
            </div>
            <div className="meta">
              <h4>American Capitalism: A History</h4>
              <p>
                Read: Module 4: Making American Capitalism Corporate: 1877–1945
                .
              </p>
            </div>
            <div className="due_date">
              <ul>
                <li>June</li>
                <li>10</li>
                <li>23:59PM</li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    </div>
  </HomeStyles>
);

export default Home;
