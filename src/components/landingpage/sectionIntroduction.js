import React from 'react';
import {
    MDBCol,
    MDBContainer, MDBRow,
    MDBTypography
} from 'mdb-react-ui-kit';

export default function SectionIntroduction() {
    return (
        <MDBContainer>
            <div className='mb-8'></div>
            <MDBRow>
                <MDBCol md='3' className='my-auto'>
                    <MDBTypography color='body' className='display-4 text-center fw-lighter'>
                        Who are we
                    </MDBTypography>
                </MDBCol>
                <MDBCol offsetMd='1' md='7'>
                    <MDBTypography className='display-7'>
                        In <b className='fs-2'>2016</b>, Prayas started out with the intention of helping
                        the society and reaching out to the underprivileged. This
                        initiative started with a group of 5 members and today
                        has grown into a community of 35 members.
                    </MDBTypography>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}