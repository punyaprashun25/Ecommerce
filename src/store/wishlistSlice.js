import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: 'wishlist',
    initialState : [],
    reducers : {
        addItem(state, action){
            state.push(action.payload);
        },
        removeItem(state, action){
            state = state.filter((item)=>item.id!==action.payload.id);
        },
    },
});

export const {addItem, removeItem} = wishListSlice.actions;
export default wishListSlice.reducer;