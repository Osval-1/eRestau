import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { useCallback } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { MenuProvider } from "react-native-popup-menu";
import store from "@/redux/store";
import { Provider } from "react-redux";
import { ToastProvider } from "react-native-paper-toast";
import RootStack from "@/routes/RootStack";
import AuthContext from "@/context/AuthContext";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Loader from "@/components/loader/Loader";
import "./src/i18n"

SplashScreen.preventAutoHideAsync();

// ******ALERT*******
// could not get splash screen to hide so had to use this short cut
// await SplashScreen.hideAsync();
setTimeout(SplashScreen.hideAsync, 5000);

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return <Loader />;
  }
  return (
    <Provider store={store}>
      <AuthContext>
        <PaperProvider>
          <NavigationContainer>
            <ToastProvider>
              <MenuProvider>
                <RootStack onlayout={onLayoutRootView} />
                <StatusBar style="dark" />
              </MenuProvider>
            </ToastProvider>
          </NavigationContainer>
        </PaperProvider>
      </AuthContext>
    </Provider>
  );
}
