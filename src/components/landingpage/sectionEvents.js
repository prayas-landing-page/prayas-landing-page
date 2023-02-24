import React, { useState, useEffect } from "react";
import {
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

export default function SectionEvents() {

    const title = 'Our Events';
    const images = [
        { 'src': require('../../media/events/events_22_10_05.jpeg'), 'width': 1080, 'height': 1080 },
        { 'src': require('../../media/events/events_04.jpeg'), 'width': 720, 'height': 1280 },
        { 'src': require('../../media/events/events_01.jpeg'), 'width': 960, 'height': 1280 },
        { 'src': require('../../media/events/events_22_09_07.jpeg'), 'width': 1080, 'height': 1080 },
        { 'src': require('../../media/events/events_03.jpeg'), 'width': 1280, 'height': 960 },
        { 'src': require('../../media/events/events_05.jpeg'), 'width': 1200, 'height': 1600 },
        { 'src': require('../../media/events/events_02.jpeg'), 'width': 1080, 'height': 1080 },
        { 'src': require('../../media/events/events_06.jpg'), 'width': 1600, 'height': 1200 },
        { 'src': require('../../media/events/events_22_08_30.jpeg'), 'width': 1080, 'height': 1080 },
        { 'src': require('../../media/events/events_07.jpeg'), 'width': 900, 'height': 1600 },
    ];
    return (
        <section className='py-5 darkblue-grad-bg'>
            <MDBRow className="my-5">
                <MDBTypography className='display-3 title text-light'>
                    {title}
                </MDBTypography>
            </MDBRow>
            <Carousel responsive={responsive} arrows={true} infinite={true} centerMode={true} keyBoardControl={true} >
                {images.map(
                    (image, index) =>
                        <img src={image.src} className='img-fluid img-rounded react-multi-carousel-img' key={index} />
                )}
            </Carousel>
            <MDBRow className="my-5">
                <p></p>
            </MDBRow>
        </section >
    );
}
