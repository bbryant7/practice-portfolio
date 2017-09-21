import React, { Component } from 'react';
import '../styles/App.css';
import {NavLink} from 'react-router-dom';




class BaseLayout extends Component {
  render() {


    return (


    <div>
    <div className="NavBar">
     <nav>
      <NavLink activeClassName="selected"  activeStyle={{color: "#FAD334"}} className="nav-link" exact to='/'> <span className="splash">Splash Page </span></NavLink>
      <NavLink activeClassName="selected" activeStyle={{color: "#FAD334"}} className="nav-link" to='/home'> Home </NavLink>
      <NavLink activeClassName="selected" activeStyle={{color: "#FAD334"}} className="nav-link" to='/about'> About</NavLink>
      <NavLink activeClassName="selected" activeStyle={{color: "#FAD334"}} className="nav-link" to='/portfolio'> Portfolio </NavLink>
      <NavLink activeClassName="selected" activeStyle={{color: "#FAD334"}} className="nav-link" to='/contact'> Contact </NavLink>
      <NavLink activeClassName="selected" activeStyle={{color: "#FAD334"}} className="nav-link" to='/references'> References </NavLink>
     </nav>
     </div>
    <div className="subject">
    {this.props.children}
    </div>
    </div>
    );
  }
}

export default BaseLayout;
