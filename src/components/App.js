
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">React Router</h1>
        <p className="lead">This is a portfolio app</p>
        <hr className="my-4"></hr>
        <p>It is built on React with react router and uses Bootstrap for styling.</p>
        <p className="lead">
          <Link to="/home">
            <button className="btn btn-primary btn-lg">Check it out!</button>
          </Link>
        </p>
      </div>
    )
  }
}
