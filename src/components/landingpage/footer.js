import React from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "reactstrap";


class Footer extends React.Component {
    render() {
        return (
            <section className="section pb-3">
                <Container>
                    <h1>Bank Details</h1>
                    <p>PRAYAS CHARITABLE TRUST</p>
                    <p>BANK NAME : HDFC BANK</p>
                    <p>A/C NUMBER : 50200068389003</p>
                    <p>IFSC CODE : HDFC0000049</p>
                    <p>BRANCH : BODAKDEO, AHMEDABAD</p>

                </Container>
            </section>
        )
    }
}

export default Footer;