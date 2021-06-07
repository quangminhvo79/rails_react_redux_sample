import request from 'axios'
import { GET_USERS, GET_USER, CREATE_USER } from './store'

export function getUsers() {
  return function getUsersThunk(dispatch) {
    request.get('/users/list').then(respond => {
      dispatch({
        type: GET_USERS,
        payload: respond.data
      })
    })
  }
}

export function getUser(userId) {
  return function getUserThunk(dispatch) {
    request.get(`/users/${userId}`).then(respond => {
      dispatch({
        type: GET_USER,
        payload: respond.data
      })
    })
  }
}

export async function createUser(user_params) {
  let respond = await request.post('/users', user_params)
  return respond.data
}

export async function updateUser(id, user_params) {
  let respond = await request.put(`/users/${id}`, user_params)
  return respond.data
}

export async function deleteUser(id) {
  let respond = await request.delete(`/users/${id}`)
  return respond.data
}
