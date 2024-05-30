import { useState } from 'react'

import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';

import './App.css'

function App() {

  return (
    <main>
      <Nav />
      <Home />
      <Footer />
    </main>
  )
}

export default App
