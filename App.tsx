import { NavigationContainer } from "@react-navigation/native";
import { Main } from "./src/screens/Main";
import { Provider } from "react-redux";
import { store } from "./src/store/config";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Main></Main>
      </Provider>
    </NavigationContainer>
  );
}
