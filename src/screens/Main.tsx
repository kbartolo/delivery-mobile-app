import { FC } from "react";
import { Home, Restaurant, Basket, PreparingOrder, Delivery } from "@screens";
import { MainStack } from "../routes";

const Main: FC = () => {
  return <MainStackScreen />;
};

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Restaurant" component={Restaurant} />
      <MainStack.Screen name="Basket" component={Basket} options={{ presentation: "modal", headerShown: false }} />
      <MainStack.Screen name="PreparingOrder" component={PreparingOrder} />
      <MainStack.Screen name="Delivery" component={Delivery} />
    </MainStack.Navigator>
  );
};

export { Main };
