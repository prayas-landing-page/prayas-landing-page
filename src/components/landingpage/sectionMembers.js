import React from "react";
import {
    MDBCol,
    MDBContainer, MDBRow,
    MDBTypography,
    MDBCard,
    MDBCardBody,
    MDBCardText
} from 'mdb-react-ui-kit';


export default function SectionMembers() {
    const title = 'Our Members';
    const members = [
        "Amit Parekh",
        "Jayesh Gandhi",
        "Chirag Doshi",
        "Malay Malviya",
        "Vimal shah",
        "Nishant Shah",
        "Siddharth Talsania",
        "Tushar Kamdar",
    ];
    return (
        <section className='py-5'>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md='12'>
                        <MDBTypography className='display-4 text-success text-center my-5'>
                            <i>{title}</i>
                        </MDBTypography>
                    </MDBCol>
                </MDBRow>
                <MDBContainer>
                    <MDBRow>
                        {
                            members.map((member, index) =>
                                <MDBCol size="6" md='3' key={index}>
                                    <MDBCard shadow='0' border='dark' background='white' className='mb-3'>
                                        {/* <MDBCardImage src={require('../../assets/images/headshot.png')} alt={member} position='top' /> */}
                                        <MDBCardBody className="bg-dark bg-gradient">
                                            <MDBCardText className='text-center text-white fs-4'>{member}</MDBCardText>
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
