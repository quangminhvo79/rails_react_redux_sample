import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser, getUser } from '../../userService'
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Form from './Form'

export default function EditForm(props) {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector( (state) => state.user )
  let { id } = useParams();

  React.useEffect( () => {
    dispatch(getUser(id))
  }, [])

  const saveHandle = async () => {
    let result = await updateUser(id, user)
    if(result.success) {
      history.push("/")
      return
    }else{
      toastr.error(result.errors)
    }
  }

  return (
    <div>
      <h2>User Edit Form </h2>
      <Form user={user} saveHandle={saveHandle} />
    </div>
  )
}
