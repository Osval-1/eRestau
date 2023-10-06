import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/redux/store";
import { Provider } from "react-redux";
import { ToastProvider } from "react-native-paper-toast";
import RootStack from "./src/routes/RootStack";
import AuthContext from "./src/context/AuthContext";

export default function App() {
  return (
    <Provider store={store}>
      <AuthContext>
        <PaperProvider>
          <NavigationContainer>
            <ToastProvider>
              <RootStack />
            </ToastProvider>
          </NavigationContainer>
        </PaperProvider>
      </AuthContext>
    </Provider>
  );
}
