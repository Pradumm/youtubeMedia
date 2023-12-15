

import { createSlice } from '@reduxjs/toolkit';



const appSlice = createSlice({
    name: "appslice",
    initialState: {
        isMenuOpen: true,
        liveChatmessage: []
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        
        updateLivechat: (state, action) => {
            if (state.liveChatmessage.length > 50) {
                // If the array exceeds 50 items, remove the first 1/3 of the items
                state.liveChatmessage.splice(0, Math.floor(state.liveChatmessage.length / 3));
            }
            state.liveChatmessage.unshift(action.payload);
        }
    }
})

export const { toggleMenu, updateLivechat } = appSlice.actions;
export default appSlice.reducer