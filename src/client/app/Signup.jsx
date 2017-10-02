import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleSignUp(e) {
    e.preventDefault();
    let user = { username: this.state.username, password: this.state.password };
    this.props.onSignupSubmit(user);
  }

  handleUsername(e) {
    this.setState({ username: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div>
        <h2> Signup </h2>
        <div id="login" className="pull-right">
          <form onSubmit={this.handleSignUp.bind(this)}>
            <label>e-mail</label>&nbsp;&nbsp;
            <input type="email" placeholder="name@example.com" onChange={this.handleUsername.bind(this)} required></input> <br /><br />
            <label>password</label>&nbsp;&nbsp;
            <input type="password" onChange={this.handlePassword.bind(this)} required></input> <br /><br />
            <button type="submit"> Submit </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
