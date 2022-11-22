import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParams } from "../../routes/types";

export type RestaurantNavigationProps = StackScreenProps<
  MainStackParams,
  "Restaurant"
>;

export type RestaurantProps<T> = RestaurantNavigationProps & {
  restaurant: T;
};
