//dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';

function Dashboard() {
  console.log('Rendering Dashboard');
  return (
    <div>
      <h2>All Stocks</h2>
      {data.map(stock => (
        <div key={stock.symbol}>
          <Link to={`/stocks/${stock.symbol}`}>
            {stock.name} ({stock.symbol})
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
