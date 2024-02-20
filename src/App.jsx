import { useState } from 'react'
import Home from './components/Home';
import Nav from './components/Nav';
import Projects from './components/projects/Projects';
import './styles/App.css';

function App() {
  return (
    <main>
      <Nav />
      <Home />
      <Projects />
    </main>
  );
}

export default App;
