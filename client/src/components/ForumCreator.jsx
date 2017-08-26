import React from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

// Props needed:
//
// onSubmit() - Function that will be called with the name of the new forum upon user submission

class ForumCreator extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      forumName: '',
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
    if (this.state.forumName !== '') {
      this.handleClose();
      this.onSubmit(this.state.forumName);
      this.setState({forumName: ''});
    }
  }
  cancel () {
    this.handleClose();
    this.setState({forumName: ''});
  }

  render () {
    return (
      <div>
        <RaisedButton label="Forum Builder" onClick={this.handleOpen} />
        <Dialog
          title="Create a New Forum"
          actions={this.actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.cancel}
        >
        <TextField onKeyPress={this.handleKeyPress} floatingLabelText='Forum Name' type='text' value={this.state.forumName} onChange={this.handleInputChange.bind(this, 'forumName')} />
        </Dialog>
      </div>
    );
  }
}

export default ForumCreator;