import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import ClanCreator from './clanCreator.jsx'
import AllClans from './allClans.jsx'
/*
Dear Brendan/Others. I am using the material-ui autocomplete.
It takes in a datasource array. That array should be a list of clan names.
Please set this somewhere and pass it in the datasource object.
Right Now I am just going to pass a test object in to ensure that it works correctly.
*/

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

const Home = (props) => {
  return (  <div>
    <h3> Welcome to ClanSisters!! </h3>
      <div className = 'clanSearchBox'>
        <AutoComplete
        hintText="Find a clan!!"
        dataSource={testClans}
        menuProps={menuProps}
        />
      </div>
        <ClanCreator />

      <div>
        <AllClans />
      </div>
    </div>
  )
}

export default Home
