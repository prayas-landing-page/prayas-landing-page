import React from "react";
import {
    MDBCol,
    MDBContainer, MDBRow,
    MDBTypography
} from 'mdb-react-ui-kit';


class SectionRecognition extends React.Component {
    render() {
        return (
            <MDBContainer className='my-5'>
                <MDBRow>
                    <MDBCol md='4'>
                        <MDBTypography tag='div' className='display-5 pb-3 mb-3'>
                            Recognition
                        </MDBTypography>
                    </MDBCol>
                    <MDBCol md='8'>
                        <MDBTypography tag='div' className='display-7 pb-3 mb-3'>
                            Our small efforts have made waves as we have been
                            receiving motivational momentos from Shrimati
                            Anjaliben Vijaybhai Rupani spouses of ex chief ministers
                            of Gujarat and Kathiyawadi samajh.
                        </MDBTypography>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default SectionRecognition;