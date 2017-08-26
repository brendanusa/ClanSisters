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
    super(props);
  };

  render () {
    return (  <div>
      <h1 className= 'textCenter' > Welcome to ClanSisters!!</h1>
        <div className = 'clanSearchBox'>
          You can search for an existing clan... <AutoComplete
          hintText="Find a clan!!"
          dataSource={[]}
          menuProps={menuProps}
          />
        </div>
        <div className = 'clanCreatorButton'>
          Or simply create your own!! 
          <ClanCreator/>
        </div>
        <div style= {style} >
          Existing clans
          <ClanList clans={[]} />
        </div>
        <div className = 'usersOnlineStyle' >
          PlaceHolder for Users Online.
        </div>

      </div>
    )
  }
}

export default Home;