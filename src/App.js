import React from 'react';
import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
