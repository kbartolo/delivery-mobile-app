import { BasketState } from "../types";
export const selectBasketItems = (state: BasketState) => state.basket.items;

export const selectorBasketItemById = (state: BasketState, _id: string) =>
  state.basket.items.filter((x: any) => x._id === _id);

export const selectBasketTotal = (state: BasketState) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);
