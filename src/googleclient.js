const apiKey = 'AIzaSyDz9-q4hf0Zc4YyI_9hIU8LpgYLjUfQm0w';

export function loadGoogleApiClient() {
  return new Promise((resolve, reject) => {
    window.gapi.load('client', {
      callback: () => {
        window.gapi.client.init({
          apiKey,
          discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
          scope: 'https://www.googleapis.com/auth/youtube.force-ssl'
        }).then(resolve).catch(reject);
      },
      onerror: reject,
      timeout: 1000,
      ontimeout: reject
    });
  });
}


export function getYouTubeVideos(channelId) {
  return window.gapi.client.youtube.search.list({
    part: 'snippet',
    channelId,
    maxResults: 3,
    order: 'date'
  });
}
