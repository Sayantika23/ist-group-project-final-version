import React from "react";
import "./ranking.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "../components/header.js";
export default class Ranking extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="Ranking">
    <Header />
    <iframe src="https://elastic-pare-30706b.netlify.com"></iframe>
    </div>);
  }
}
