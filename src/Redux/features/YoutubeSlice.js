


import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    videos: [],
    currentPlaying: null,
    searchTerm: "",
    searchResults: [],
    nextPageToken: null,
    recommendedVideo: []
};


const videoSlice = createSlice({
    name: "Youtube-video",
    initialState,

    reducers: {
        homeVideos: (state, action) => {
            state.videos = action.payload;
        },

        updateRecommendedVideo: (state, action) => {
            state.recommendedVideo = action.payload;
        },

        setCurrentPlaying: (state, action) => {
            state.currentPlaying = action.payload;
        },

        setsearchResults: (state, action) => {
            state.searchResults = action.payload
        }

    }

})

export const { homeVideos, updateRecommendedVideo, setsearchResults } = videoSlice.actions;
export default videoSlice.reducer;