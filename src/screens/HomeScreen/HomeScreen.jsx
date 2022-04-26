import './HomeScreen.css';
import { Nav } from '../../components/Nav/Nav';
import { Section } from '../../components/Section/Section';

const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <Nav />
      <Section />
    </div>
  );
};

export { HomeScreen };
