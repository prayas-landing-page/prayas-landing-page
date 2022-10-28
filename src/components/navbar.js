import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBBtn
} from 'mdb-react-ui-kit';


export default function CustomNavbar() {
  const [showNav, setShowNav] = useState(false);


  return (
    <MDBNavbar expand='lg' light fixed='top'>
      <MDBContainer fluid>
        <MDBNavbarBrand className='mb-0'>
          <img
            src={require('../assets/images/logo.png')}
            alt='Prayas Logo'
            loading='lazy'
          />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBBtn outline rounded className='mx-5' color='primary'>
                Donate Now
              </MDBBtn>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}