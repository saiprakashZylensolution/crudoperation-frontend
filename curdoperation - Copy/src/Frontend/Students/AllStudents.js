import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaTrash,FaDatabase,FaEdit } from "react-icons/fa";
import "../Styles/Students.css";

function Showallstudents() {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3011/students').then((data) => {
            setData([...data.data])
        })
    }, [])


    return (
        <div className='table'>
            <h1>
            Show all students Details
            </h1>
                
                        <table>
                                <tr>
                                    <th>S.No</th>
                                    <th>studentsId</th>
                                    <th>studentsName</th>
                                    <th>Email</th>
                                    <th>PhoneNumber</th>
                                    <th>Operations</th>
                                </tr>

                             {
                                data.map((item,index) => {
                                 return (
                            <>
                            <tr>    
                                    <td>{index + 1}</td>
                                    <td>{item.StudentId}</td>
                                    <td>{item.Name}</td>
                                    <td>{item.Mail}</td>
                                    <td>{item.PhoneNumber}</td>
                                    <td>
                                        <div className='btns'>
                                            <button>
                                            <Link to={`/delete/${item._id}`} >delete <FaTrash /> </Link>
                                            </button>
                                            <button>
                                            <Link to={`/show/${item._id}`} >show <FaDatabase /></Link>
                                            </button>
                                            <button>
                                            <Link to={`/update/${item._id}`} >Edit <FaEdit /></Link>
                                            </button>
                                        </div>
                                    </td>
                            </tr>
                            </>
                    )
                                })
                            }

                        </table>
            <button className='create' onClick={() => { navigate('/create') }}>CREATE</button>
        </div>
    )
}

export default Showallstudents
