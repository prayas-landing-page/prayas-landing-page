import React from "react";
import {
    Container,
    Row,
    Col,
    Button
} from "reactstrap";


class SectionJourney extends React.Component {
    render() {
        return (
            <section className="section pb-3 section-lg">
                <Container className="card card-body shadow">
                    <h1>JOURNEY SO FAR</h1>
                    <ul>
                        <li><h4>After a year of consistent work, we started distributing food to the needy
                            children on the streets. Every Sunday more than 110 children are fed across
                            different areas.</h4></li>
                        <li><h4>We accomplished this feat with the strength of only 7 members at the time.</h4></li>
                        <li><h4>During the pandemic, we lent our help to those in need
                            of medicines, oxygen and food. Medical expenses and other monetary help was
                            provided as well.</h4>
                        </li>
                        <li><h4>The chilly winters of Gujarat were warmed by us for those who have to resort
                            to living on the streets. We have distributed blankets to the needy.</h4></li>
                        <li>
                            <h4>More than 700 pairs of slippers were provided to children during summers so
                                that their feet are safe from the heat.
                                The children on the streets also get a respite of entertainment and optimism
                                as we plan to organise a special talent hunt for them.</h4>
                        </li>
                        <li><h4>The old-age homes are often overlooked
                            and lack facilities. We provided them with
                            clothes and installed a live dhokla machine
                            that brought a bright smile on the faces of
                            our dada-dadis.</h4></li>
                        <li>
                            <h4>
                                Bhakti sandhyas are organised at old age
                                homes for more than 80 old-age home
                                residents so that they can enjoy a fun-filled
                                evening and end the day with bright smiles
                                on their face.
                            </h4>
                        </li>
                        <li>
                            <h4>
                                We make it a point to spend time with specially-abled
                                children, play with them and engage them in
                                constructive activities like painting, art and crafts.
                                We have also distributed 5000 notebooks to the needy
                                students for unhindered access to quality education.
                            </h4>
                        </li>
                        <li>
                            <h4>
                                Looking at improving the environment, we have already organised a tree
                                plantation drive and planted 7500 saplings across panjrapoles and old age
                                homes
                            </h4>
                        </li>

                    </ul>


                </Container>
            </section>
        )
    }
}

export default SectionJourney;