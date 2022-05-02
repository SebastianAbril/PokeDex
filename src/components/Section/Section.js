import '../Section/Section.css';

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

      <figure className="Section_imgs_container">
        <img
          className="pikachu"
          src="https://static.wikia.nocookie.net/doblaje/images/a/aa/Pikachu_XY.png/revision/latest?cb=20161002184039&path-prefix=es"
          alt="pikachu"
        />
      </figure>
    </section>
  );
};

export { Section };
