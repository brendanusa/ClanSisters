import React from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

// Props needed:
//
// onSubmit() - Function that will be called with the name of the new clan upon user submission

class ClanCreator extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      clanName: '',
      open: false
    };
    if (!props.onSubmit) {
      throw new Error('No onSubmit function was passed in');
    }
    this.onSubmit = props.onSubmit;
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.submit = this.submit.bind(this);
    this.cancel = this.cancel.bind(this);
    this.actions = [
      <FlatButton
        label="Cancel"
        primary={false}
        onClick={this.cancel}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.submit}
      />
    ];
  }

  handleOpen () {
    this.setState({open: true});
  }
  handleClose () {
    this.setState({open: false});
  }

  handleInputChange (property, e)  {
    let stateChange = {};
    stateChange[property] = e.target.value;
    this.setState(stateChange);
  }
  handleKeyPress (e) {
    if (e.key === 'Enter') {
      this.submit();
    }
  }

  submit () {
    if (this.state.clanName !== '') {
      this.handleClose();
      this.onSubmit(this.state.clanName);
      this.setState({clanName: ''});
    }
  }
  cancel () {
    this.handleClose();
    this.setState({clanName: ''});
  }

  render () {
    return (
      <div>
        <RaisedButton label="Clan Builder" onClick={this.handleOpen} />
        <Dialog
          title="Create a New Clan"
          actions={this.actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.cancel}
        >
        <TextField onKeyPress={this.handleKeyPress} floatingLabelText='Clan Name' type='text' value={this.state.clanName} onChange={this.handleInputChange.bind(this, 'clanName')} />
        </Dialog>
      </div>
    );
  }
}

export default ClanCreator;