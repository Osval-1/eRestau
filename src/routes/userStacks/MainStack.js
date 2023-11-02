import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { TouchableOpacity } from "react-native";
import { FontAwesome, Entypo, FontAwesome5 } from "@expo/vector-icons";
import theme from "../../../themeColor"; //importing theme color
// importing user stacks
import HomeStack from "./HomeStack";
import OrderStack from "./OrderStack";
import ProfileStack from "./ProfileStack";
import CartStack from "./CartStack";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import DashboardHeader from "../../components/header/dashboardHeader/DashboardHeader";
import UserDashboard from "../../screens/user/homeScreens/UserDashboard";
import Profile from "../../screens/user/profileScreens/Profile";
import Orders from "../../screens/user/orderScreens/Orders";
import Cart from "../../screens/user/cartScreens/Cart";
import { useNavigation } from "@react-navigation/native";


import Header from "../../components/header/header/Header";

const Tabs = createMaterialBottomTabNavigator();
const MainStackScreens = createStackNavigator();

// find title for headers apart from the home dashboard for tab navigator
function getHeaderTitle(route,navigation) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
  switch (routeName) {
    case "Home":
      return <DashboardHeader onpress={()=>navigation.navigate("HomeStack", {
        screen: "SearchFood",
      })} />;
    case "Profile":
      return <Header name="Profile" />;
    case "Orders":
      return (
        <Header
          name="Orders"
          icon={<FontAwesome5 name="search" color="black" size={23} />}
        />
      );
    case "Cart":
      return <Header name="Cart" />;
  }
}
// Make tab navigator as top level then redirect to stack navigator as recomended by react navigaton docs
const MainStackTabs = () => {

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
          };
        }}
        component={UserDashboard}
      />

      <Tabs.Screen
        name="Orders"
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
        name="Cart"
        options={() => {
          return {
            tabBarButton: (props) => <TouchableOpacity {...props} />,
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="shopping-cart" color={color} size={23} />
            ),
          };
        }}
        component={Cart}
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
};

// nesting tabs in stack navigator to ensure bottom tabs appear on all top pages only
const MainStack = () => {
  const navigation = useNavigation()

  return (
    <MainStackScreens.Navigator>
      <MainStackScreens.Screen
        name="MainStackTabs"
        component={MainStackTabs}
        options={({ route }) => ({
          headerTitle: () => getHeaderTitle(route,navigation),
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
      />
      <MainStackScreens.Group screenOptions={{ headerShown: false }}>
        <MainStackScreens.Screen name="HomeStack" component={HomeStack} />
        <MainStackScreens.Screen name="OrderStack" component={OrderStack} />
        <MainStackScreens.Screen name="CartStack" component={CartStack} />
        <MainStackScreens.Screen name="ProfileStack" component={ProfileStack} />
      </MainStackScreens.Group>
    </MainStackScreens.Navigator>
  );
};

export default MainStack;
