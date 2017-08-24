import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

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

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  )
}