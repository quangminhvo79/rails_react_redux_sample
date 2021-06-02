import React, { useState } from 'react';
import UserRow from './UserRow';
import UserForm from './UserForm';

export default function UserList(props) {
  const [ isCreate, setIsCreate] = useState(false)
  const userObj = {
    first_name: '',
    last_name: '',
    email: ''
  }

  function handleUserList() {
    return (
      props.users.map((user) => {
        return <UserRow user={user} key={user.id} />
      })
    )
  }

  function renderCreatForm() {
    if (isCreate) return <UserForm user={userObj} isCreate={true} />
  }

  return (
    <div>
      <div className="user-list">
        {handleUserList()}
      </div>
      <div>
        {renderCreatForm()}
      </div>
      <div>
        <button onClick={() => setIsCreate(!isCreate)}>Create</button>
      </div>
    </div>
  )
}
