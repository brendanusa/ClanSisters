import React from 'react';
import Nav from '../components/Nav.jsx';
import { connect } from 'react-redux'
import ForumList from '../components/ForumList.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCurrentUser, fetchUserClans, fetchUserForums } from '../actions/clanActions.js';
import UserClans from '../components/UserClans.jsx';
import UserForums from '../components/UserForums.jsx';
import UserProfile from '../components/UserProfile.jsx';

class UserPage extends React.Component {
  constructor (props ) {
    super(props)
    var profileDataStyles = {
      width: '300px',
      border: '50px black',
      padding: '50px',
      margin: '50px,'
    };
    this.state = {
      open: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen () {
    this.setState({open: true});
  }

  handleClose () {
    this.setState({open: false});
  }


  componentWillMount() {
    this.props.fetchCurrentUser();
    this.props.fetchUserClans();
    this.props.fetchUserForums();
  }

  render() {
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
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
