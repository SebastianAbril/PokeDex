import { Nav } from '../Nav/Nav';
import { Footer } from '../Footer/Footer';

export const PageLayout = ({ withNav = true, withFooter = true, children }) => {
  return (
    <>
      {withNav && <Nav />}
      {children}
      {withFooter && <Footer />}
    </>
  );
};
