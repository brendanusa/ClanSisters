import React from 'react'
<<<<<<< HEAD
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
    text: 'Disagreed, I think that we have competing visions of the fundamental arc of French politics. I have always been of the opinion that there is a fundamental disconnect between the way that we think of the ideal of French society and the... '

}

const UserPosts = () => {
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
*/

const fakePost = {
    clan: 'Civ VI',
    forum: 'PC building discussion',
    text: 'Disagreed, I think that we have competing visions of the fundamental arc of French politics. I have always been of the opinion that there is a fundamental disconnect between the way that we think of the ideal of French society and the... '

}

const UserPosts = () => {
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

export default UserPosts;
