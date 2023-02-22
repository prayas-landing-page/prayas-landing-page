import React from "react";
import {
    MDBCol,
    MDBContainer, MDBRow,
    MDBTypography
} from 'mdb-react-ui-kit';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



export default function SectionRecognition() {
    const title = 'Recognition';
    const text1 = `Our small efforts have made waves as we have been receiving
    motivational momentos from Shrimati Anjaliben Vijay Rupani
    spouse of ex-CM of Gujarat and Kathiyawadi samaj.`;
    const text2 = `We are happy that our journey has touched the lives of many and
    we continue to work towards uplifting the lives of those who need it most.`;
    const images = [
        { 'src': require('../../media/media_coverage/01.jpeg') },
        { 'src': require('../../media/media_coverage/02.jpeg') },
        { 'src': require('../../media/media_coverage/03.jpeg') },
        { 'src': require('../../media/media_coverage/04.jpeg') },
        { 'src': require('../../media/media_coverage/05.jpeg') }
    ]

    const centerMode = (window.innerWidth > responsive.desktop.breakpoint.min);

    return (
        <section className='my-5'>
            <MDBRow className="mb-3">
                <MDBTypography className='display-3 title'>
                    {title}
                </MDBTypography>
            </MDBRow>
            <MDBContainer>
            <MDBRow>
                <MDBCol md='8' offsetMd={2} className="px-4">
                    <MDBTypography tag='div' className='display-8 pb-3 mb-3'>
                        {text1}
                    </MDBTypography>
                    <MDBTypography tag='div' className='display-8 pb-3 mb-3'>
                        {text2}
                    </MDBTypography>
                </MDBCol>
            </MDBRow>
                </MDBContainer>
            <MDBContainer>
                <Carousel responsive={responsive} arrows={true} infinite={true} centerMode={centerMode} keyBoardControl={true} >
                    {images.map(
                        (image, index) =>
                            <img src={image.src} className='img-fluid img-rounded react-multi-carousel-img img-fill' key={index} />
                    )}
                </Carousel>
            </MDBContainer>

        </section>
    );
}
