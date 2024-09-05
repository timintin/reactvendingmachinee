import React from 'react';
import { Link } from 'react-router-dom';

function VendingMachine() {
  return (
    <div>
      <h1>Hello! I am a vending machine. What would you like to eat?</h1>
      <Link to="/soda">Soda</Link>
      <Link to="/chips">Chips</Link>
      <Link to="/fresh-sardines">Fresh Sardines</Link>
    </div>
  );
}

export default VendingMachine;
