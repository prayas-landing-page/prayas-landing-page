import React from "react";
import CustomNavbar from '../components/navbar';
import SectionHeader from '../components/landingpage/sectionHeader';
import SectionImpactBar from '../components/landingpage/sectionImpactBar';
import SectionIntroduction from '../components/landingpage/sectionIntroduction';
import SectionRecognition from '../components/landingpage/sectionRecognition';
import SectionVision from '../components/landingpage/sectionVision';
import SectionReferences from '../components/landingpage/sectionReferences';
import SectionDonors from '../components/landingpage/sectionDonors';
import SectionMembers from '../components/landingpage/SectionMembers';
import Footer from '../components/landingpage/footer';

import '../assets/css/Landingpage.css';

class LandingPage extends React.Component {
    render() {
        return (
            <>
                <CustomNavbar />
                <SectionHeader />
                <SectionIntroduction />
                <SectionVision />
                <SectionImpactBar />
                <SectionRecognition></SectionRecognition>
                <SectionReferences></SectionReferences>
                <SectionMembers></SectionMembers>
                <SectionDonors></SectionDonors>
                <Footer></Footer>
            </>
        );
    }
}

export default LandingPage;