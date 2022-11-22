export type RestaurantType<T> = {
  _id: string;
  name: string;
  image: string;
  rating: number;
  address: string;
  short_description: string;
  dishes: T[];
  long: number;
  lat: number;
};

export type RestaurantCardProps<T> = {
  restaurant: RestaurantType<T>;
};
