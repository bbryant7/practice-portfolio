import React, { Component } from 'react';
import '../styles/App.css';
import {NavLink} from 'react-router-dom';




class BaseLayout extends Component {
  render() {

    let selected = {
    color: "red",
  };
    return (


    <div>
    <div className="NavBar">
     <nav>
      <NavLink activeClassName="selected"  activeStyle={{color: "blue"}} className="nav-link" exact to='/'> Splash Page </NavLink>
      <NavLink activeClassName="selected" activeStyle={{color: "blue"}} className="nav-link" to='/home'> Home </NavLink>
      <NavLink activeClassName="selected" activeStyle={{color: "blue"}} className="nav-link" to='/about'> About</NavLink>
      <NavLink activeClassName="selected" activeStyle={{color: "blue"}} className="nav-link" to='/portfolio'> Portfolio </NavLink>
      <NavLink activeClassName="selected" activeStyle={{color: "blue"}} className="nav-link" to='/contact'> Contact </NavLink>
      <NavLink activeClassName="selected" activeStyle={{color: "blue"}} className="nav-link" to='/references'> References </NavLink>
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
