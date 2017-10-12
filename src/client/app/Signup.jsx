import React from 'react';
import { Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.signUp = this.signUp.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  signUp(e) {
    //e.preventDefault();
    let user = { username: this.state.username, password: this.state.password };
    this.props.handleSignUp(user);
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
              <h1>SIGN UP</h1>
              <form onSubmit={this.handleSignUp}>
                <label>email</label>
                <br />
                <input type="email" placeholder="name@example.com" onChange={this.handleUsername} value={this.state.username} required/>
                <br />
                <label>password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handlePassword} required/>
              </form>
              <div className="login-form-button">
                <FlatButton
                  label="Submit"
                  primary={true}
                  onClick={() => {
                    this.signUp();
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

export default Signup;
