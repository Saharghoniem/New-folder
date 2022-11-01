
import Header from '../comp/header';
import Footer from '../comp/Footer';
import MainContent from '../comp/MainContent';
import img5 from '../images/country.png';

const Country = () => {
  return (
    <>

    <Header />   

    <MainContent   pageName="countrys in world"  />
    <br/>
      <img src={img5} />
    <Footer />
  </>
  );
}

export default Country;
