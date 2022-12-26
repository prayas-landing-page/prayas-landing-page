import React from "react";
import {
    MDBCol,
    MDBContainer, MDBRow,
    MDBTypography,
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBCardText
} from 'mdb-react-ui-kit';


export default function SectionDonors() {
    const title = 'Our Donors';
    const members = [
        "Shree Pravin Shah (Lokhandwala)",
        "Shree Bhavesh Hakani (Chhabildas developers Pvt Ltd.)",
        "Nilesh Timbadia (Matushri Revakuvarba Mohanlal Timbadia)",
        "Shree Manish Mehta (Mehta Tyres)",
        "Shree Mehul Dholakia (DJ Toyota)",
        "Shree Sthanakvasi Jain Sangh, Sector 22, Gandhinagar",
    ];
    return (
        <section className='py-5 navbar-bg'>
            <MDBContainer>
                <MDBRow>
                <MDBCol md='6' offsetMd={3}>
                        <MDBTypography className='display-4 text-white fw-bold my-5 text-center'>
                            <i>{title}</i>
                        </MDBTypography>
                    </MDBCol>
                </MDBRow>
                <MDBContainer>
                    <MDBRow>
                        {
                            members.map((member, index) =>
                                <MDBCol md='4' key={index} className="my-3">
                                    <MDBCard shadow='0' className='shadow-4 bg-light bg-gradient h-100'>
                                        <MDBCardBody>
                                            <span className="w-100 text-center text-danger py-4 d-grid">
                                                <MDBIcon fas icon="heart" size="3x" className="heart" style={{'animationDelay': Math.random().toFixed(1) + 's'}}/>
                                                <MDBIcon fas icon="hand-holding" size="5x"className=""/>
                                            </span>
                                            <MDBCardText className="display-8">
                                                {member}
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            )
                        }
                    </MDBRow>
                </MDBContainer>

            </MDBContainer>
        </section>
    );
}