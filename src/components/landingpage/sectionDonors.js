import React from "react";
import {
    MDBCol,
    MDBContainer, MDBRow,
    MDBTypography,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBIcon,
    MDBCardText
} from 'mdb-react-ui-kit';


export default function SectionDonors() {
    const title = 'Our Donors';
    const members = [
        "Shree Pravinbhai Shah (Lokhandwala)",
        "Shree Bhaveshbhai Hakani (Chhabildas developers Pvt Ltd.)",
        "Nileshbhai Timbadia (Matushri Revakuvarba Mohanlal Timbadia)",
        "Shree Manishbhai Mehta (Mehta Tyres)",
        "Shree Mehulbhai Dholakia ( DJ Toyota )",
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
                                <MDBCol md='4' key={index}>
                                    <MDBCard shadow='0' className='mb-3 shadow-4 bg-light bg-gradient'>
                                        <MDBCardBody>
                                            <MDBIcon fas icon="hand-holding-heart" size="5x" className="w-100 text-center text-danger py-4"/>
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