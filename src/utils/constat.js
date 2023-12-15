


 export const GOOGLE_API_KEY1 = "AIzaSyCks3LtQ0qXn3cJ-DWNCja3aCm2ybeDBp8";

export const getYtVideosApi = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${GOOGLE_API_KEY1}`;
export const watchVidApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&id=${123}&key=${GOOGLE_API_KEY1}`;

export const searchApi ="https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";



