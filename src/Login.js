import { TextField } from '@material-ui/core'
import React, { useState } from 'react'
import './Login.css'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close'
import ReportProblemRoundedIcon from '@material-ui/icons/ReportProblemRounded'
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import FindAStore from './FindAStore'
import FormSubmit from './FormSubmit'
import FooterSecondary from './FooterSecondary'

function Login() {
  const { register, handleSubmit, watch, errors } = useForm()
  const [passwordShown, setPasswordShown] = useState(false)
  const dispatch = useDispatch()

  const onSubmit = ({ email, password }) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        )
      })
      .catch((error) => alert(error.message))
  }

  return (
    <div className='login'>
      <div className='login__left'>
        <Link to='/'>
          <img
            src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'
            alt=''
          />
        </Link>
        <div className='login__info'>
          <h1>Sign in or create an account 🌟</h1>
        </div>
      </div>
      <div className='login__right'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='login__inputContainer'>
            <TextField
              name='email'
              label='Email Address'
              type='email'
              InputLabelProps={{
                style: { color: 'rgba(0,0,0,.56)' },
              }}
              InputProps={{ style: { fontWeight: '800' } }}
              className='login__input'
              inputRef={register({ required: true })}
            />
            {errors.email && (
              <div className='login__error'>
                <CloseIcon fontSize='small' />
                <span>Enter an email.</span>
                <ReportProblemRoundedIcon
                  fontSize='small'
                  className='login__reportIcon'
                />
              </div>
            )}
          </div>
          <div className='login__inputContainer'>
            <TextField
              name='password'
              label='Password'
              type={passwordShown ? 'text' : 'password'}
              InputLabelProps={{
                style: { color: 'rgba(0,0,0,.56)' },
              }}
              InputProps={{ style: { fontWeight: '800' } }}
              className='login__input'
              inputRef={register({ required: true })}
            />
            {passwordShown ? (
              <VisibilityOutlinedIcon
                onClick={() => setPasswordShown(!passwordShown)}
                className='login__visibilityIcon'
              />
            ) : (
              <VisibilityOffOutlinedIcon
                onClick={() => setPasswordShown(!passwordShown)}
                className='login__visibilityIcon'
              />
            )}
            {errors.password && (
              <div className='login__error'>
                <CloseIcon fontSize='small' />
                <span>Enter an password.</span>
                <ReportProblemRoundedIcon
                  fontSize='small'
                  className='login__reportIcon'
                />
              </div>
            )}
          </div>
          <div className='login__resetLinks'>
            <Link>Forgot your username?</Link>
            <Link>Forgot your password?</Link>
          </div>
          <FormSubmit name='Sign in' type='submit' />
        </form>
        <div className='login__rewards'>
          <h4>JOIN STARBUCKS® REWARDS</h4>
        </div>
        <div className='login__joinNow'>
          <div className='login__joinNowContainer'>
            <Link to='/account/create'>Join now</Link>
            <h4>Create an account and bring on the Rewards!</h4>
            <p>
              Join Starbucks® Rewards to earn free food and drinks, get free
              refills, pay and order with your phone, and more.
            </p>
          </div>
        </div>
        <FooterSecondary paddingLeft={30} flexDirection='column' />
      </div>
    </div>
  )
}

export default Login
