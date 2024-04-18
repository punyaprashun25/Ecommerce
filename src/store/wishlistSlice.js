import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: 'wishlist',
    initialState : [],
    reducers : {
        addToWishlist(state, action){
            state.push(action.payload);
        },
        removeFromWishlist(state, action){
            state = state.filter((item)=>item.id!==action.payload.id);
        },
    },
});

export const {addToWishlist, removeFromWishlist} = wishListSlice.actions;
export default wishListSlice.reducer;