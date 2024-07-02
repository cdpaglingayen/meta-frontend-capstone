import Chicago from './Chicago';
import { Footer } from './Footer';
import { Header } from './Header';
import Specials from './Specials';
import Testimonials from './Testimonials';

export const HomePage = () => {
  return (
    <>
      <main>
        <Header />
        <Specials />
        {/*         <Testimonials />
        <Chicago />
        <Footer /> */}
      </main>
    </>
  );
};
