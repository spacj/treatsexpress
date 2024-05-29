import React from 'react';
import Hero from './pages/Hero';
import About from './pages/About';
import Services from './pages/Services';
import Rules from './pages/Rules';
import Contact from './pages/Contact';
import Navbar from './pages/components/Navbar';
import Hireme from './pages/components/Hireme';
import Success from './pages/Success';

function App() {
  return (
    <div>
     <Navbar />
     <Hireme />
     <Hero />
     <Services />
     <Success />
     <Rules />
    </div>
  );
};

export default App;
