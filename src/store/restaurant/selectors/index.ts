import { RestaurantState } from "../types";
export const selectRestaurant = (state: RestaurantState) => state.restaurants.restaurant;
