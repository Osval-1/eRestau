import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import SingleFood from "../../screens/user/homeScreens/SingleFood";
import Header from "../../components/header/header/Header";
import SearchFood from "../../screens/user/homeScreens/SearchFood";
import UserMap from "../../screens/user/homeScreens/UserMap";
import SearchHeader from "../../components/header/searchHeader/SearchHeader";

const HomeStackScreen = createStackNavigator();

const HomeStack = () => {
  return (
    <HomeStackScreen.Navigator
      screenOptions={() => ({
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
        headerStyle: {
          shadowColor: "#000000",
          shadowOpacity: 0.8,
          shadowRadius: 3,
          shadowOffset: {
            height: 1,
            width: 1,
          },
        },
      })}
    >
      <HomeStackScreen.Screen
        options={{
          headerTitle: () => <Header name="SingleFood " />,
        }}
        name="SingleFood"
        component={SingleFood}
      />
      <HomeStackScreen.Screen
        options={{
          headerTitle: () => <SearchHeader/>
        }}
        name="SearchFood"
        component={SearchFood}
      />
      <HomeStackScreen.Screen
        options={{
          headerTitle: () => <Header name=" Map" />,
        }}
        name="UserMap"
        component={UserMap}
      />
    </HomeStackScreen.Navigator>
  );
};

export default HomeStack;
