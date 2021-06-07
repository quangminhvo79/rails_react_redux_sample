import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { USER_CHANGE } from '../../store'

export default function Form(props) {
  const dispatch = useDispatch()

  const onChange = (e) => {
    let key = e.target.id
    let userNew = {...props.user}
    userNew[key] = e.target.value
    dispatch({
      type: USER_CHANGE,
      payload: userNew
    })
  }

  return (
    <div className="formUpdate">
      <div className="form-floating mb-3">
        <input className="form-control" id="first_name" type="first_name" placeholder="First Name"
               value={props.user.first_name} onChange={onChange}/>
        <label htmlFor="first_name">First Name</label>
      </div>
      <div className="form-floating mb-3">
        <input className="form-control" id="last_name" type="last_name" placeholder="First Name"
               value={props.user.last_name} onChange={onChange}/>
        <label htmlFor="last_name">Last Name</label>
      </div>
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="email" placeholder="name@example.com"
               value={props.user.email} onChange={onChange} />
        <label htmlFor="email">Email address</label>
      </div>
      <div className="form-floating">
        <button type="button" className="btn btn-primary" onClick={props.saveHandle}>Save</button>
        <Link to="/" className="btn btn-secondary ms-3">Cancel</Link>
      </div>
    </div>
  )
}
