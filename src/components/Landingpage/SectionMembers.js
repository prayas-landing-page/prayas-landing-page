import React from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "reactstrap";


class SectionMembers extends React.Component {
    render() {
        return (
            <section className="section pb-3">
                <Container>
                    <h1>Members</h1>
                    <ul>
                        <li>Amit Parekh</li>
                        <li>Jayeshbhai Gandhi</li>
                        <li>Chirag Doshi</li>
                        <li>Malay Malviya</li>
                        <li>Vimalbhai shah</li>
                        <li>Nishant Shah</li>
                        <li>Siddharth Talsania</li>
                        <li>Tusharbhai Kamdar</li>
                    </ul>

                </Container>
            </section>
        )
    }
}

export default SectionMembers;