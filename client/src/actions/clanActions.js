import axios from 'axios';

export const types = {
  FETCH_ALL_CLANS: 'FETCH_ALL_CLANS',
  FETCH_USER_CLANS: 'FETCH_USER_CLANS',
  ADD_CLAN: 'ADD_CLAN'
};

//fetchAllClans is an action cretor
//note that action creators in redux are always 
//ran with dispatch, a method of redux
export const fetchAllClans = () => {
  const getClans = axios.get('api/clans')
  return (dispatch) => {
    getClans
      .then(clans => {
        // console.log('should be all of the clans: ', clans);
        
        dispatch({
          type: types.FETCH_ALL_CLANS,
          payload: clans
        });
      })
      .catch(err => {
        console.log('error getting all clans');
        throw err;
      });
  }
};


export const addClan = () => {
  return {
    type: types.ADD_CLAN,
    payload: [{key: 1, type: 'FPS', tag: ['shooter', 'Call of Duty'], avatar: 'avatarURLimg', description: 'this game is fun, play it.'}]
  };
};
// axios.post('/', {type: 'FPS', tag: ['shooter', 'Call of Duty'], avatar: 'avatarURLimg', description: 'this game is fun, play it.'})
//   .then(res => {
//     fetchAllClans();
//   })
//   .catch(err => console.log('error in addClan: ', err));



