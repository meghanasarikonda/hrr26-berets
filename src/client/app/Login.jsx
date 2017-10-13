import React from 'react';
import { Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.logIn = this.logIn.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  logIn(e) {
    //e.preventDefault();
    let user = { username: this.state.username, password: this.state.password };
    this.props.handleLogIn(user);
    this.setState({ password: '' });

  }

  handleUsername(e) {
    this.setState({ username: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to='/'/>;
    }
    return (
      <MuiThemeProvider>
        <div>
          <div className="wrapper login-forms-container">
            <div className="login-forms">
              <h1>LOGIN</h1>
              <form onSubmit={this.logIn}>
                <label>email</label>
                <br />
                <input type="email" placeholder="name@example.com" onChange={this.handleUsername} value={this.state.username} required/>
                <br />
                <label>password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handlePassword} required/>
              </form>
              <a href="/auth/google">Sign In with Google</a>
              <div className="login-form-button">
                <FlatButton
                  label="Submit"
                  primary={true}
                  onClick={() => {
                    this.logIn();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}


export default Login;
