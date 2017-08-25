import { types } from '../actions/clanActions.js';

export const rootReducer = (state = initialState, action) => {
  let newState;
  if (action.type === types.FETCH_ALL_CLANS) {
    newState = {...state, clans: action.payload};
  } else if (action.type === types.FETCH_USER_CLANS) {
    newState = {...state, members: action.payload};
  } else if (action.type === types.ADD_CLAN) {
    console.log('in the correct reducer block', action);
    newState = {...state, clans: action.payload};
  }
  return newState || state;
};