import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DialogOperation from "./dialogOperation";
class Routings extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dialog">Dialog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/dialog." element={<DialogOperation />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}
export default Routings;
function Home() {
  return (
    <div>
      <h2>Home Page</h2>
    </div>
  );
}
function About() {
  return (
    <div>
      <p>This is Roshini</p>
    </div>
  );
}
