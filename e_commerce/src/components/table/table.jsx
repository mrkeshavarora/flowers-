import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Table = () => {
const [data,setData] = useState([])
    useEffect(()=>{
       async function getData() {
        const response = await axios.get('http://localhost:8000/users')
        console.log(response.data);
        setData(response.data)
       }
       getData()
    },[])
    return (
        <div>
            <h1></h1>
            <table>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th> 
                    <th>Number</th> 
                </tr>
           {
            data.map((d)=>(
                <tr>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.number}</td>
            </tr>
          
            ))
           }
            </table>
        </div>
    )
}

export default Table
