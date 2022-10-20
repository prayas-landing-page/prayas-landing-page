import React from "react";
import CustomNavbar from '../components/navbar';
import SectionHeader from '../components/Landingpage/sectionHeader';
import SectionJourney from '../components/Landingpage/sectionJourney';
import SectionRecognition from '../components/Landingpage/sectionRecognition';
import SectionVision from '../components/Landingpage/sectionVision';
import SectionReferences from  '../components/Landingpage/sectionReferences';
import SectionDonors from  '../components/Landingpage/sectionDonors';
import SectionMembers from  '../components/Landingpage/SectionMembers';
import Footer from '../components/Landingpage/footer';

import '../assets/css/Landingpage.css';
import {
    Container,
    Row,
    Col,
    Button
} from "reactstrap";


class LandingPage extends React.Component {
    render() {
        return (
            <>
                <CustomNavbar />
                <main ref="main">
                    <SectionHeader></SectionHeader>
                    <section class="section pb-0">
                        <Container>
                            <h1>Introduction</h1>
                            <h4>In 2016, Prayas started out with the intention of helping
                                the society and reaching out to the underprivileged. This
                                initiative started with a group of five members and today
                                has grown into a community of 35 members.</h4>
                        </Container>
                    </section>

                    <SectionJourney></SectionJourney>
                    <SectionRecognition></SectionRecognition>
                    <SectionVision></SectionVision>
                    <SectionReferences></SectionReferences>
                    <SectionMembers></SectionMembers>
                    <SectionDonors></SectionDonors>
                    <Footer></Footer>
                </main>
            </>
        );
    }
}

export default LandingPage;