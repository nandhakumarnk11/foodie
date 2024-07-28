import React from 'react'
import "./Form.css"

const Form = () => {
  return (
    <>
      <div className='form-container'>
      <h1 className='form-h1'>join the waitlist</h1>
      <div className='form-input'>  
        <input className='form-tag' type='text' placeholder='name'></input>
        <input className='form-tag'  type='text' placeholder='placeholder'></input>
        <input className='form-tag'  type='text' placeholder='city'></input>

      </div>
      <button className='form-btn'>join the waitlist</button>
      </div>
    </>
  )
}

export default Form
