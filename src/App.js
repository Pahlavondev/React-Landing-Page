import React from "react";
import Navbar from "./HomePage/Navbar";
import "./HomePage/styles/main.scss";
import Categories from "./HomePage/Categories";
import Home from "./HomePage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SmartWatch from "./recommended/SmartWatch";
import Advertising from "./advertising-banner/Advertising";
import NewCollection from "./newcollection/NewCollection";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Categories />} />
        </Routes>
      </Router>
      <Home />
      <SmartWatch />
      <Advertising />
      <NewCollection />
    </>
  );
}

export default App;
