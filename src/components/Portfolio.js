import React, { Component } from 'react';
import palace from '../public/buckingham.jpeg';
import family from '../public/famfam.jpg';
import dogs from '../public/corgis.jpeg';


class Portfolio extends Component {
  render() {
    let imgStyle = {
    height: 300,
    padding: 10
    };
    return (

      <div>
      <h1> Sample Portfolio </h1>

      <h2> Project 1 </h2>
      <img src={palace} style={imgStyle} alt='hi'></img>

      <h2> Project 2 </h2>
      <img src={family} style={imgStyle} alt='hi'></img>

      <h2> Project 3 </h2>
      <img src={dogs} style={imgStyle} alt='hi'></img>
      </div>

    );
  }
}

export default Portfolio;
