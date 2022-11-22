import { FC } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { CategoriesCardProps } from "./types";

const CategoriesCard: FC<CategoriesCardProps> = ({ url, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{ uri: url }} className="w-32 h-20 rounded" />
      <View className="bg-blue-600 absolute bottom-0 left-0 px-2">
        <Text className="text-white font-bold">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export { CategoriesCard };
