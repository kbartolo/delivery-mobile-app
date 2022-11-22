import { createSlice } from "@reduxjs/toolkit";
import { InitialBasketState } from "../types";

const initialState: InitialBasketState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addTobasket: (state: any, action: any) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state: any, action: any) => {
      const index = state.items.findIndex((x: any) => x._id === action.payload._id);
      // console.log("state", JSON.stringify(state), "index", JSON.stringify(index));
      if (index < 0) return console.warn(`Can't remove product ${action.payload.title}, id: ${action.payload._id}`);
      let newBasket = [...state.items];
      newBasket.splice(index, 1);
      state.items = newBasket;
    },
  },
});

export default basketSlice;
export const { addTobasket, removeFromBasket } = basketSlice.actions;
