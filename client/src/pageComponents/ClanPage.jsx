import React from 'react'
import ShowForums from '../components/ShowForums.jsx';
import RaisedButton from 'material-ui/RaisedButton';

/*
The find clans component is the same as the one on the home page. 

I think this has been mentioned before, but it would be super cool if we 
could have clans have their own avatars. 

When the button is pressed we should be able to join the clan. 
More styling can be added pretty easily, look at the Material-ui docs. 



*/

const joinClan = () => {
    alert('NUCLEAR LAUNCH IN 5, 4, 3...')
}

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
        </div>
    )
}

export default Clan;