import React from 'react'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';

/*
This component is designed to show all of the userPosts of the current user.
they will probably need to be throttled in some fashion, as simply showing every
single post that a user has ever created is not optimal. I'm going to build this
with some fake data right now. Data needs to be passed into this component
via a map/forEach.

Note, the sizing on this component will probably need to be significantly changed.
*/

const fakePost = {
    clan: 'Civ VI',
    forum: 'PC building discussion',
    text: 'Join us for great build ideas!!'

}

const UserForums = () => {
    return (
        <Card>
            <CardHeader
            title= {fakePost.clan}
            subtitle = {fakePost.forum}
            />
            <CardText>
                {fakePost.text}
            </CardText>
        </Card>
    )
}
export default UserForums;
