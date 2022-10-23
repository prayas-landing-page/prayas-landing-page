import React from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "reactstrap";


class SectionReferences extends React.Component {
    render() {
        return (
            <section className="section pb-3">
                <Container>
                    <h1>References</h1>
                    <ul>
                        <li>Shree Kantibhai Kapasi</li>
                        <li>Shree Rajeshbhai P.Shah (Lokhandwala)</li>
                        <li>Shree Nilesh hai Timbadia</li>
                        <li>Shree Mehulbhai Dholakia</li>
                        <li>Shree Ashwinbhai Shah</li>
                    </ul>

                </Container>
            </section>
        )
    }
}

export default SectionReferences;