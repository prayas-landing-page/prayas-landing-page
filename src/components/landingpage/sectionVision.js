import React from "react";
import {
    MDBCol,
    MDBContainer, MDBRow,
    MDBTypography
} from 'mdb-react-ui-kit';


export default function SectionVision() {
    const title = 'Our Vision';
    const text1 = `Our vision is to bring about a positive change in the lives 
    of those that have unfortunately been left behind in our society. We are a 
    mixture of young and old members, allowing us to keep up with contemporary 
    trends while also benefiting from the wisdom gained through age.`

    return (
        <section className='py-5'>
            <MDBContainer>
                <MDBRow>
                    <MDBTypography className='display-3 title'>
                        {title}
                    </MDBTypography>
                </MDBRow>
                <MDBRow>
                    <MDBCol md='8' offsetMd={2}>
                        <MDBTypography tag='div' className='display-7 pb-3 mb-3'>
                            {text1}
                        </MDBTypography>
                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </section>
    );
}

