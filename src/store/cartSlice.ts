import { IProducts } from "@/types/interfaces";
import { createSlice } from "@reduxjs/toolkit";

interface ICartSlice {
  cart: IProducts[];
}

const initialState: ICartSlice = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addCart(state, action) {
      for (const el of state.cart) {
        if (el.id === action.payload.id) {
          return;
        }
      }
      state.cart.push(action.payload);
    },
  },
});

export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;
