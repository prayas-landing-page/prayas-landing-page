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
        "Shree Kantibhai Kapasi",
        "Shree Nileshbhai Timbadia",
        "Shree Mehulbhai Dholakia",
        "Shree Ashwinbhai Shah",
        "Shree Rajeshbhai P Shah (Lokhandwala)",
    ];
    return (
        <section className='py-5'>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md='4' offsetMd={4}>
                        <MDBTypography className='display-4 text-success fw-bold my-5'>
                            <i>{title}</i>
                        </MDBTypography>
                    </MDBCol>
                </MDBRow>
                <MDBContainer>
                    <MDBRow>

                        {
                            members.map((member, index) =>
                                <MDBCol md='4' key={index}>
                                    <MDBCard shadow='0' border='info' background='white' className='mb-3'>
                                        {/* <MDBCardHeader></MDBCardHeader> */}
                                        <MDBCardBody>
                                            <MDBCardTitle>{member}</MDBCardTitle>
                                            <MDBCardText>

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
