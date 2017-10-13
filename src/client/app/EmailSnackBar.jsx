import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

export default class EmailSnackBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Event added to your calendar',
      open: false,
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
    this.props.sendList();
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <div>
        <RaisedButton
          onClick={
            this.handleTouchTap
          }
          label="Email List"
        />
        <Snackbar
          open={this.state.open}
          message="Email sent!"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}
