import React from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';

const style = {
  height: '200px',
  width: '200px',
  border: '5px',
  overflow: 'auto',
}

const UserList = () => (
	<div>
		<div>User List</div>
		<div style = {style} >
			{this.props.users.map(user =>
				<Card>
					<CardHeader
						title= {props.user.name}
					/>
					<CardText>
						User Test text. 
					</CardText>
        </Card>
			)}
		</div>
  </div>
);

export default UserList;
