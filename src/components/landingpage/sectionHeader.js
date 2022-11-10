import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem
} from 'mdb-react-ui-kit';

export default function SectionHeader() {
    const images = [
        require('../../media/header_01.jpeg'),
        require('../../media/header_02.jpeg'),
        // '../../media/header_01.jpeg',
        // '../../media/header_02.jpeg',
        // '../../media/header_01.jpeg',
        // '../../media/header_02.jpeg'
    ]
    const carousel_images = (        
        images.map((image_src, index) =>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={index+1}
                src={image_src}
                key={index}
                alt='Donation to needy image'
            />
        )
    )
    return (
        <MDBCarousel fade interval={3000} pause="false">
            {carousel_images}
        </MDBCarousel>
    );
}