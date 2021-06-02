import React, { useState, useEffect } from 'react'
import UserList from './UserList'

export default function UserMain() {
  const [users, setUsers] = useState(() => {
    $.ajax({
      url: `users`,
      method: 'GET',
      dataType: 'json',
      success: (data) => {
        console.log(data)
        setUsers(data)
      }
    })
  })

  useEffect(() => {
    console.log(123)
  })

  function userList() {
    if(users && users.length) {
      return <UserList users={users} />
    }
  }

  return (
    <div>{userList()}</div>
  )
}
