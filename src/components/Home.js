import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';


class Home extends Component {
  render() {
    return (
      <div>
      <h1> the Royal Portfolio </h1>
      <p> Click here to see a portfolio that rules: </p>
      <button className="button"><Link to="/Portfolio">View Portfolio</Link></button>
      </div>
    );
  }
}

export default Home;
