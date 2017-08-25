import axios from 'axios';

module.exports.fetchUserClans = (userId) => {
  axios.get(`/users/${userId}/members`)
    .then(memberships => {
      dispatch({
        type: types.FETCH_USER_CLANS,
        payload: memberships
      });
    })
    .catch(err => {
      console.log('error getting user clans');
      throw err;
    });
};

module.exports.fetchAllUsers = () => {
  axios.get('/users')
    .then((users) => {
      dispatch({
        type: types.FETCH_ALL_USERS,
        payload: users
      });
    });
};