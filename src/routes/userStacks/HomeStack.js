import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import UserDashboard from "../../screens/user/homeScreens/UserDashboard";

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
        options={{
          headerShown: false,
        }}
        name="UserHome"
        component={UserDashboard}
      />
    </HomeStackScreen.Navigator>
  );
};

export default HomeStack;
