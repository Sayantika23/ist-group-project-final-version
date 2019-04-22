// import React from "react";
import React, { Component } from 'react';
import "./stat.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "../components/header.js";
import sessionManager from "../commons/session-manager";


class App extends Component {
  componentDidMount() {
    if(!sessionManager.isLoggedIn()) {
      console.log('User not logged in', 'Redirecting ...');
      window.location.href = '/login';
    }
  }

// export default class Stat extends React.Component {
  // constructor(props) {
    // super(props);
  // }

  render() {
    return (<div className="Stat">
    <Header />
    <iframe src="https://people.rit.edu/sq3465/646/Group/Showcase.html"></iframe>
    </div>);
  }
}


export default App;
