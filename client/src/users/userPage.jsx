import React from 'react'
import UserClans from './userClans.jsx'
import UserPosts from './userPosts.jsx'

/*
Right now I just plan on having the user profile information in a div box, I don't see anything in-
the material-ui library that is really built for that type of stuff. 

The posts will probably need to be fed via an array with a map. It would be nice to be able to go back to-
the api for more posts once you scroll past a certain number of posts (say 25), or else loading all of the-
posts will need to be loaded. 

*/


const User = (props) => {
    return (
    <div>
        <div>
            User Page test text 
        </div>
    </div>
    )
}

export default User;