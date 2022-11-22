import { FC, useEffect } from "react";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { RestaurantType, Dish, DishCard, BasketIcon } from "@components";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon, ArrowLeftIcon, ArrowRightIcon } from "react-native-heroicons/outline";
import { RestaurantProps } from "./types";
import { urlFor } from "@helpers/sanity";
import { limitText } from "@helpers/utils";
import { useDispatch } from "react-redux";
import { setRestaurant } from "@store";
import { useNavigation } from "@react-navigation/native";

const Restaurant: FC<RestaurantProps<RestaurantType<Dish>>> = ({ route }) => {
  const restaurant = route.params.restaurant;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(setRestaurant(restaurant));
  }, [dispatch]);

  return (
    <>
      <BasketIcon />
      <ScrollView className="bg-white relative" showsHorizontalScrollIndicator={false}>
        <View className="relative">
          <Image
            source={{ uri: urlFor(restaurant.image).url() }}
            className="w-full h-56 bg-green-300 flex items-center"
            resizeMode="cover"
          />
          <TouchableOpacity onPress={navigation.goBack} className="absolute top-10 left-5 p-3 bg-gray-100 rounded-full">
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="m-3">
          <Text className="font-bold text-3xl">{restaurant.name}</Text>
          <View className="flex flex-row items-center">
            <StarIcon size={18} color="green" opacity={0.5} />
            <Text className="text-md mr-2 text-gray-400 text-xs">{restaurant.rating}</Text>
            <MapPinIcon size={18} color="green" opacity={0.5} />
            <Text className="text-md ml-1 text-gray-400 text-xs flex-shrink">{limitText(restaurant.address, 40)}</Text>
          </View>
          <View className="mx-1 mt-3">
            <Text className="text-md text-gray-400 flex-shrink">{restaurant.short_description}</Text>
          </View>
        </View>
        <View className="mx-3 flex flex-row items-center border-t border-gray-200 py-3">
          <MapPinIcon size={18} color="green" opacity={0.5} />
          <Text className="text-md font-bold flex-1">Have a food allergy?</Text>
          <ArrowRightIcon size={22} color="#00CCBB" />
        </View>
        <View className="p-2 bg-gray-200 py-2 border-t border-gray-300">
          <Text className="text-xl mx-2 font-bold">Menu</Text>
        </View>

        {restaurant.dishes.map((dish: Dish) => (
          <DishCard dish={dish} key={`${restaurant._id}${dish._id}`} />
        ))}
        <View className="pb-24"></View>
      </ScrollView>
    </>
  );
};

export { Restaurant };
