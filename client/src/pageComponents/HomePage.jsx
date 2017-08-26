import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import ClanCreator from '../components/ClanCreator.jsx';
import ClanList from '../components/ClanList.jsx';
import Nav from '../components/Nav.jsx';

const style = {
  height: '375px',
  width: '700px',
  border: '5px',
  overflow: 'auto',
  float: 'right',
};

const menuProps = {
  desktop: true,
  disableAutoFocus: true,
};

class Home extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      open: false,
      clanName: ''
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  };

  handleInputChange (property, e)  {
    let stateChange = {};
    stateChange[property] = e.target.value;
    this.setState(stateChange);
  }
  handleKeyPress (e) {
    if (e.key === 'Enter') {
      this.sendRequest();
    }
  }

  handleOpen () {
    this.setState({open: true});
  }

  handleClose () {
    this.setState({open: false});
  }

  render () {
    return (  <div>
      <h1 className= 'textCenter' > Welcome to ClanSisters!!</h1>
        <div className = 'clanSearchBox'>
          You can search for an existing clan... <AutoComplete
          hintText="Find a clan!!"
          dataSource={this.state.clans || []}
          menuProps={menuProps}
          />
        </div>
        <div className = 'clanCreatorButton'>
          Or simply create your own!! 
          <ClanCreator 
            handleClose = {this.handleClose} 
            handleOpen = {this.handleOpen} 
            handleInputChange = {this.handleInputChange}
            handleKeyPress = {this.handleKeyPress}  
            open = {this.state.open}
            clanName = {this.state.clanName}
          />
        </div>
        <div style= {style} >
          Existing clans
          <ClanList clans={this.state.clans || []} />
        </div>
        <div className = 'usersOnlineStyle' >
          PlaceHolder for Users Online.
        </div>

      </div>
    )
  }
}

export default Home;