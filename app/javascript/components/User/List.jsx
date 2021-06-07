import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers, deleteUser } from '../../userService'

import { Link } from "react-router-dom";

export default function List() {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()

  React.useEffect( () => {
    dispatch(getUsers())
  }, [])

  const onDelete = async (userId) => {
    console.log(userId)
    let result = await deleteUser(userId)
    if(result.success) {
      dispatch(getUsers())
    }else{
      toastr.error('Error')
    }
  }

  const renderUsers = () => {
    return (
      users.map((user) => {
        return (
          <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>
              <Link to={{ pathname: `/edit/${user.id}` }}  className="btn btn-primary btn-sm me-3">Edit</Link>
              <button onClick={ () => onDelete(user.id) } className="btn btn-danger btn-sm" >Delete</button>
            </td>
          </tr>
        )
      })
    )
  }

  return (
    <div>
      <h2>User List</h2>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {renderUsers()}
        </tbody>
      </table>
      <div>
        <Link to="/create" className="btn btn-primary mt-3">Create</Link>
      </div>
    </div>
  )
}
