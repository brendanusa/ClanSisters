import React from 'react';
import UserClans from '../components/UserClans.jsx'
import ForumList from '../components/ForumList.jsx'
import { connect } from 'react-redux'
import { fetchUserClans } from  '../actions/clanActions'


/*
Right now I just plan on having the user profile information in a div box, I don't see anything in-
the material-ui library that is really built for that type of stuff.

The posts will probably need to be fed via an array with a map. It would be nice to be able to go back to-
the api for more posts once you scroll past a certain number of posts (say 25), or else loading all of the-
posts will need to be loaded.



*/

const profileDataStyles = {
    width: '300px',
    border: '50px black',
    padding: '50px',
    margin: '50px,'
}

class User extends React.Component {

    render() {
        return (
        <div>
            <div className = 'profileData' style = {profileDataStyles}>
            This box here is designed to hold our user profile data.
            I didn't really see anything in the material-ui library that works for this.
            Perhaps we can add something like react bootstrap later that will give us some
            other components.
            </div>
            <div>
              <UserClans />
            </div>
            <div>
                INSERT_USER_NAME_HERE'S forums
              <ForumList forums={[]} />
            </div>
        </div>
    )}
}


export default User;
