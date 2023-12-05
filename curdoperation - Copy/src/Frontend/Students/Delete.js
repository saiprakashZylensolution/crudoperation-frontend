import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "../Styles/Students.css";

function Delete() {
  const navigate = useNavigate()
  const { id } = useParams()
  console.log(id)
  const confirmDelete = () => {
    axios.delete(`http://localhost:3011/students/${id}`).then((res) => {
      console.log(res)
      navigate('/')
    }).catch((err) => {
      console.log(err)
    })
  }
  return (

    <div className='popup container'>
      <h1>Are You Sure You Want To Confirm ?</h1>
      <div>
        <button className='delete' onClick={confirmDelete}>YES</button>
        <button className='back' onClick={() => { navigate('/') }}>BACK</button>
      </div>


    </div>

  )
}

export default Delete