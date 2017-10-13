import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div>
        </div>
      );
    } else {
      return (
        <div>
          <nav class="navbar navbar-light">

          </nav>
        </div>
      );
    }
  }
}

export default Header;