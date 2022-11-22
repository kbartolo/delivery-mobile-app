import { FC } from "react";
import { View, Text, Image, SafeAreaView, ScrollView, TextInput } from "react-native";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import { Categories, FeaturedRow, Loading, ErrorWrapper } from "@components";
import { useFetch } from "@hooks";
import { featured } from "@schemas/queries";

const Home: FC = () => {
  const { loading, error, data } = useFetch<any[]>("sanity", featured);

  if (loading) return <Loading text={"Loading..."} />;
  if (error) return <ErrorWrapper error={error} />;

  return (
    <SafeAreaView className="bg-white pt-10 pb-2">
      <View className="flex flex-row items-center mx-4 space-x-2">
        <Image source={{ uri: "https://links.papareact.com/wru" }} className="h-7 w-7 bg-gray -p4 rounded-full" />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* Search */}
      <View className="flex flex-row items-center mx-4 space-x-2 pb-2">
        <View className="flex-1 flex-row items-center space-x-2 bg-[#dcdcdc] px-4 my-2">
          <MagnifyingGlassIcon size={20} color="#00CCBB" />
          <TextInput placeholder="Restauarnts and business" keyboardType="default" />
        </View>
        <AdjustmentsVerticalIcon size={25} color="#00CCBB" />
      </View>
      {/* Body */}
      <ScrollView className="bg-gray-200 h-full pb-2" contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        {data &&
          data.map((item: any) => (
            <FeaturedRow
              key={item._id}
              id={item._id}
              title={item.title}
              description={item.short_description}
              restaurants={item.restaurants}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export { Home };
