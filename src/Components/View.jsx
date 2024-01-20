import React, { useEffect, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useParams } from "react-router-dom";
import axios from "axios";


function View() {
  const base_url = "http://localhost:8000"

const {id}=useParams()
console.log(id);//1

  const [contact,setContacts] = useState({})

  const fetchContact = async(id)=>{
      const result = await axios.get(`${base_url}/get-a-contact/${id}`)
      console.log(result.data.contacts);
      setContacts(result.data.contacts)
  }

  console.log(contact);

  useEffect(()=>{
      fetchContact(id)
  },[])

  return (
    <div>
      <div className="container-fluid">
        <h1 className="text-center text-warning mt-3 " style={{textDecoration:'underline'}}>DETAILED VIEW OF CONTACT</h1>
        <marquee>
          <h2 className="text-danger">USERNAME AND PASSWORD ARE HIDDEN!!!</h2>
         </marquee>
        <div
          className="row shadow rounded p-5"
          style={{ marginLeft: "150px", marginRight: "150px" }}
        >
          <div className="col-4 border shadow rounded mt-5 mb-5 p-5 text-center">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/845e8e89639683.5dfafa64beba7.gif"
              height={"200px"}
              width={"100%"}
              style={{marginTop:'80px'}}
              alt=""
            />
          </div>
          <div className="col-8 col-6 border shadow rounded mt-5 mb-5 p-5 text-center">
          <h1 className="mt-4 text-center text-danger">CHECK MY DETAILS!</h1> <br />
              
               <ListGroup>
      <ListGroup.Item>ID  :   {contact.id}</ListGroup.Item>
      <ListGroup.Item>NAME  :   {contact.name}</ListGroup.Item>
      <ListGroup.Item>Address  :   {contact.address}</ListGroup.Item>
      <ListGroup.Item>Phone  :   {contact.phone}</ListGroup.Item>
      <ListGroup.Item>Email  :   {contact.email}</ListGroup.Item>
    </ListGroup>
              


          </div>
        <center>  <Link to={'/'}>
        <img src="https://st2.depositphotos.com/1062321/5573/v/450/depositphotos_55731125-stock-illustration-home-button.jpg" width={'50px'} height={'50px'} alt="" /></Link></center>
        </div>
        
      </div>




     
    </div>
  );
}

export default View;