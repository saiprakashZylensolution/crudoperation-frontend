import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {
  const navigate = useNavigate()
  const [Name, setName] = useState('');
  const [StudentId, setStudentId] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Mail, setMail] = useState('')
  const handleChange = () => {
    const data = {
      Name,
      StudentId,
      PhoneNumber,
      Mail
    }
    axios.post('http://localhost:3011/students', data).then((res) => {
      console.log(res)
      navigate('/')
    }).catch((error) => {
      console.log(error)
    })
navigate('/')
  }
  return (
    <div className='create'>
      <div className='box'>
        <label>Name</label>
      <input type='text' value={Name} onChange={(e) => { setName(e.target.value) }} placeholder='enter the name'></input>
      </div>
      <div className='box'>
<label>StudentId</label>
<input type='text' value={StudentId} onChange={(e) => { setStudentId(e.target.value) }} placeholder='enter the studentId'></input>
      </div>
      <div className='box'>
<label>PhoneNumber</label>
<input type='number' value={PhoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} placeholder='enter the phonenumber'></input>
      </div>
      <div className='box'>
<label>Email</label>
<input type='text' value={Mail} onChange={(e) => { setMail(e.target.value) }} placeholder='enter the Email'></input>
      </div>
<div className='btn-div'>
<button onClick={() => { navigate('/') }} className='BackBtn'>BACK</button>
<button onClick={handleChange} className='saveBtn'>CREATE</button>
</div>
      
    </div>
  )
}

export default Create