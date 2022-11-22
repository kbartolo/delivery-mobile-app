import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./basket/reducers";
import restaurantSlice from "./restaurant/reducers";

export const store = configureStore({
  reducer: {
    basket: basketSlice.reducer,
    restaurants: restaurantSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
