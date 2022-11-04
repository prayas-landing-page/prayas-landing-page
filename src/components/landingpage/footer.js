import React from 'react';
import { MDBFooter, MDBContainer, MDBBtn, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <MDBContainer>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <MDBBtn
                            floating
                            className='mx-3'
                            style={{ backgroundColor: '#3b5998' }}
                            href='https://facebook.com'
                            role='button'
                        >
                            <MDBIcon fab icon='facebook-f' />
                        </MDBBtn>

                        <MDBBtn
                            floating
                            className='mx-3'
                            style={{ backgroundColor: '#405de6' }}
                            href='https://www.google.com'
                            role='button'
                        >
                            <MDBIcon fab icon='google' />
                        </MDBBtn>
                        <MDBBtn
                            floating
                            className='mx-3'
                            style={{ backgroundColor: '#ff0000' }}
                            href='https://www.youtube.in'
                            role='button'
                        >
                            <MDBIcon fab icon='youtube' />
                        </MDBBtn>
                    </div>
                </section>
                <MDBRow className='mt-3'>
                    <MDBCol md='4' className='mx-auto mb-4'>
                        <h5 className='text-uppercase fw-bold mb-4'>
                        <MDBIcon icon="gem" className="me-3" />
                        Make a difference
                        </h5>
                        <h6 className='mb-4'>Lend a helping hand at</h6>
                        <p>
                            PRAYAS CHARITABLE TRUST<br/>
                            HDFC BANK ,<br/>
                            50200068389003 ,<br/>
                            HDFC0000049 ,<br/>
                            BODAKDEV , AHMEDABAD<br/>
                        </p>
                        
                    </MDBCol>
                    <MDBCol md='4'></MDBCol>
                    <MDBCol md='4'>
                        <h6 className='my-4 fw-bold'>Contact Info</h6>
                        <p>
                            Prayas Charitable Trust<br/>
                            Bodakdev , Ahmedabad

                        </p>
                        
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <div className='text-center p-4'>
                    Made with <MDBIcon fas className='text-danger' icon="heart" /> by
                        <a className='text-reset fw-bold' href='https://fenilgandhi.github.io'> Fenil Gandhi </a>
                    </div>
                </MDBRow>
            </MDBContainer>
        </MDBFooter>
    )
}