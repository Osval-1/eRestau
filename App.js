import { StatusBar } from "expo-status-bar";
import { useCallback } from 'react';
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/redux/store";
import { Provider } from "react-redux";
import { ToastProvider } from "react-native-paper-toast";
import RootStack from "./src/routes/RootStack";
import AuthContext from "./src/context/AuthContext";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }
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
