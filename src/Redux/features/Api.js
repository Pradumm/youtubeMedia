// api.js
import axios from 'axios'; // Import Axios or another HTTP client

import { homeVideos } from './YoutubeSlice'; // Import your action
import { GOOGLE_API_KEY1 } from "../../utils/constat"
const getYtVideosApi = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${GOOGLE_API_KEY1}`;

export const searchApi = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";


export const fetchYouTubeVideos = () => async (dispatch) => {
    try {
        const response = await axios.get(getYtVideosApi);
        // console.log(response.data.items, "_______response")
        const results = response.data.items
        dispatch(homeVideos(response.data.items)); // Assuming 'items' contains the videos.
    } catch (error) {
        console.error('Error fetching YouTube videos:', error);

    }
};


export const fetchsearchResults = async (dispatch) => {
    try {
        const response = await axios.get(getYtVideosApi);
        console.log(response.data, "_______response")
        // const results = response.data.items
    } catch (error) {

    }
}
