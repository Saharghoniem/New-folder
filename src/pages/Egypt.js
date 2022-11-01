


import Header from '../comp/header';
import Footer from '../comp/Footer';
import MainContent from '../comp/MainContent';
import img2 from '../images/past.png';
import img3 from '../images/Frame 7111.jpg';

const Egypt = () => {
  return (
    <>
    <Header />
    <MainContent pageName="Egypt Page"  /> 
    <img src={img2}  />
    <h1>Egypt now </h1>
    <img src={img3}  />
  
    <Footer />
  </>
  );
}

export default Egypt;
