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
      })}
    >
      <HomeStackScreen.Screen
        options={{
          // headerShown: false,
          headerTitle:()=><DashboardHeader/>,
          
        }}
        name="restauDashboard"
        component={RestauDashboard}
      />
    </HomeStackScreen.Navigator>
  );
};

export default HomeStack;
