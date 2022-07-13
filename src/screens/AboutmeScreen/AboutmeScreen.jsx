import './AboutmeScreen.css';
import MyDog from './Hell.jpeg';

const AboutmeScreen = () => {
  return (
    <div className="AboutmeScreen">
      <div className="AboutmeScreenSubContainer">
        <div className="Introduction">
          Hi there! My name is Sebastian Abril, I am from Colombia and it feels great that you are
          here checking this project. I like to share time with animals, do workout, listenig to
          music, dancing, reading, programming and learning new things. <a></a>
        </div>
        <div className="ImageGalleryContainer">
          <picture className="PicturesContainer">
            <img className="Picture" src={MyDog} alt="MyDog" />
          </picture>
          <div className="ButtonsContainer">
            <button>←</button>
            <button>→</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AboutmeScreen };
