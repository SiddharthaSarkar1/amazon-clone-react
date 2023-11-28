import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products : [],
    productsNumber: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: { //These reducersare the things tat modifies the stateonce an action has came in.
        addToCart: (state, action) => {
            
        },
        removeFromCart: (state, action) => {

        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;