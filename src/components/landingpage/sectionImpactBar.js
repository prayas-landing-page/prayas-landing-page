import React from "react";
import {
    MDBCol,
    MDBContainer, MDBRow,
    MDBTypography
} from 'mdb-react-ui-kit';
import PaperBorder from '../../components/paperborder';


export default function SectionImpactBar() {
    const values = [        
        {'value': 35,'text': 'Members'},
        {'value': 6,'text': 'Years'},
        {'value': 250,'text': 'Donations'},
        {'value': '10k+','text': 'Smiles donated'}
    ]

    return (
        <section className='navbar-bg'>
            <PaperBorder>
                <MDBContainer className="text-white py-5">
                    <MDBRow>
                        {values.map((value, index) => (
                            <MDBCol md='3' size='6' className="mb-3" key={index}>
                                <MDBTypography className="text-center display-5 fw-bold">{value.value}</MDBTypography>
                                <MDBTypography className="text-center display-8">{value.text}</MDBTypography>
                            </MDBCol>
                        ))}                        
                    </MDBRow>
                </MDBContainer>
            </PaperBorder>
        </section>
    );
}

