import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const forumViewer = () => {
    alert('In production, this button would redirect to the selected forum.')
}

const forumJoiner = () => {
    alert('In production, this button would allow us to join the selected forum.')
}

const ForumCard = (props) => {
    return (
        <Card>
            <CardHeader
            title= {props.forum.title}
            subtitle = {props.forum.heading}
            />
            <CardText>
                If we want to add more information about the forum, this would be place to make it happen!!!!
            </CardText>
            <CardActions>
              <FlatButton label="View Forum" onClick = {forumViewer} />
              <FlatButton label="Join Forum" onClick = {forumJoiner} />
            </CardActions>
        </Card>
    )
}

export default ForumCard;