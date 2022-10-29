import React from "react";
import {
    MDBCol,
    MDBContainer, MDBRow,
    MDBTypography
} from 'mdb-react-ui-kit';


export default function SectionReferences() {
    const title = 'References';
    const members = [
        "Shree Kantibhai Kapasi",
        "Shree Nileshbhai Timbadia",
        "Shree Mehulbhai Dholakia",
        "Shree Ashwinbhai Shah",
        "Shree Rajeshbhai P Shah (Lokhandwala)",
    ];
    return (
        <section className='py-5'>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md='1' offsetMd={5}>
                        <MDBTypography className='display-4 text-success'>
                            <i>{title}</i>
                        </MDBTypography>
                    </MDBCol>
                </MDBRow>
                <MDBContainer>
                <MDBRow>
                    
                    {
                        members.map((member, index) =>
                            <MDBCol md='4' key={index}>
                                <li className="display-8 p-3">{member}</li>
                            </MDBCol>
                        )
                    }
                </MDBRow>
                    </MDBContainer>

            </MDBContainer>
        </section>
    );
}
