import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [Name, setName] = useState('');
  const [StudentId, setStudentId] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Mail, setMail] = useState('')

  useEffect(() => {
    axios.get(`http://localhost:3011/students/${id}`).then((res) => {
      setName(res.data.Name)
      setStudentId(res.data.StudentId)
      setPhoneNumber(res.data.PhoneNumber)
      setMail(res.data.Mail)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  const handleChange = () => {
    const data = {
      Name,
      StudentId,
      PhoneNumber,
      Mail
    }
    axios.put(`http://localhost:3011/students/${id}`, data).then((res) => {
      console.log(res)
    }).catch((error) => {
      console.log(error)
    })
    navigate('/')
  }
  return (
    <div className='update'>
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
        <button onClick={handleChange} className='saveBtn'>SAVE</button>
      </div>

    </div>
  )
}

export default Update