import React from 'react'
import './FindAStore.css'
import { Link } from 'react-router-dom'
import LocationOnIcon from '@material-ui/icons/LocationOn'

function FindAStore() {
  return (
    <Link className='findAStore'>
      <LocationOnIcon />
      <h5>Find a store</h5>
    </Link>
  )
}

export default FindAStore
