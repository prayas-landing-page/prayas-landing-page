import React from "react";
import {
    MDBCol,
    MDBContainer, MDBRow,
    MDBTypography,
    MDBCarousel,
    MDBCarouselItem
} from 'mdb-react-ui-kit';
import PaperBorder from '../../components/paperborder';


export default function SectionEvents() {
    const title = 'Our Events';
    const events = [
        { "image": require('../../media/events_22_10_05.jpeg'), "date": "2022-10-05" },
        { "image": require('../../media/events_22_08_30.jpeg'), "date": "2022-08-30" },
        { "image": require('../../media/events_22_09_07.jpeg'), "date": "2022-09-07" }
    ];
    const carousel_images = (
        events.map((event, index) =>
            <MDBCol md="4" className="px-0" key={index}>
                <img src={event.image} alt={event.date} className="img-fluid" />
            </MDBCol>
        )
    )
    return (
        <PaperBorder>
            <section className='pt-5 darkblue-grad-bg'>
                <MDBContainer>
                    <MDBRow >
                    <MDBCol md='6' offsetMd={3}>
                            <MDBTypography className='display-3 text-white my-5 text-center'>
                                <i>{title}</i>
                            </MDBTypography>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <MDBRow>
                    {carousel_images}
                </MDBRow>
            </section >
        </PaperBorder>

    );
}
