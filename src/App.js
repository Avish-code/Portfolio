import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Contact/>

      <Footer/>
    </div>
  );
}

export default App;