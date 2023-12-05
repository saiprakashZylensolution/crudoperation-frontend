import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'

function Show() {
  const navigate = useNavigate()
  const {id} = useParams()
  const [data,setData] = useState({})
  
  useEffect(()=>{
    axios.get(`http://localhost:3011/students/${id}`).then((res)=>{
      setData(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
    
  return (
      <div className='students'>
        <div className='d-flex'>
          <lable>Name</lable>
          <h2>{data.Name}</h2>
        </div>
        <div className='d-flex'>
          <lable>StudentId</lable>
          <h2>{data.StudentId}</h2>
        </div>
        <div className='d-flex'>
          <lable>Email</lable>
          <h2>{data.Mail}</h2>
        </div>
        <div className='d-flex'>
          <label>PhoneNumber</label>
          <h2>{data.PhoneNumber}</h2>
        </div>
        <button onClick={()=>{navigate('/')}} className='back'>BACK</button>
      </div>
  )
}

export default Show