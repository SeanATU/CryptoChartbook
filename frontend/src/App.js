import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import Price from "./components/Prices";
import Analysis from "./components/Analysis";
import LogIn from "./components/LogIn";
import './App.css'; // Import the CSS file
import Register from "./components/Register";
import Chart from "./components/chart";

function App() {
  return (
    <div>
    <BrowserRouter>
   <header>
        <Link to="/">Home</Link><br />
        <Link to="/Prices">Price</Link><br />
        <Link to="/Charts">Chart</Link><br />
        <Link to="/Analysis">Analysis</Link><br />
        <Link to="/LogIn">Subscribe</Link><br />
      </header> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Prices" element={<Price />} />
        <Route path="/Charts" element={<Chart />} />
        <Route path="/Analysis" element={<Analysis />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;