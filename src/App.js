import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Stock from './components/Stock';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/stocks">Stocks</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stocks" element={<Dashboard />} />
          <Route path="/stocks/:symbol" element={<Stock />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
