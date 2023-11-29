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
            //Check if the product is in the product array
            const addProductExists = state.products.find((products) => products.id === action.payload.id);
            if(addProductExists){
                addProductExists.quantity += parseInt(action.payload.quantity);
            } else {
                state.products.push({...action.payload, quantity: parseInt(action.payload.quantity)});
            }
            state.productsNumber = state.productsNumber + parseInt(action.payload.quantity);
        },
        removeFromCart: (state, action) => {
            // 1. find the product removing the array
            const productToRemove = state.products.find((products) => products.id === action.payload);
            // 2. remove the quantity from product number
            state.productsNumber = state.productsNumber - productToRemove.quantity;
            // 3. find index of the product removing
            const index = state.products.findIndex((products) => products.id === action.payload);
            // 4. remove from the array
            state.products.splice(index, 1);
        },
        incrementInCart: (state, action) => {
            const itemIncrement = state.products.find((products) => products.id === action.payload);
            if(itemIncrement.quantity >= 1) {
                itemIncrement.quantity = itemIncrement.quantity + 1;
            }
            state.productsNumber = state.productsNumber + 1;

        },
        decrementInCart: (state, action) => {
            const itemDecrement = state.products.find((products) => products.id === action.payload);
            if(itemDecrement.quantity === 1) {
                const index = state.products.findIndex((item) => item.id === action.payload);
                state.products.splice(index, 1);
            }else {
                itemDecrement.quantity--;
            }
            state.productsNumber = state.productsNumber - 1;
        }
    }
});

export const { addToCart, removeFromCart, incrementInCart, decrementInCart } = cartSlice.actions;
export default cartSlice.reducer;