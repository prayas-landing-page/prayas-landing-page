import React from 'react';
import {
    MDBCol,
    MDBContainer, MDBRow,
    MDBTypography
} from 'mdb-react-ui-kit';

export default function SectionIntroduction() {
    return (
        <MDBContainer className='my-5'>
            <MDBRow>
                <MDBCol md='4'>
                    <MDBTypography tag='div' className='display-5 pb-3 mb-3'>
                        Who are we ?
                    </MDBTypography>
                </MDBCol>
                <MDBCol md='8'>
                    <MDBTypography tag='div' className='display-7 pb-3 mb-3'>
                        In 2016, Prayas started out with the intention of helping
                        the society and reaching out to the underprivileged. This
                        initiative started with a group of five members and today
                        has grown into a community of 35 members.
                    </MDBTypography>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}