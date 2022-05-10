import './HomeScreen.css';
/* import { Pepito } from '../../components/Pepito/Pepito'; */
import MobileBanner from './MobileBanner.png';
import TabletBanner from './TabletBanner.png';
import DesktopBanner from './Banner.png';

const HomeScreen = () => {
  return (
    <section className="HomeScreen">
      {/* <Pepito /> */}
      <main className="Section_main">
        <p className="Section_title">
          {' '}
          <span>Find</span> all your <br />
          favorite <br /> <span>Pokemon</span>
        </p>
        <p className="Section_text">
          You can know the type of Pokemon,
          <br /> its strengths, disadvantages and <br /> abilities
        </p>
        <button className="Section_button">See pokemons</button>
      </main>

      <picture className="Container_Banner">
        <source media="(min-width: 1024px)" srcSet={DesktopBanner} />
        <source media="(min-width: 768px)" srcSet={TabletBanner} />
        <img className="Banner" src={MobileBanner} alt="MOBILEs IMAGE" />
      </picture>
    </section>
  );
};

export { HomeScreen };

{
  /* <picture>
<source media="(min-width:1300px)" srcset="./imgs/large.jpg"> <!-- VIEWPORT MAS LARGO VA ARRIBA -->
<source media="(min-width:1000px)" srcset="./imgs/medium.jpg">
<img src="./imgs/small.jpg" alt="she">
</picture> */
}
