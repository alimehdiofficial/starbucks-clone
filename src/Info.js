import React from 'react'
import './Info.css'
import { Link } from 'react-router-dom'

function Info({
  image,
  title,
  info,
  link,
  background,
  color,
  path,
  className,
}) {
  return (
    <div
      className='info'
      style={{
        color,
        background,
      }}
    >
      <img src={image} alt='' className='info__image' />
      <div className='info__text'>
        <h4>{title}</h4>
        <h6>{info}</h6>
        <Link to={path} style={{ color }} className={className}>
          {link}
        </Link>
      </div>
    </div>
  )
}

export default Info
