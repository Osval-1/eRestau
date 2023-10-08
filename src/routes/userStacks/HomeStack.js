import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import SingleFood from "../../screens/user/homeScreens/SingleFood";
import Header from "../../components/header/header/Header";


const HomeStackScreen = createStackNavigator();

const HomeStack = () => {
  return (
    <HomeStackScreen.Navigator
      screenOptions={() => ({
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      })} 
    >
       <HomeStackScreen.Screen
      Options={{
        headerTitle: () => <Header name="Create Menu" />,
      }}
        name="SingleFood"
        component={SingleFood}
      />
    </HomeStackScreen.Navigator>
  );
};

export default HomeStack;
