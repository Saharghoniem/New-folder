

import Header from '../comp/header';
import Footer from '../comp/Footer';
import MainContent from '../comp/MainContent';
import img4 from '../images/british.png';

const England = () => {
  return (
    <>
    <Header />
    <MainContent pageName="England Page" />
    <img src= {img4} />


      <Footer />
  </>
  );
}

export default England;
