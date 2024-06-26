import React from "react";
import { Component } from "react";
import NavBar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
//import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
export default class App extends Component {
  render() {
    return (
      
      <div>
        {/* <News pageSize={5} country="in" category="general" /> */}
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={5} country="in" category="general" />} />
            <Route exact path="/business" element={<News key="business" pageSize={5} country="in" category="business" />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={5} country="in" category="sports" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={5} country="in" category="entertainment" />} />
            <Route exact path="/science" element={<News key="science" pageSize={5} country="in" category="science" />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={5} country="in" category="technology" />} />
            <Route exact path="/health" element={<News key="health" pageSize={5} country="in" category="health" />} />
            <Route exact path="/general" element={<News key="general" pageSize={5} country="in" category="general" />} />
          </Routes>
          </Router>
      </div>
      
    );
  }
}
