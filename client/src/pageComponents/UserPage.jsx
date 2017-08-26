import React from 'react';
<<<<<<< HEAD
import UserClans from '../components/UserClans.jsx';
import ForumList from '../components/ForumList.jsx';
import Nav from '../components/Nav.jsx';
=======
import UserClans from '../components/UserClans.jsx'
import ForumList from '../components/ForumList.jsx'
import { connect } from 'react-redux'
import { fetchUserClans } from  '../actions/clanActions'

>>>>>>> 1c551dc17cf4d87e2d6ce94e17719ddd7d580b82

/*
Right now I just plan on having the user profile information in a div box, I don't see anything in-
the material-ui library that is really built for that type of stuff.

The posts will probably need to be fed via an array with a map. It would be nice to be able to go back to-
the api for more posts once you scroll past a certain number of posts (say 25), or else loading all of the-
posts will need to be loaded.


Note, our testClans are the same in several different places. 
*/

class User extends React.Component {
  constructor (props ) {
    super(props)
    this.state = {
      open: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen () {
    this.setState({open: true});
  };

  handleClose () {
    this.setState({open: false});
  };


  render () {
      return (
      <div>
          <div className = 'userForumListBox'>
            <ForumList 
            handleClose = {this.handleClose} 
            handleOpen = {this.handleOpen} 
            open = {this.state.open}
            forums = {[]} />
          </div>      
          <div className = 'profileData'>
            This box here is designed to hold our user profile data.
          </div>
          <div>
            <UserClans clans = {[]} />
          </div>
      </div>
      )
  }
}

export default User;
