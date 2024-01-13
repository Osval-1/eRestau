import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import RestauDashboard from "../../screens/restau/homeScreens/RestauDashboard";
import DashboardHeader from "../../components/header/dashboardHeader/DashboardHeader";

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
          headerTitle: () => <DashboardHeader />,
          // headerShown:false
        }}
        name="restauDashboard"
        component={RestauDashboard}
      />
    </HomeStackScreen.Navigator>
  );
};

export default HomeStack;
