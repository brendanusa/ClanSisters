import React from 'react'
import express from 'express'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/*
I know that we want to have our state within our redux, but right now we need
to have the true/false state here. This can be refactored out in the future.
*/
export default class clanCreator extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Create your own clan!!!" onClick={this.handleOpen} />
        <Dialog
          title="Create a new clan"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Testing, input boxes will be here eventually. 
        </Dialog>
      </div>
    );
  }
}
