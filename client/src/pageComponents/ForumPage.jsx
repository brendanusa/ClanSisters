import React from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Nav from '../components/Nav.jsx';

const style = {
  height: '200px',
  width: '600px',
  border: '5px',
  overflow: 'auto',
}

class ForumPage {
  constructor (props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  render () {
    return (
      <div style={style}>
        <Nav/>
        {this.state.posts.map((post) => {
          return (
            <div key={post.id}>
              <Card>
                <CardHeader
                  title={post.user}
                />
                <CardText>
                  {post.text}
                </CardText>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ForumPage;