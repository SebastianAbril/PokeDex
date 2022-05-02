import TeamRocket from './TeamRocket.png';
import './ErrorScreen.css';

const ErrorScreen = () => {
  return (
    <main className="ErrorScreen">
      <p className="Error404">404</p>
      <figure>
        <img className="ErrorScreenImg" src={TeamRocket} alt="Rocket Team" />
      </figure>

      <p className="ErrorText">
        {' '}
        <span>The rocket team</span> has won this time.
      </p>

      <button className="ErrorButton">
        <a href="/">Return</a>
      </button>
    </main>
  );
};

export { ErrorScreen };
