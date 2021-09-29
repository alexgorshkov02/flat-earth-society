import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Portfolio from "./components/Portfolio";
import Footer from "./elements/Footer";
import React, { useState } from "react";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />
        <HomePage />
        <Portfolio />
      </div>
      <Footer/>
    </div>
  );
}

export default App;