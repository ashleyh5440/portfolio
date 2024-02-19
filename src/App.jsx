import { useState } from 'react'
import Home from './components/Home';
import Nav from './components/Nav'
import './styles/App.css'

function App() {
  return (
    <main>
      <Nav />
      <Home />
    </main>
  );
}

export default App;
