import './App.css';
import axios from "axios";
import React, { useState } from "react";
import {Navbar} from './components/UI/navbar.jsx';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
//import {Home} from "./pages/home"; home tusunu kullanabilmek icin 
//import {Link } from "react-router-dom" bunu navbara yaz <Link to="/">Home</Link> yazilabilir 



function App() {
 
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </Router>
      </header>
  </div>
  );
}

export default App;
