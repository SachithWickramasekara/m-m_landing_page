import Navbar from './components/Common/Navbar'
import { Route, Routes } from "react-router-dom";
import Hero from './pages/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Contactus from './pages/Contactus';
import Footer from './components/Common/Footer';
import { footerAPI } from './data/data';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/ContactUs' element={<Contactus/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;