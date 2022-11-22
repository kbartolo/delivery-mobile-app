export type Dish = {
  _id: string;
  title: string;
  short_description: string;
  price: number;
  image: string;
};

export type DishCardProps = {
  dish: Dish;
};
