import "./App.css";
import React from "react";
import { Home } from "./pages/Home";
import { MyFavourites } from "./pages/MyFavourites";
import { Top20 } from "./pages/Top20";
import { About } from "./pages/About";
import { Navbar } from "./Components/UI/navbar.jsx";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CurrentPage from "./pages/CurrentPage";
import Schedule from "./pages/Schedule";
import { useParams } from "react-router-dom";
// import Recomendedshows from "./Components/ratingSection/Recomended";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-favourites" element={<MyFavourites />} />
          <Route path="/top-20-series" element={<Top20 />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/CurrentPage/:name" element={<CurrentPage />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* <Recomendedshows /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
