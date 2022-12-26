import React, { useState, useEffect } from "react";
import {
    MDBRow,
    MDBTypography
} from 'mdb-react-ui-kit';

function Carousel(props) {
    const slideGap = 20;
    const transitionSpeed = props.transitionSpeed || 5000;
    const [slides, setSlides] = useState(props.images);
    useEffect(() => {
        const slidesClone = [...slides];
        // const timer = setInterval(function() {
        //     slidesClone.push(slidesClone.shift());
        //     // setSlides(slidesClone);
        // }, transitionSpeed);
    }, [])
    
    return (
        <div className="gallery-inner">
            {slides.map(
                (image, index) =>
                    <img src={image.src} className='img-fluid img-rounded gallery-img' key={index} />
            )}
        </div>
        
    )
}

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
        { 'src': require('../../media/events/events_06.jpeg'), 'width': 1600, 'height': 1200 },
        { 'src': require('../../media/events/events_22_08_30.jpeg'), 'width': 1080, 'height': 1080 },
        { 'src': require('../../media/events/events_07.jpeg'), 'width': 900, 'height': 1600 },
        //duplicates
        { 'src': require('../../media/events/events_22_10_05.jpeg'), 'width': 1080, 'height': 1080 },
        { 'src': require('../../media/events/events_04.jpeg'), 'width': 720, 'height': 1280 },
        { 'src': require('../../media/events/events_01.jpeg'), 'width': 960, 'height': 1280 },
    ];
    return (
        <section className='py-5 darkblue-grad-bg'>
            <MDBRow className="my-5">
                <MDBTypography className='display-3 text-success text-center'>
                    <i>{title}</i>
                </MDBTypography>
            </MDBRow>
            <Carousel images={images} />
            <MDBRow className="my-5">
                <p></p>
            </MDBRow>
        </section >
    );
}
