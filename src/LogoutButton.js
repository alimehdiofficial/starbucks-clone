import React from 'react'
import './LogoutButton.css'
import { logout } from './features/userSlice'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function LogoutButton() {
  const dispatch = useDispatch()
  const history = useHistory()

  const logoutOfApp = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout())
        history.replace('/')
      })
      .catch((error) => alert(error.message))
  }

  return (
    <button className='logoutButton' onClick={logoutOfApp}>
      Log Out
    </button>
  )
}

export default LogoutButton
