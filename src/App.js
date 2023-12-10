
import './App.css';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Home from './components/Home';
import Hotels from './components/Hotels';
import NavbarComponent from './components/NavbarComponent';


function App() {
  return (
    <>
      <NavbarComponent />
      <Home />
      <div className='mt-5 pt-5 mb-5 pb-4'>
        <Cards />
      </div>
      <Hotels/>
      <Footer/>
    </>
  );
}

export default App;
