import React from 'react'
import { Link } from 'react-router-dom'
import FooterSecondary from './FooterSecondary'
import './Signup.css'
import SignupForm from './SignupForm'

function Signup() {
  return (
    <div className='signup'>
      <div className='signup__header'>
        <Link to='/'>
          <img
            src='https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png'
            alt=''
          />
        </Link>
      </div>
      <h1 className='signup__heading'>Create an account</h1>
      <div className='signup__rewards'>
        <h4>STARBUCKS® REWARDS</h4>
        <p>
          Join Starbucks Rewards to earn Stars for free food and drinks, any way
          you pay. Get access to mobile ordering, a birthday Reward, and{' '}
          <Link>more</Link>.
        </p>
      </div>
      <SignupForm />
      <FooterSecondary alignItems='center' flexDirection='column' />
    </div>
  )
}

export default Signup
