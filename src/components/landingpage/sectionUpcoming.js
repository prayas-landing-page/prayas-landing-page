import React, { useState, useEffect } from "react";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBTypography
} from 'mdb-react-ui-kit';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function SectionUpcoming() {

    const title = 'Upcoming Events';
    const images = [
        { 'date': '2023-02-26', 'src': require('../../media/events/2023-02-26.jpeg') },
    ];
    return (
        <section className='py-5'>
            <MDBRow className="my-5">
                <MDBTypography className='display-3 title'>
                    {title}
                </MDBTypography>
            </MDBRow>
            <MDBContainer>
            <MDBRow>
                    {images.map(
                        (image, index) =>
                            <MDBCol md="4" offsetMd={4} key={index}>
                                <img src={image.src} className='img-fluid img-rounded' key={index} />
                            </MDBCol>
                    )}
            </MDBRow>
                </MDBContainer>

        </section >
    );
}
