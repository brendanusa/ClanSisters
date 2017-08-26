import React from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const ClanCreator = (props) =>  {
  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onClick={props.handleClose}
    />,
    <FlatButton
      label="Submit"
      primary={true}
      keyboardFocused={true}
      onClick={props.handleClose}
    />,
  ];
  return (
    <div>
      <RaisedButton label="Clan Builder" onClick={props.handleOpen} />
      <Dialog
        title="Create a new clan"
        actions={actions}
        modal={false}
        open={props.open}
        onRequestClose={props.handleClose}
      >
      <TextField onKeyPress={props.handleKeyPress} hintText='hello@world.com' floatingLabelText='Clan Name' type='text' value={props.clanName} onChange={props.handleInputChange.bind(this, 'clanName')} />
      </Dialog>
    </div>
  );
}

  export default ClanCreator;
