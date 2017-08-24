import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ForumCard from './ForumCard.jsx';
/*
I am going to use the map method here in order to populate clan forums. 
This may not be the best way to implement this within the scope of Redux.  
Redux-ers, please feel free to change this schematic as you see needed. 

The dialog box should lead us to a form where we can create a new forum. 
Eventually, a lot of stuff here may need re-written with redux. 

*/

const clanForums = [
  {title: 'Test', heading: 'Test Heading', id:'001'},
  {title: 'Test2', heading: 'Test Heading 2', id: '002'},
  {title: 'Test3', heading: 'Test Heading 3', id: '003'}

]


const forumScrollbox = {
  height: '200px',
  width: '500px',
  border: '5px',
  overflow: 'auto',
}


export default class ShowForums extends React.Component {
  constructor (props ) {
    super(props)
    this.state = {
      open: false,
    };

      
  const handleOpen = () => {
    console.log('opening')
    this.setState({open: true});
  };

  const handleClose = () => {
    console.log('closing')
    this.setState({open: false});
  };
}
    render () {
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
      <div style = {forumScrollbox} >
        {clanForums.map(forum =>
        <ForumCard forum = {forum} key= {forum.id} />
        )}
      </div>
      <div>
      <RaisedButton label="Add a Forum" onClick={this.handleOpen} />
        <Dialog
          title="New Forum"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Eventually, this will have forms that will allow us to make a clan.
        </Dialog>
      </div>
    </div>
    )
    }
}