import axios from 'axios';

module.exports.fetchAll = () => {
  axios.get('/forums')
    .then((forums) => {
      dispatch({
        type: types.FETCH_ALL_FORUMS,
        payload: forums
      });
    })
    .catch(err => {
      console.log('Error fetching all forums');
      throw err;
    });
};

module.exports.fetchById = (forumId) => {
  axios.get(`/forums/${forumId}`)
    .then((forum) => {
      dispatch({
        type: types.FETCH_FORUM_BY_ID,
        payload: forum
      });
    })
    .catch(err => {
      console.log('Error fetching forum');
      throw err;
    });
};

module.exports.fetchPosts = (forumId) => {
  axios.get(`/forums/${forumId}/posts`)
    .then((posts) => {
      dispatch({
        type: types.FETCH_FORUM_POSTS,
        payload: posts
      });
    })
    .catch(err => {
      console.log('Error fetching forum posts');
      throw err;
    });
};

module.exports.fetchPost = (forumId, postId) => {
  axios.get(`/forums/${forumId}/posts/${postId}`)
    .then((post) => {
      dispatch({
        type: types.FETCH_FORUM_POSTS,
        payload: post
      });
    })
    .catch(err => {
      console.log('Error fetching forum post');
      throw err;
    });
};

module.exports.createPost = (forumId, postId) => {
  axios.post(`/forums/${forumId}/posts`)
    .catch(err => {
      console.log('Error fetching forum post');
      throw err;
    });
};

module.exports.createForum = (forumId, postId) => {
  axios.post(`/forums/${forumId}/posts`)
    .catch(err => {
      console.log('Error creating forum');
      throw err;
    });
};