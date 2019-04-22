// import React from "react";
import React, { Component } from 'react';
import "./ranking.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./header";

export default class Ranking extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="Ranking">
    <Header />
    <iframe src="https://people.rit.edu/sq3465/646/Group/ranking"></iframe>
    </div>);
  }
}
