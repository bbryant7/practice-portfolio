import React, { Component } from 'react';
import '../styles/App.css';
import {NavLink} from 'react-router-dom';
import About from './About.js';
import Portfolio from './Portfolio.js';
import Contact from './contacts.js';
import References from './references.js';



class BaseLayout extends Component {
  render() {
    return (


    <div>
    <div className="NavBar">
     <nav>
      <NavLink to='/'> Home </NavLink>
      <NavLink to='/about'> About</NavLink>
      <NavLink to='/portfolio'> Portfolio </NavLink>
      <NavLink to='/contact'> Contact </NavLink>
      <NavLink to='/references'> References </NavLink>
     </nav>
     </div>
    <div>
    {this.props.children}
    </div>
    </div>
    );
  }
}

export default BaseLayout;
