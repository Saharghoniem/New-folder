import Header from '../comp/header';
import Footer from '../comp/Footer';
import MainContent from '../comp/MainContent';
import img1 from '../images/Frame 1.png';


const German = () => {
  return (
    <>
    <Header />
    <MainContent pageName="German Page" />  
    <img src={img1}  />

    <Footer />
  </>
  );
}

export default German;
