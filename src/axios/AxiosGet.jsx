import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AxiosGet = () => {
    const [users,setusers]  =useState([]);

    useEffect(()=>{
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                setusers(response.data);

            } catch (error) {
                console.error("Error", error);
            }
        }
        fetchUsers();
    },[])
  return (
    <div>
        <h2>user list</h2>
        <ul>
            {users.map(usr =>(
                <li key={usr.id}>{usr.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default AxiosGet