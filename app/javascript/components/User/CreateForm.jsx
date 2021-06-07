import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '../../userService'
import { useHistory } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { USER_CHANGE } from '../../store'
import Form from './Form'

export default function CreateForm(props) {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector( (state) => state.user )

  const saveHandle = async () => {
    let result = await createUser(user)
    if(result.success) {
      history.push("/")
      return
    }else{
      toastr.error(result.errors)
    }
  }

  return (
    <div>
      <h2>User Create Form </h2>
      <Form user={user} saveHandle={saveHandle} />
    </div>
  )
}
