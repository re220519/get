import React ,{useState}from 'react';
import axios from 'axios';
import './style1.css';
import { useNavigate } from 'react-router-dom';
function Create() {
    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const navigate= useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
        axios.post('http:localhost:8081//create/', {name,phone,email})
        .then(res=>{ 
  navigate('/');
        } ).catch(err=>console.log(err));
    }
  return (
    <div className='createcontainer1'>
        <div className='createcontainer2'>
            <form onSubmit={handleSubmit}>
                <div className='createcontainerheader'>Add User</div>
                <div className='createcontainer3'>
                   <label>Name:</label>
                   <input type='text' placeholder='Enter the Name' onChange={e=>setName(e.target.value)}/>
                </div>
                <div className='createcontainer4'>
                    <label>Phone:</label>
                    <input type='number' placeholder='Enter Number' onChange={e=>setPhone(e.target.value)}/>
                </div>
                <div className='createcontainer5'>
                    <label>Email:</label>
                    <input type='email'onChange={e=>setEmail(e.target.value)}></input>
                </div>
                <div className='createcontainer6'>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    </div> 
  )
}

export default Create;
.createcontainer1{
    width: 100%;
    display: flex;
    justify-content: center;
}
.createcontainer2{
    width: 60%;
    
}
.createcontainerheader{
    width: 100%;
    text-align: left;
}
.createcontainer3{
    width: 100%;
    display: flex;
   
   
}
.createcontainer4,.createcontainer5{
    width: 100%;
    display: flex;
    padding: 10px;
}
.createcontainer3 input[type='text'],.createcontainer4 input[type='number'],.createcontainer5 input[type='email'] {
width: 50%; 
margin-left: 30px;/* Set the desired width for the input box */
}

.createcontainer6{
    width: 100%;
    text-align: left;
    padding: 10px;
}


import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Student() {
    const [data, setData] = useState([]);
     useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => {
                if (Array.isArray(res.data)) {
                    setData(res.data);
                } else {
                    console.error('Received data is not an array:',res.data);
                }
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    }, []);

    return (
        <div className='container1'>
            <div className='container2'>
                <div className='containerhead'>
                    CRUD
                </div>
                <div>
                    <Link to='/create'> Add+</Link>
                </div>
                <div className='container3'>
                    <div className='container4'>
                        <div>Name</div>
                        <div>Phone</div>
                        <div>Email</div>
                        <div>Action</div>
                    </div>
                    </div>
                   <div> 
                  
                  {data.map((d, i) => (
                        <div className='container5' key={i}>
                          <div className='container6'>  
                            <div>{d.name}</div>
                            <div>{d.phone}</div>
                            <div>{d.email}</div>
                            <div>
                                <button>Update</button>
                                <button>Delete</button>
                            </div>
                   </div>
                    </div>  
                    ))}
                  </div>
                
                
            </div>
        </div>
    );
}

export default Student;
.container{
    width: 100%;

}
.container1{
    width: 100%;
}
.container2{
    width: 100%;
}
.containerhead{
    width: 100%;
    font-size: 30px;
    font-weight: 600;
    color: red;
}
.container3{
    width: 100%;
   
  
}
.container4{
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: azure;
   
}
.container5{
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: azure;
}
.container6{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

