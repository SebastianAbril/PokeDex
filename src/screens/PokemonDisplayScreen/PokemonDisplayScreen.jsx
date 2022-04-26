import './PokemonDisplayScreen.css';

const PokemonDisplayScreen = () => {
  return (
    <div className="PokemonDisplayScreen">
      <div className="PokemonDisplayScreenMain">
        <div className="PokemonDisplayScreenMainHeader">
          <label>Aurorus</label>

          <label>
            EMOJI <span>Lightning</span>
          </label>
        </div>

        <label className="PokemonDisplayScreenMainHeaderNumber">#699</label>
        <img src="" alt="tgata"></img>

        <div classaName="DisplayScreenMainFooter"></div>
      </div>

      <div className="PokemonDisplayScreenInfo"></div>
    </div>
  );
};

export { PokemonDisplayScreen };
