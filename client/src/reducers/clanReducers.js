import { fetchAllClans, fetchUserClans, types } from '../actions/clanActions.js';

const initialState = {
  chatrooms: [],
  users: [],
  currentUser: null,
  clans: [],
  currentClan: null,
  chatrooms: [],
  currentChatroom: null,
  membersOnline: [],
  posts: []
}

export const rootReducer = (state=initialState, action) => {
  
  // switch(action.type)
  //   case(types.FETCH_ALL_CLANS): {
  //     //is the action being returned the one passed into the fetchClansReducer
  //     //function, or is it the result of invoking the action creator?
  //     return {...state, action.payload}
  //   }

  // How is the action creator being invoked? 
  // in the examples, such as that seen above, it seems like Redux invokes the
  // action creator corresponding with the action type before returning the new state
  let newState;
  if(action.type === types.FETCH_ALL_CLANS) {
    newState = {...state, clans: action.payload}
  } else if (action.type === types.FETCH_USER_CLANS) {
    newState = {...state, members: action.payload}
  }
  return newState
}

