import React from "react";
import {
    MDBCol,
    MDBContainer, MDBRow,
    MDBTypography,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage,
    MDBCardText
} from 'mdb-react-ui-kit';


export default function SectionMembers() {
    const title = 'Our Members';
    const members = [
        "Amit Parekh",
        "Jayeshbhai Gandhi",
        "Chirag Doshi",
        "Malay Malviya",
        "Vimalbhai shah",
        "Nishant Shah",
        "Siddharth Talsania",
        "Tusharbhai Kamdar",
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
                                <MDBCol md='3' key={index}>
                                    <MDBCard shadow='0' border='dark' background='white' className='mb-3'>
                                        <MDBCardImage src={require('../../assets/images/headshot.png')} alt={member} position='top' />
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
