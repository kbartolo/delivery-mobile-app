import { FC, useMemo, useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BasketProps } from "./types";
import { selectRestaurant, selectBasketItems, selectBasketTotal, removeFromBasket } from "@store";
import { useDispatch, useSelector } from "react-redux";
import { XCircleIcon } from "react-native-heroicons/solid";
import Currency from "react-currency-formatter";
import { urlFor } from "@helpers/sanity";

const Basket: FC<BasketProps> = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const dispatch = useDispatch();
  const items = useSelector(selectBasketItems);
  const total = useSelector(selectBasketTotal);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState<any[]>([]);

  const prepareOrder = () => {
    navigation.navigate("PreparingOrder");
  };

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="font-bold text-lg text-center">Basket</Text>
            <Text className="text-center text-gray-400">{restaurant?.name}</Text>
          </View>
          <TouchableOpacity onPress={navigation.goBack} className="rounded-full bg-gray-100  absolute top-5 right-5">
            <XCircleIcon height={50} width={50} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="flex flex-row p-4 items-center bg-white space-x-4 my-3">
          <Image source={{ uri: "https://links.papareact.com/wru" }} className="h-7 w-7 bg-gray -p4 rounded-full" />
          <Text className="flex-1 font-bold text-gray-400">Deliver in 45-60 min</Text>
          <TouchableOpacity onPress={navigation.goBack}>
            <Text className="font-bold text-[#00ccbb]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200 mb-3">
          {Object.entries(groupedItemsInBasket).map(([key, data]) => (
            <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
              <Text className="text-[#00ccbb] font-bold">{data?.length} x</Text>
              <View className="flex-1 flex-row items-center space-x-3">
                <Image source={{ uri: urlFor(data[0].image).url() }} className="w-12 h-12 rounded-full" />
                <Text className="text-gray-600 text-md">{data[0].title}</Text>
              </View>
              <Text className="text-gray-600">
                <Currency quantity={data[0].price} currency="USD" />
              </Text>
              <TouchableOpacity onPress={() => dispatch(removeFromBasket(data[0]))}>
                <Text className="text-xs text-[#00ccbb] font-bold">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="p-5 bg-white space-y-3">
          <View className="flex flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={total} currency="USD" />
            </Text>
          </View>
          <View className="flex flex-row justify-between">
            <Text className="text-gray-400">Deliver Fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={5.99} currency="USD" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="flex-1 font-bold">Order Total</Text>
            <Text className="text-gray-600 font-bold">
              <Currency quantity={total + 5.99} currency="USD" />
            </Text>
          </View>
          <TouchableOpacity className="rounded-lg bg-[#00ccbb] p-4 mt-2" onPress={prepareOrder}>
            <Text className="text-center text-white font-bold">Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export { Basket };
