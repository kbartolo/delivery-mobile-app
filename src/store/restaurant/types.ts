import { RestaurantType, Dish } from "@components";

export interface InitialRestaurantState {
  restaurant: RestaurantType<Dish> | null;
}

export interface RestaurantState {
  restaurants: InitialRestaurantState;
}
