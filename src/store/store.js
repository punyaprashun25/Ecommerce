import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import wishListReducer from './wishlistSlice';
const store = configureStore({
    reducer:{
        cart : cartReducer,
        wishlist: wishListReducer,
    }
});

export default store;