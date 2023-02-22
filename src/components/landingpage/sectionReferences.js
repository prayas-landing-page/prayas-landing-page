import React from "react";
import {
    MDBCol,
    MDBContainer, MDBRow,
    MDBTypography,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText
} from 'mdb-react-ui-kit';


export default function SectionReferences() {
    const title = 'References';
    const members = [
        "Shree Kanti Kapasi (Kapasi Handicraft)",
        "Shree Ashwin Shah (Kamal Leggings)",
        "Shree Rajesh P Shah (Lokhandwala)",
        "Shree Pradip Joisar  (DJ Toyota)",
    ];
    return (
        <section className='py-5'>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md='6' offsetMd={3}>
                        <MDBTypography className='display-3 title my-5'>
                            {title}
                        </MDBTypography>
                    </MDBCol>
                </MDBRow>
                <MDBContainer>
                    <MDBRow>

                        {
                            members.map((member, index) =>
                                <MDBCol md='6' key={index}>
                                    <MDBCard shadow='0' border='info' background='white' className='mb-3'>
                                        <MDBCardBody>
                                            <MDBCardTitle>{member}</MDBCardTitle>
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
