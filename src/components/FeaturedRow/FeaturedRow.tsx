import { View, Text } from "react-native";
import { FC } from "react";
import { FeaturedRowProps } from "./types";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { ScrollView } from "react-native-gesture-handler";
import { RestaurantCard, RestaurantType } from "../RestaurantCard";
import { Dish } from "../DishCard";
const FeaturedRow: FC<FeaturedRowProps<RestaurantType<Dish>>> = ({ id, title, description, restaurants }) => {
  return (
    <View className="mx-4 pt-5">
      <View className="flex flex-row">
        <Text className="font-bold text-xl flex-1">{title}</Text>
        <ArrowRightIcon size={22} color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 mb-3">{description}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Restaurant Cards */}
        {restaurants &&
          restaurants.map((item: RestaurantType<Dish>) => (
            <RestaurantCard restaurant={item} key={`${id.substring(0, 3)}${item._id}`} />
          ))}
      </ScrollView>
    </View>
  );
};

export { FeaturedRow };
