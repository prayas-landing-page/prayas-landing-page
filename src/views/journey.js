import React from "react";
import CustomNavbar from '../components/navbar';
import SectionJourney from '../components/landingpage/sectionJourney';
import Footer from '../components/landingpage/footer';



class JourneyPage extends React.Component {
    render() {
        return (
            <>
                <CustomNavbar />
                <SectionJourney></SectionJourney>
                <Footer></Footer>
            </>
        );
    }
}

export default JourneyPage;