import { createSlice } from "@reduxjs/toolkit";
import { InitialRestaurantState } from "../types";

const initialState: InitialRestaurantState = {
  restaurant: null,
};

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    setRestaurant: (state: any, action: any) => {
      state.restaurant = action.payload;
    },
  },
});

export default restaurantSlice;
export const { setRestaurant } = restaurantSlice.actions;
