import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';

import admg from '../Assets/ad.png'
import Button from 'react-bootstrap/esm/Button';
import plus from '../Assets/plus.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


function Add() {
  const [id,setId]=useState('')
  const [name,setName]=useState('')
  const [address,setAddress]=useState('')
  const [phone,setPhone]=useState('')
  const [email,setEmail]=useState('')
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')


  const base_url = "http://localhost:8000/add-contact"
  const location=useNavigate()//component to component
  const Addcontacts = (e) => {
    e.preventDefault()
    console.log(id, name,address,phone,email,username,password);
    //apicall to add  details
    const body = {
      id, name,address,phone,email,username,password
    }
    const result = axios.post(base_url, body).then((response)=>{
      console.log(response);
     alert(response.data.message)
      location('/')
    })
    .catch((error)=>{
      alert("PLEASE ENTER A UNIQUE ID")
    })
    console.log(result);
    
  }
  
  return (
    <div>
       
      <div className="container mt-4" style={{backgroundColor:'darkgray',border:'2px dotted black',boxShadow:'8px 6px 8px 4px black'}}>
      
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <h1 style={{color:'black',marginLeft:'20px',textDecoration:'underline',textShadow:'2px 2px 2px red'}}>ADD CONTACT DETAILS</h1>
           
          <MDBInput onChange={(e)=>setId(e.target.value)} label='id' className='' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setName(e.target.value)} label='name' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setAddress(e.target.value)} label='address' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setPhone(e.target.value)} label='phone' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setEmail(e.target.value)} label='email' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setUsername(e.target.value)} label='username' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>setPassword(e.target.value)} label='password' id='formControlLg' type='text' size='lg' />
      <br />
      <center>
      {/* <Button   style={{width:'50%',color:'yellow'}} >
       ADD
      </Button> */}
      <Button onClick={(e)=>Addcontacts(e)}  className='m-4' variant="primary">
        <img src={plus} width={'100%'} height={'200px'} alt="" /></Button>{' '}
      </center>
      <br />
      
          </div>
          <div className="col-4">
            <img src={admg} width={'100%'} style={{marginTop:'50px'}} alt="" />
          </div>
        </div>
       
      </div><br />
      
    </div>
  )
}

export default Add