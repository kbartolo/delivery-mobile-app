import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "@store";
import Currency from "react-currency-formatter";

const BasketIcon = () => {
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);
  const items = useSelector(selectBasketItems);
  const total = items.length || "0";
  return (
    <View className="absolute w-full bottom-3 z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="flex flex-row mx-5 bg-[#00ccbb] p-4 rounded-lg"
      >
        <Text className="text-lg text-white font-extrabold bg-[#01a296] px-2 py-1 space-x-1">{total}</Text>
        <Text className="text-lg flex-1 text-white font-extrabold text-center">View Basket</Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={basketTotal} currency="USD" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export { BasketIcon };
