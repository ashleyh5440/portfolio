import { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';
import './styles/reset.css';
import './styles/index.css';


function App() {
  return (
    <main>
      <Nav />
      <Outlet />
      <Footer />
    </main>
  );
}
 
export default App;
