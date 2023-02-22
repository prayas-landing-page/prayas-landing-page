import React, { useState, useEffect } from 'react';
import {
    MDBCol,
    MDBContainer, MDBRow    
} from 'mdb-react-ui-kit';
import { loadGoogleApiClient, getYouTubeVideos } from '../googleclient';

export default function YoutubeChannel() {
    const [feedItems, setFeedItems] = useState([]);
    const channelId = 'UC1_mwvqr4gRoUMnGF_7nShA';

    useEffect(() => {
        loadGoogleApiClient()
            .then(() => getYouTubeVideos(channelId))
            .then(response => {
                const videos = response.result.items.map(x => ({
                    "id": x.id.videoId,
                    "title": x.snippet.title
                }))
                setFeedItems(videos)
            })
            .catch(error => {
                setFeedItems([]);
            });
    }, [channelId]);

    if (feedItems.length < 1) {
        return <></>
    }
        
    return (
        <section className='py-5'>
            <MDBContainer>
                <MDBRow>
                    {
                        feedItems.map((video, index) =>
                            <MDBCol md='4' key={index} className="my-3">
                                <div className='ratio ratio-16x9 shadow-4'>
                                        <iframe
                                            width="100%"
                                            controls="0"
                                            iv_load_policy="3"
                                            src={`https://www.youtube.com/embed/${video.id}`}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            modestbranding="1"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                                            />
                                    </div>
                            </MDBCol>
                        )
                    }
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
