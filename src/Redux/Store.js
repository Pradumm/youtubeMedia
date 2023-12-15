






// store.js
import { configureStore } from '@reduxjs/toolkit';
import videoReducer from './features/YoutubeSlice'; // Import your video slice
import appReducer from "./features/appslice"

const store = configureStore({
    reducer: {
        video: videoReducer,
        appSlice: appReducer,
    },
});

export default store;
