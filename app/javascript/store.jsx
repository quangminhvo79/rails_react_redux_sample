import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
const initialState = {
  users: [],
  user: {
    first_name: '',
    last_name: '',
    email: ''
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload.users }
    case GET_USER:
      return { ...state, user: action.payload.user }
    case USER_CHANGE:
      return { ...state, user: action.payload }
    default:
      return state;
  }

}

export const GET_USERS = 'get_users'
export const GET_USER = 'get_user'
export const CREATE_USER = 'create_user'
export const USER_CHANGE = 'user_change'

export const store = createStore(reducer, applyMiddleware(thunk))

export const getUsers = (state) => state.users

