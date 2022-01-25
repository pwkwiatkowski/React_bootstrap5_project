import React from 'react';
import './App.css';
import Navbar from './components/inc/Navbar'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Pricelist from './components/pages/Pricelist';
import Opinions from './components/pages/Opinions';
import Footer from './components/inc/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    //react-router-dom
    <Router>

      <div>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home/>} />

          <Route path="/about" element={<About/>} />

          <Route path="/contact" element={<Contact/>} />

          <Route path="/pricelist" element={<Pricelist/>} />

          <Route path="/opinions" element={<Opinions/>} />

        </Routes>

        <Footer />

      </div>

    </Router>
  );
}

export default App;
