import './AboutmeScreen.css';
import MyDog from './Hell.jpeg';

const AboutmeScreen = () => {
  return (
    <div className="AboutmeScreen">
      <div>
        Hola soy
        <span className="my-name"> Sebastian Abril </span>
        te deseo un excelente día
      </div>
      <picture className="PicturesContainer">
        <img className="Picture" src={MyDog} alt="MyDog" />
      </picture>
    </div>
  );
};

export { AboutmeScreen };
