import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Footer from './Footer';
import './App.css';
import './styles.scss';

function App() {
  return (
    <div>
      <Header />
      <Navbar />    
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;