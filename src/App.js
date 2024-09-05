import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import FreshSardines from './FreshSardines';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/soda" element={<Soda />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/fresh-sardines" element={<FreshSardines />} />
      </Routes>
    </div>
  );
}

export default App;
