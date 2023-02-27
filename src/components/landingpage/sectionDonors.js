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
    const donors = [
        "Shree Pravinbhai Shah (Lokhandwala)",
        "Shree Bhaveshbhai Hakani (Chhabildas developers Pvt Ltd.)",
        "Nileshbhai Timbadia (Matushri Revakuvarba Mohanlal Timbadia)",
        "Shree Manishbhai Mehta (Mehta Tyres)",
        "Shree Mehulbhai Dholakia (DJ Toyota)",
        "Shree Sthanakvasi Jain Sangh, Sector 22, Gandhinagar",
        "Shree Vinubhai Kapasi (Top Impex Pvt. Ltd.)",
    ];
    return (
        <section className='py-5 navbar-bg'>
            <MDBContainer>
                <MDBRow>
                    <MDBTypography className='display-3 title text-light my-5'>
                        {title}
                    </MDBTypography>
                </MDBRow>
                <MDBContainer>
                    <MDBRow>
                        {
                            donors.map((donor, index) =>
                                <MDBCol size="6" lg="3" md="4" key={index} className="my-3 shrink-50">
                                    <MDBCard shadow='0' className='shadow-4 bg-light bg-gradient h-100'>
                                        <MDBCardBody>
                                            <span className="w-100 text-center text-danger py-4 d-grid">
                                                <MDBIcon fas icon="heart" size="3x" className="heart" style={{ 'animationDelay': Math.random().toFixed(1) + 's' }} />
                                                <MDBIcon fas icon="hand-holding" size="5x" className="" />
                                            </span>
                                            <MDBCardText className="display-8">
                                                {donor}
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
