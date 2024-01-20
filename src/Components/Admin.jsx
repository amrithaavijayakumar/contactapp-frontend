import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ct1 from '../Assets/ct1.png'
import viewss from '../Assets/ads2.png'
import viewsss from '../Assets/ads3.jpg'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import {Link} from 'react-router-dom'
import plus from '../Assets/plus.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Admin() {



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    //apifetch
    const base_url='http://localhost:8000'

    const [allContacts,setAllContacts]=useState([])
    const fetchData=async()=>{
      const result=await axios.get(`${base_url}/get-all-contacts`)//contactdetails to result
      console.log(result.data.contacts);//object to array of contacts
      setAllContacts(result.data.contacts)
    }
    console.log(allContacts);
    const Deletecontact=async(id)=>{
      const result=await axios.delete(`${base_url}/delete-contact/${id}`)
      alert(result.data.message)
      fetchData();
    }
    
    useEffect(()=>{
      fetchData()
    },[])
  return (
    <div>
        <div className="container mt-4" style={{boxShadow:'2px 6px 8px black',border:'2px solid whitesmoke'}}>
            <h1 className='text-center mt-2' style={{color:'wheat'}}>WELCOME TO TALKSPHERE
            <i class="fa-solid fa-address-book mx-3" ></i></h1>

            <p className='p-3 m-3 ' style={{textAlign:'justify',color:"whitesmoke",fontStyle:'italic',fontWeight:'bolder'}}>
            TALKSPHERE is a database that stores names, addresses and other contact information for a computer user.
Address books allow easy access to the user’s friends, family, business associates and others by maintaining their email and other contact details on their computer. Address books can be software based, or accessed online or through a network. Users may also be able to export contacts from their address books to mobile phones, PDAs and other portable electronic devices.

            </p>
        <center>   <Button  variant="primary"  onClick={handleShow}>
       MORE 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:'red'}}>TALKSPHERE</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, You can <b>View,Add,Edit and Delete</b> the informations through my Talksphere!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal></center> <br /><br />
        </div>
        <div className="container m-4" >
            <h2 className=' text-center ' style={{marginLeft:"150px", color:"white",textShadow:'2px 4px 6px black',textDecoration:'underline'}}>EXPLORE!</h2>
            <marquee> <Row> 
              <div className="row">
                <div className="col-4" >
                 
                <Col>  <Card className='cardss ' style={{ width: '18rem',boxShadow:'2px 6px 8px black',marginLeft:'105px',height:'189px' }}>
      <Card.Img variant="top" src={ct1} height={'189px'}/>
     
    </Card></Col>
                </div>
                <div className="col-4">
              <Col>  <Card className='cardsss ' style={{ width: '18rem',boxShadow:'2px 6px 8px black',height:'189px',marginLeft:'110px' }}>
      <Card.Img variant="top" src={viewss} height={'189px'} />
     
    </Card></Col>
                </div>
                <div className="col-4">
            <Col>    <Card className='cardssss ' style={{ width: '18rem',boxShadow:'2px 6px 8px black',height:'189px',marginLeft:'115px' }}>
      <Card.Img variant="top" src={viewsss} height={'189px'} />
     
    </Card></Col>
                </div>
                
            </div></Row></marquee>
        </div>
        
        <center><h2 className='mt-4 text-white' style={{textShadow:'2px 4px 6px black',textDecoration:'underline'}}>CONTACT DETAILS</h2></center>
        <div className="container">
        <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col' style={{color:'red',fontFamily:'cursive',backgroundColor:"black",fontWeight:'bolder'}}>ID</th>
          <th scope='col' style={{color:'red',fontFamily:'cursive',backgroundColor:"black",fontWeight:'bolder'}}>NAME</th>
          <th scope='col' style={{color:'red',fontFamily:'cursive',backgroundColor:"black",fontWeight:'bolder'}}>ADDRESS</th>
          <th scope='col' style={{color:'red',fontFamily:'cursive',backgroundColor:"black",fontWeight:'bolder'}}>PHNO</th>
          <th scope='col' style={{color:'red',fontFamily:'cursive',backgroundColor:"black",fontWeight:'bolder'}}>EMAIL</th>
          <th scope='col' style={{color:'red',fontFamily:'cursive',backgroundColor:"black",fontWeight:'bolder'}}>USERNAME</th>
          <th scope='col' style={{color:'red',fontFamily:'cursive',backgroundColor:"black",fontWeight:'bolder'}}>PASSWORD</th>
          <th scope='col' style={{color:'red',fontFamily:'cursive',backgroundColor:"black",fontWeight:'bolder'}}>ACTION</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody >
        {
          allContacts.map((cnt)=>(
            <tr>
          <td style={{color:'whitesmoke',fontFamily:'cursive',backgroundColor:"black"}}>
          {cnt.id}
          </td>
          <td style={{color:'whitesmoke',fontFamily:'cursive',backgroundColor:"black"}}>
          {cnt.name}
          </td>
          <td style={{color:'whitesmoke',fontFamily:'cursive',backgroundColor:"black"}}>
          {cnt.address}
          </td>
          <td style={{color:'whitesmoke',fontFamily:'cursive',backgroundColor:"black"}}> 
          {cnt.phone}
          </td>
          <td style={{color:'whitesmoke',fontFamily:'cursive',backgroundColor:"black"}}>
          {cnt.email}
          </td>
          <td style={{color:'whitesmoke',fontFamily:'cursive',backgroundColor:"black"}}>
          {cnt.username}  
          </td>
          <td style={{color:'whitesmoke',fontFamily:'cursive',backgroundColor:"black"}}>
          {cnt.password}
          </td>
          <td style={{color:'whitesmoke',fontFamily:'cursive',backgroundColor:"black"}}>
            <div className='d-flex justify-content-evenly'>
            <Link to={`view/${cnt.id}`}>
            <i className='fa-solid fa-eye text-white'></i>
            </Link>
            <Link to={`edit/${cnt.id}`}>
                    <i  className="fa-solid fa-pen text-success ms-4"></i>
                    </Link>
                <i onClick={()=>Deletecontact(cnt.id)} className='fa-solid fa-trash text-danger ms-4'></i>
            </div>
          </td>
        </tr>
          ))
        }
       
      </MDBTableBody>
    </MDBTable>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
            <h2 className=' text-center ' style={{marginLeft:"40px", color:"white",textDecoration:'underline',textShadow:'2px 4px 6px black'}}>CLICK ME TO ADD CONTACT DETAILS</h2>
           <center>   <Link to={'/add'}>
              <a href="" ><Button className='m-4' variant="primary"><img src={plus} width={'100%'} height={'200px'} alt="" /></Button>{' '}</a>
              </Link></center>
            </div>
          </div>
          </div>
    </div>
  
  )
}

export default Admin