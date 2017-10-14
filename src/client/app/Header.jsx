import React from 'react';
import SearchBar from './SearchBar.jsx';
import { Route, Link, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div>
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">
              <a className="navbar-brand" href="#">wishList</a>
              <div className="collapse navbar-right navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <span className="navbar-text">
                        Welcome!
                    </span>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={this.props.handleLogout}>Log Out</a>
                  </li>
                </ul>
                <SearchBar handleSearch={this.props.handleSearch}/>
              </div>
            </div>
          </nav>
        </div>
      );
    } else {
      return (
        <div>
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">
              <a className="navbar-brand" href="#">wishList</a>
              <div className="collapse navbar-right navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to="/signupUser" className="nav-link" href="#">Sign Up</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/loginUser" className="nav-link" href="#">Log In</Link>
                  </li>
                </ul>
                <SearchBar handleSearch={this.props.handleSearch}/>
              </div>
            </div>
          </nav>
        </div>
      );
    }
  }
}