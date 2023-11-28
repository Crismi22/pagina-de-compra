import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contacto/Contact';
import Error404 from './pages/Error404.jsx';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutUs from './pages/AboutUs/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;