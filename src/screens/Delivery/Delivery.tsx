import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import { XMarkIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import * as Progress from "react-native-progress";
//This librart belong to expo: expo install react-native-maps
import MapView, { Marker } from "react-native-maps";
import { selectRestaurant } from "@store";

const Delivery = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  const goHome = () => navigation.navigate("Home");

  return (
    <View className="flex-1 bg-[#00CCBB]">
      <SafeAreaView className="z-50 ">
        <View className="flex-row justify-between mt-10 mx-4 items-center">
          <TouchableOpacity onPress={goHome}>
            <XMarkIcon size={36} color="#FFFFFF" />
          </TouchableOpacity>
          <Text className="text-xl text-white font-light">Order Help</Text>
        </View>
        <View className="m-4 p-5 pt-2 shadow-md rounded-lg bg-white z-50">
          <View className="flex flex-row justify-between items-center">
            <View className="bg-white">
              <Text className="text-gray-400 mb-1 text-xl font-bold">Estimated Arrival</Text>
              <Text className="text-3xl font-bold">45-55 Minutes</Text>
            </View>
            <Image source={{ uri: "https://links.papareact.com/fls" }} className="h-24 w-24" />
          </View>
          <Progress.Bar width={150} color="#00CCBB" indeterminate={true} />
          <Text className="text-gray-5 00 mt-3">Your order at {restaurant?.name} is being prepared</Text>
        </View>
      </SafeAreaView>
      {restaurant && (
        <MapView
          initialRegion={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          className="flex-1 z-0 -mt-10"
          mapType="mutedStandard"
        >
          <Marker
            coordinate={{
              latitude: restaurant.lat,
              longitude: restaurant.long,
            }}
            title={restaurant.name}
            description={restaurant.short_description}
            identifier="origin"
            pinColor="red"
          />
        </MapView>
      )}
    </View>
  );
};

export { Delivery };
