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
import dataset from '../data.json';

export default function CustomNavbar() {
  const [showNav, setShowNav] = useState(false);


  return (
    <MDBNavbar expand='lg' className='darkblue-grad-bg'>
      <MDBContainer fluid>
        <MDBNavbarBrand className='mb-0 mx-5'>
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
              <a href={dataset.contact_form}>
              <MDBBtn outline rounded className='mx-5' color='white' size='lg' >
                Contact Us
              </MDBBtn>
              </a>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
