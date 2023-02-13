import React from 'react';
import './App.css';
import Navbar from './components/Topbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Team from './pages/Team'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' index element={< Home/>} />
          <Route path='/home' index element={< Home/>} />
          <Route path='/reports' element={< Reports/>} />
          <Route path='/products' element={< Products/>} />
          <Route path='/team' element={<Team/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
