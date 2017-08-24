import React from 'react'
import ShowForums from '../components/ShowForums.jsx';
import AutoComplete from 'material-ui/AutoComplete';
import ForumUserList from '../components/ForumUserList.jsx';
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

const Clan = (props) => {
    return (
        <div>
            WURLDZ BIGGEST BORDERLANDS 1 CLAN!!
            <div>
            <RaisedButton
            label = 'JOIN THIS CLAN'
            onClick = {joinClan}
            />
            </div>
        <div>
           <ShowForums /> 
        </div>
        <div>
            <AutoComplete         
              hintText="Find a clan!!"
              dataSource={testClans}
              menuProps={menuProps}
              />
        </div>
        <div>
            <ForumUserList /> 
        </div>

        </div>
    )
}

export default Clan;