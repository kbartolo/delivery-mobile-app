import { FC } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { RestaurantCardProps } from "./types";
import { Dish } from "../DishCard";
import { urlFor } from "@helpers/sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard: FC<RestaurantCardProps<Dish>> = ({ restaurant }) => {
  const navigation = useNavigation();
  const goRestaurantPage = () => {
    navigation.navigate("Restaurant", { restaurant: restaurant });
  };
  return (
    <TouchableOpacity className="bg-white mx-1 w-48" onPress={goRestaurantPage}>
      <Image
        source={{ uri: urlFor(restaurant.image).url() }}
        className="w-48 h-28 bg-green-300 flex items-center"
        resizeMode="cover"
      />
      <View className="m-2 box-border">
        <Text className="font-bold  text-md">{restaurant.name}</Text>
        <View className="flex flex-row">
          <StarIcon size={18} color="green" opacity={0.5} />
          <Text className="text-md ml-1 text-gray-400 text-xs">{restaurant.rating}</Text>
        </View>
        <View className="flex flex-row">
          <MapPinIcon size={18} color="green" opacity={0.5} />
          <Text className="text-md ml-1 text-gray-400 text-xs flex-shrink">{restaurant.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export { RestaurantCard };
