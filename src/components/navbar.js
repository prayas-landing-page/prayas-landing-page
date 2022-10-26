import React, { useState } from 'react';
import useWindowSize from '../hooks/useWindow';
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
  const windowSize = useWindowSize();
  const logoStyle = {
    height: '4rem',
    margin: '0 1.5rem'
  }
  const navbarProps = {
    'expand': 'md'
  }
  if (windowSize.width > 768) {
    navbarProps.scrolling = true
    navbarProps.fixed = 'top'
  }


  return (
    <MDBNavbar {...navbarProps}>
      <MDBContainer fluid>
        <MDBNavbarBrand className='mb-0 mx-auto'>
          <img
            style={logoStyle}
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
          <MDBNavbarNav right fullWidth={false} className='mb-0 justify-content-sm-center'>
            <MDBNavbarItem>
              <MDBBtn rounded color='primary'>
                Donate Now
              </MDBBtn>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}