import React from "react";
import {
    MDBCol,
    MDBContainer, MDBRow,
    MDBTypography
} from 'mdb-react-ui-kit';
import PaperBorder from '../../components/paperborder';


export default function SectionImpactBar() {
    const values = {
        'value1': 35,
        'value1text': 'Members',
        'value2': 6,
        'value2text': 'Years',
        'value3': 250,
        'value3text': 'Donations',
        'value4': '10k+',
        'value4text': 'Smiles donated'
    }
    return (
        <section className='navbar-bg'>
            <PaperBorder>
                <MDBContainer className="text-white py-5">
                    <MDBRow className="py-5">
                        <MDBCol md='3' size='6' className="">
                            <MDBTypography className="text-center display-4 fw-bold">{values.value1}</MDBTypography>
                            <MDBTypography className="text-center display-7">{values.value1text}</MDBTypography>
                        </MDBCol>

                        <MDBCol md='3' size='6' className="">
                            <MDBTypography className="text-center display-4 fw-bold">{values.value2}</MDBTypography>
                            <MDBTypography className="text-center display-7">{values.value2text}</MDBTypography>
                        </MDBCol>
                        <MDBCol md='3' size='6' className="">
                            <MDBTypography className="text-center display-4 fw-bold">{values.value3}</MDBTypography>
                            <MDBTypography className="text-center display-7">{values.value3text}</MDBTypography>
                        </MDBCol>
                        <MDBCol md='3' size='6' className="">
                            <MDBTypography className="text-center display-4 fw-bold">{values.value4}</MDBTypography>
                            <MDBTypography className="text-center display-7">{values.value4text}</MDBTypography>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </PaperBorder>
        </section>
    );
}

