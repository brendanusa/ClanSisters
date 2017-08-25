import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
/*
I am going to use the map method here in order to populate clan forums. 
This may not be the best way to implement this within the scope of Redux.  
Redux-ers, please feel free to change this schematic as you see needed. 

The dialog box should lead us to a form where we can create a new forum. 
Eventually, a lot of stuff here may need re-written with redux. 

*/

const style = {
  height: '200px',
  width: '500px',
  border: '5px',
  overflow: 'auto',
};


const ForumList = (props) =>  {
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
      <div style = {style} >
        {props.forums.map(forum =>
          <Card key = {forum.id}>
            <CardHeader
            title= {forum.title}
            subtitle = {forum.heading}
            />
            <CardText>
              If we want to add more information about the forum, this would be place to make it happen!!!!
            </CardText>
            <CardActions>
              <FlatButton label="View Forum" onClick = {console.log} />
              <FlatButton label="Join Forum" onClick = {console.log} />
            </CardActions>
          </Card>
        )}
      </div>
      <div>
        <RaisedButton label="Add Forum" onClick={props.handleOpen} />
        <Dialog
          title="New Forum"
          actions={actions}
          modal={false}
          open={props.open}
          onRequestClose={props.handleClose}
        >
          Eventually, this will have forms that will allow us to make a clan.
        </Dialog>
      </div>
    </div>
  );
  }

export default ForumList;