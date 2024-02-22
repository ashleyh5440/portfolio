import { useState } from 'react';
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';
import './styles/index.css';

function App() {
  return (
    <main>
      <Nav />
      <Outlet />
    </main>
  );
}
 
export default App;
