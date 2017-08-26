import React from 'react';
import ForumList from '../components/ForumList.jsx';
import AutoComplete from 'material-ui/AutoComplete';
import UserList from '../components/UserList.jsx';
import ClanList from '../components/ClanList.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import Nav from '../components/Nav.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllClans, addClan } from  '../actions/clanActions';

const joinClan = () => {
  this.props.dispatch(addClan)
}

const menuProps = {
  desktop: true,
  disableAutoFocus: true,
};

const mapStateToProps = (state) => {
  return {
    clans: state.clans
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchAllClans,
    addClan
  }, dispatch)
}

class ClanPage extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      open : false
    };
  }

  render () {
    return (
      <div>
        <Nav/>
        <div className = 'textCenter'>
          <RaisedButton
          label = 'Join Clan'
          onClick = {() => this.props.fetchAllClans()}
          />
          <AutoComplete         
              hintText="Find a different clan!!"
              dataSource={this.props.clans}
              menuProps={menuProps}
          />
        </div>
        <h2>Your Clans</h2>
        <ClanList clans={this.props.clans || []}/>
        <div className = 'floatLeft'>
          Current Clan Forums
          <ForumList
            forums = {this.props.forums || []} 
          />
        </div>
        <div className ='userForumListBox'>
          <UserList users ={this.props.users || []} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClanPage);