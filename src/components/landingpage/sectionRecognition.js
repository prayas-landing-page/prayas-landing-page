import React from "react";
import {
    MDBCol,
    MDBContainer, MDBRow,
    MDBTypography
} from 'mdb-react-ui-kit';


export default function SectionRecognition() {
    const title = 'Recognition';
    const text1 = `Our small efforts have made waves as we have been receiving
    motivational momentos from Shrimati Anjaliben Vijaybhai Rupani
    spouse of ex-CM of Gujarat and Kathiyawadi samaj.`;
    const text2 = `We are happy that our journey has touched the lives of many and
    we continue to work towards uplifting the lives of those who need it most.`;

    return (
        <section className='my-5'>
            <MDBContainer>
                <MDBRow>
                    <MDBTypography className='display-3 text-success text-center my-5'>
                        <i>{title}</i>
                    </MDBTypography>
                </MDBRow>
                <MDBRow>
                    <MDBCol md='8' offsetMd={2}>
                        <MDBTypography tag='div' className='display-8 pb-3 mb-3'>
                            {text1}
                        </MDBTypography>
                        <MDBTypography tag='div' className='display-8 pb-3 mb-3'>
                            {text2}
                        </MDBTypography>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
