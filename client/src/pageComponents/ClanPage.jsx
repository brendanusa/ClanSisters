import ClanList from '../components/ClanList.jsx';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchAllClans, addClan } from  '../actions/clanActions'

import React from 'react'
import ForumList from '../components/ForumList.jsx';
import AutoComplete from 'material-ui/AutoComplete';
import UserList from '../components/UserList.jsx';
import RaisedButton from 'material-ui/RaisedButton';

/*
The find clans component is the same as the one on the home page. 

I think this has been mentioned before, but it would be super cool if we 
could have clans have their own avatars. 

When the button is pressed we should be able to join the clan. 
More styling can be added pretty easily, look at the Material-ui docs. 

The Autocomplete that we have here should return the same results as the
the autocomplete from the home page. 


*/

const joinClan = () => {
    alert('NUCLEAR LAUNCH IN 5, 4, 3...')
}

const testForums = [
  {title: 'test001', heading: 'test001', id: 'test001'},
  {title: 'test002', heading: 'test002', id: 'test002'},
  {title: 'test003', heading: 'test003', id: 'test003'}
]

const testClans = [
  'Starcraft',
  'Mass Effect',
  'FIFA',
  'Crysis',
  'Battlefield',
  'Destiny'
]

const menuProps = {
  desktop: true,
  disableAutoFocus: true,
};

const testUsers = [

  {name: 'Test001', id: '001'}
]

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

class Clan extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('props: ', this.props);
    this.props.addClan()
  }

  render() {
    return (
      <div>
          WURLDZ BIGGEST BORDERLANDS 1 CLAN!!
          <div>
          <h2>THE CLANS: {this.props.clans && this.props.clans.length ? this.props.clans[0].type : ''}</h2>
            <RaisedButton
            label = 'JOIN THIS CLAN'
            onClick = {() => this.handleClick()}
            />
          </div>
      <div>
         <ForumList forums={[]} /> 
      </div>
      <div>
          <AutoComplete         
            hintText="Find a clan!!"
            dataSource={testClans}
            menuProps={menuProps}
            />
      </div>
      <div>
        <ClanList clans={this.props.clans}/>
      </div>
      </div>
  )}
}

export default connect(mapStateToProps, mapDispatchToProps)(Clan);