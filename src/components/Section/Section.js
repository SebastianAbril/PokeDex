import '../Section/Section.css';
import Banner from './Banner.png';

const Section = () => {
  return (
    <section className="Section">
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

      <figure className="Container_Banner">
        <img className="Banner" src={Banner} alt="annerfa" />
      </figure>
    </section>
  );
};

export { Section };
