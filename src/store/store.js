import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import wishListReducer from './wishlistSlice';
import checkoutReducer from './checkoutSlice';
const store = configureStore({
    reducer:{
        cart : cartReducer,
        wishlist: wishListReducer,
        checkout : checkoutReducer,
    }
});

export default store;