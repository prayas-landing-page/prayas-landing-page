import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCol, MDBRow, MDBContainer, MDBTypography
} from "mdb-react-ui-kit";
import React from "react";


export default function SectionJourney() {
    const title = "Journey So Far";
    const journey = [
        { "image": require("../../media/journey_food_distribution.png"), "description": "Working for one year, we began to distribute food to the needy children on the streets. Now more than 110 children are fed every Sunday across different areas—a feat accomplished by only 7 members at the time." },
        { "image": require("../../media/journey_2.png"), "description": "During the pandemic, we helped provide medicines, oxygen and food to those who needed them. We also provided relief to those families financially devastated by the disease." },
        { "image": require("../../media/journey_3.png"), "description": "For the respite of animals, we installed a navkar mantra system in 6 Panjarapoles across Gujarat. Ghee, roti and lapsi were also provided to the cows."},
        { "image": require("../../media/journey_blankets.jpg"), "description": "For those who live on the streets during Gujarat's chilly winters, we have distributed blankets to keep them warm." },
        { "image": require("../../media/journey_slippers.jpg"), "description": "During the summer, more than 700 pairs of slippers were given to children so that their feet would be safe from the heat. In addition, street children also received a much-needed respite from entertainment and optimism as we planned a special talent hunt for them." },
        { "image": require("../../media/journey_4.png"), "description": "The old-age homes are often overlooked and lack facilities. We provided them with clothes and installed a live dhokla machine that brought a bright smile on the faces of our dada-dadis." },
        { "image": require("../../media/journey_bhakti_sandhya.jpg"), "description": "Bhakti sandhyas are organised at old age homes for more than 80 old-age home residents so that they can enjoy a fun-filled evening and end the day with bright smiles on their face." },
        { "image": require("../../media/journey_5.png"), "description": "We make it a point to spend time with specially-abled children, play with them and engage them in constructive activities like painting, art and crafts. We have also distributed 5000 notebooks to the needy students for unhindered access to quality education." },
        { "image": require("../../media/logo.png"), "description": "As part of our efforts to improve the environment, we have organized a tree-planting drive at various locations. So far 7500 saplings have been planted in old age homes and panjrapoles." },
    ];
    return (
        <section>
            <MDBContainer className="d-grid gap-4">
                <MDBRow>
                    <MDBTypography className='display-3 title my-5'>
                        {title}
                    </MDBTypography>
                </MDBRow>

                {journey.map((event, index) =>
                    <MDBCard className="clouds-grad-bg" key={index}>
                        <MDBRow className={index %2 === 0 ? "": "flex-row-reverse"}>
                            <MDBCol lg="3">
                                <MDBCardImage src={event.image} alt='Image' className="img-fluid rounded images-centered" />
                            </MDBCol>
                            <MDBCol lg="9">
                                <MDBCardBody className="my-3">
                                    <MDBTypography className="display-7 text-muted">
                                        {event.description}
                                    </MDBTypography>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                )}

            </MDBContainer>
        </section >
    )
}