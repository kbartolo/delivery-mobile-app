import { RestaurantType, Dish } from "@components";

export type MainStackParams = {
  Home: undefined;
  Restaurant: { restaurant: RestaurantType<Dish> };
  Basket: undefined;
  PreparingOrder: undefined;
  Delivery: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackParams {}
  }
}
