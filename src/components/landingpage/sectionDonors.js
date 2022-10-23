import React from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "reactstrap";


class SectionDonors extends React.Component {
    render() {
        return (
            <section className="section pb-3">
                <Container>
                    <h1>Donors</h1>
                    <ul>
                        <li>Shree Pravinbhai Shah (Lokhandwala)</li>
                        <li>Shree Bhavesh hai Hakani.</li>
                        <li>Matusri Revakuvarba Mohanlal Timbadia</li>
                        <li>Shree Manish Bhai Mehta (Mehta Tyres)</li>
                    </ul>

                </Container>
            </section>
        )
    }
}

export default SectionDonors;