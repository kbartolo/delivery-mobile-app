import { FC } from "react";
import { View, Text } from "react-native";
import { ErrorProps } from "./types";
const ErrorWrapper: FC<ErrorProps> = ({ error }) => {
  console.log("error", error);
  return (
    <View>
      <Text>here is an error.</Text>
    </View>
  );
};

export { ErrorWrapper };
