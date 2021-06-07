import React from "react"
import { Provider } from 'react-redux'
import { store } from '../store'
import UserList from './User/List'
import UserCreateForm from './User/CreateForm'
import UserEditForm from './User/EditForm'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <UserList />
          </Route>
          <Route path="/create">
            <UserCreateForm />
          </Route>
          <Route path="/edit/:id" component={UserEditForm}></Route>
        </Switch>
      </Router>
    </Provider>
  )
}
