import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { TouchableOpacity } from "react-native";
import {
  FontAwesome,
  Entypo,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import theme from "../../../themeColor"; //importing theme color
// importing restau stacks
import HomeStack from "./HomeStack";
import OrderStack from "./OrderStack";
import ProfileStack from "./ProfileStack";
import MenuStack from "./MenuStack";
import Menu from "../../screens/restau/menuScreens/Menu";
import RestauDashboard from "../../screens/restau/homeScreens/RestauDashboard";
import Orders from "../../screens/restau/orderScreens/Orders";
import Profile from "../../screens/restau/profileScreens/Profile";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import DashboardHeader from "../../components/header/dashboardHeader/DashboardHeader";
import RestauDashboardHeader from "../../components/header/restauDashboardHeader/RestauDashboardHeader"
import Header from "../../components/header/header/Header";

const Tabs = createMaterialBottomTabNavigator();
const MainStackScreens = createStackNavigator();


// find title for all headers apart from the home dashboard for tab navigator
function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
  switch (routeName) {
    case "Home":
      return <RestauDashboardHeader/>;
    case "Profile":
      return <Header name="Profile" />;
    case "Order":
      return (
        <Header
          name="Orders"
          icon={<FontAwesome5 name="search" color="black" size={23} />}
        />
      );
    case "Menu":
      return <Header name="Menu" />;
  }
}
// Make tab navigator as top level then redirect to stack navigator as recomended by react navigaton docs
function MainStackTabs() {
  return (
    <Tabs.Navigator
      barStyle={{
        backgroundColor: "#fff",
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 3,
        shadowOffset: {
          height: 1,
          width: 1,
        },
      }}
      activeColor={theme.primary}
    >
      <Tabs.Screen
        name="Home"
        options={() => {
          return {
            tabBarButton: (props) => <TouchableOpacity {...props} />,
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({ color }) => (
              <Entypo color={color} name="home" size={24} />
            ),
            headerShown:false,
          };
        }}
        component={RestauDashboard}
      />
      <Tabs.Screen
        name="Order"
        options={() => {
          return {
            tabBarButton: (props) => <TouchableOpacity {...props} />,
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="search" color={color} size={23} />
              ),
            };
          }}
        component={Orders}
      />
      <Tabs.Screen
        name="Menu"
        options={() => {
          return {
            tabBarButton: (props) => <TouchableOpacity {...props} />,
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({ color }) => (
              <AntDesign name="menu-fold" size={24} color={color} />
              ),
            };
          }}
        component={Menu}
      />
          <Tabs.Screen
            name="Profile"
            options={() => {
              return {
                tabBarButton: (props) => <TouchableOpacity {...props} />,
                tabBarHideOnKeyboard: true,
                tabBarIcon: ({ color }) => (
                  <FontAwesome name="user-circle" size={24} color={color} />
                ),
              };
            }}
            component={Profile}
          />
    </Tabs.Navigator>
  );
}


// nesting tabs in stack navigator to ensure bottom tabs appear on all top pages only 

const MainStack = ({ route }) => {
  return (
    <MainStackScreens.Navigator>
      <MainStackScreens.Screen
        name="MainStackTabs"
        component={MainStackTabs}
        options={({ route }) => ({
          headerTitle: () => getHeaderTitle(route),
          // headerStyle: {
          //   shadowColor: "#000000",
          //   shadowOpacity: 0.8,
          //   shadowRadius: 3,
          //   shadowOffset: {
          //     height: 1,
          //     width: 1,
          //   },
          // },
          // headerShown:false
        })}
      />
      <MainStackScreens.Group screenOptions={{ headerShown: false }}>
        <MainStackScreens.Screen name="HomeStack" component={HomeStack} />
        <MainStackScreens.Screen name="ProfileStack" component={ProfileStack} />
        <MainStackScreens.Screen name="OrderStack" component={OrderStack} />
        <MainStackScreens.Screen name="MenuStack" component={MenuStack} />
      </MainStackScreens.Group>
    </MainStackScreens.Navigator>
  );
};

export default MainStack;
