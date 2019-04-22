import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Search from "./search";

export default class Hamburger extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Menu">
        <img src={require("../photos/Hamburger.png")} width="24" />
        <div className="DropDown">
          <a href="https://www.ittf.com/news/">NEWS</a>
          <a href="https://world-championships.netlify.com/">TOURNAMENTS</a>
          <a href="https://www.ittf.com/rankings/">PLAYERS</a>
          <a href="https://tv.ittf.com/">LIVE</a>
          <Link to="/tickets">TICKETS</Link>
          <Link to="/store">STORE</Link>
          <a href="#">MORE</a>
        </div>
      </div>
    );
  }
}
