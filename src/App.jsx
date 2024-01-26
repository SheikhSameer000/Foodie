import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Banner from './components/Banner';
import AppStore_Links from './components/AppStore_Links';
import Testomonials from './components/Testomonials';
import Footer from './components/Footer';
import Aos from 'aos';
import "aos/dist/aos.css";

const App = () => {

React.useEffect(() =>{
  Aos.init({
    offset: 100,
    duration: 500,
    easing: "ease-in-sine",
    delay: 100,
  })
  Aos.refresh();
}, []);


  return (
    <>
   <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
    <Navbar/>
    <Hero/>
    <Services/>
    <Banner/>
    <AppStore_Links/>
    <Testomonials/>
    <Footer/>
    </div>
    </>
  )
}

export default App