import React from 'react'
import './FormSubmit.css'

function FormSubmit({ name, type, onClick }) {
  return (
    <button className='formSubmit' type={type}>
      {name}
    </button>
  )
}

export default FormSubmit
