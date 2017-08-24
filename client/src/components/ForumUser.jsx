import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';


/*
It would be really cool if we could add avatars here. 
*/

const ForumUser = (props) => {
    return (
        <Card>
            <CardHeader
            title= {props.user.name}
            />
            <CardText>
                User Test text. 
            </CardText>
        </Card>
    )
}

export default ForumUser;