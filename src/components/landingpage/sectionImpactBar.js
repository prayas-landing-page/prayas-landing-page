import React from "react";
import {
    MDBCol,
    MDBContainer, MDBRow,
    MDBTypography
} from 'mdb-react-ui-kit';


export default function SectionImpactBar() {
    const values = {
        'value1': 35,
        'value1text': 'Members',
        'value2': 5,
        'value2text': 'Years',
        'value3': 150,
        'value3text': 'Donations',
        'value4': '3L+',
        'value4text': 'Rs. Donated'
    }
    return (
        <section className='py-5'>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md='3' className="">
                        <MDBTypography className="text-center display-4">{values.value1}</MDBTypography>
                        <MDBTypography className="text-center display-7">{values.value1text}</MDBTypography>
                    </MDBCol>
                    <MDBCol md='3' className="">
                        <MDBTypography className="text-center display-4">{values.value2}</MDBTypography>
                        <MDBTypography className="text-center display-7">{values.value2text}</MDBTypography>
                    </MDBCol>
                    <MDBCol md='3' className="">
                        <MDBTypography className="text-center display-4">{values.value3}</MDBTypography>
                        <MDBTypography className="text-center display-7">{values.value3text}</MDBTypography>
                    </MDBCol>
                    <MDBCol md='3' className="">
                        <MDBTypography className="text-center display-4">{values.value4}</MDBTypography>
                        <MDBTypography className="text-center display-7">{values.value4text}</MDBTypography>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}

