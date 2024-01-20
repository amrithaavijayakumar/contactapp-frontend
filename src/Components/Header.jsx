import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <div > 
        <MDBNavbar   style={{ backgroundColor: '#0a4275' }}>
    <MDBContainer fluid>
      <MDBNavbarBrand href='/'  >
      <h1 style={{color:'white',marginLeft:'14px'}}><i class="fa-solid fa-phone fa-beat"></i></h1>
      <h1 style={{color:'whitesmoke',marginLeft:'15px'}}>TALKSPHERE</h1>  
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header