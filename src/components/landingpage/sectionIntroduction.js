import React from 'react';
import {
    MDBCol,
    MDBContainer, MDBRow,
    MDBTypography
} from 'mdb-react-ui-kit';
import Lottie from "lottie-react";
import animationData from '../../assets/lottie/humans-helping.json';


export default function SectionIntroduction() {
    const title = "Who are we ?";
    const introduction = (
        <>
            Prayas began in 2016 as a small group of five people.
            Today, it has grown into a community of 35 members who want
            to help the society and reach out especially to underprivileged
            groups within our community.
        </>
    );

    return (
        <section className='navbar-bg py-5'>
            <MDBContainer>
                <MDBRow>
                    <MDBCol lg='6' className='my-5'>
                        <MDBRow className='px-3'>
                            <MDBCol md='10' offsetLg={1}>
                                <MDBTypography className='display-4 text-success fw-bold my-5'>
                                    <i>{title}</i>
                                </MDBTypography>
                            </MDBCol>
                            <MDBCol md='10' offsetLg={1}>
                                <MDBTypography tag='div' className='display-7 text-light'>
                                    {introduction}
                                </MDBTypography>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol lg='6' className='d-none d-lg-block'>
                        <Lottie animationData={animationData} className='col-md-8 m-auto py-4' />;
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
