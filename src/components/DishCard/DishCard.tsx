import { FC, useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTobasket, removeFromBasket, selectorBasketItemById, BasketState } from "@store";

import { DishCardProps } from "./types";
import { urlFor } from "@helpers/sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import Currency from "react-currency-formatter";

const DishCard: FC<DishCardProps> = ({ dish }) => {
  const dispatch = useDispatch();
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const itemsById = useSelector((state: BasketState) => selectorBasketItemById(state, dish._id));

  const addItemsToBasket = () => {
    dispatch(addTobasket(dish));
  };

  const removeItemsToBasket = () => {
    dispatch(removeFromBasket(dish));
  };

  const handleToggle = () => setIsPressed(!isPressed);

  return (
    <TouchableOpacity onPress={handleToggle} className="p-3 border-y border-gray-200">
      <View className="my-3 flex flex-row space-x-2">
        <View className="mb-2 flex-1">
          <Text className="font-bold text-lg">{dish.title}</Text>
          <Text className="text-gray-500 text-md flex-shrink">{dish.short_description}</Text>
          <Text className="text-gray-500 text-md mt-1">
            <Currency quantity={dish.price} currency="USD" />
          </Text>
        </View>
        <Image source={{ uri: urlFor(dish.image).url() }} className="w-20 h-20" resizeMode="cover" />
      </View>
      {isPressed && (
        <View>
          <View className="flex flex-row items-center space-x-2">
            <TouchableOpacity onPress={removeItemsToBasket} disabled={itemsById.length === 0}>
              <MinusCircleIcon size={40} color={itemsById.length > 0 ? "#00CCBB" : "gray"} />
            </TouchableOpacity>
            <Text>{itemsById.length}</Text>
            <TouchableOpacity onPress={addItemsToBasket}>
              <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export { DishCard };
