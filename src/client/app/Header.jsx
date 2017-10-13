import React from 'react';
import SearchBar from './SearchBar.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                    <a className="nav-link" href="#">Log Out</a>
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
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <a className="navbar-brand" href="#">wishList</a>
              <div className="collapse navbar-right navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Sign Up</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Log In</a>
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

export default Header;