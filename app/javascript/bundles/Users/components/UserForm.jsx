import React, { useState } from 'react';

export default function UserForm(props){
  const [user, setUser] = useState(props.user)

  function onChange(e) {
    const cloneUser = { ...user }
    cloneUser[e.target.name] = e.target.value
    setUser(cloneUser)
  }

  function onUpdate() {
    $.ajax({
      url: `users/${props.user.id}`,
      method: 'PUT',
      data: {user},
      dataType: 'json',
      success: (data) => {
        window.location.reload()
      }
    })
  }

  function onCreate() {
    $.ajax({
      url: `users`,
      method: 'POST',
      data: {user},
      dataType: 'json',
      success: (data) => {
        window.location.reload()
      }
    })
  }

  function renderActionBtn() {
    if (props.isCreate) {
      return <button className="create" onClick={onCreate}>Create</button>
    }else {
      return <button className="update" onClick={onUpdate}>Update</button>
    }
  }

  return (
    <div className="user-row">
      <div>
        <label>First Name: </label>
        <input type="text" name="first_name" value={user.first_name} onChange={onChange}/>
      </div>
      <div>
        <label>Last Name: </label>
        <input type="text" name="last_name"  value={user.last_name} onChange={onChange}/>
      </div>
      <div>
        <label>Email: </label>
        <input type="text" name="email"  value={user.email} onChange={onChange}/>
      </div>
      <div>{renderActionBtn()}</div>
    </div>
  );
}
