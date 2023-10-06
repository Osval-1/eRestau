import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Menu from "../../screens/restau/menuScreens/Menu";
import Header from "../../components/header/header/Header";
import CreateMenu from "../../screens/restau/menuScreens/CreateMenu";

const MenuStackScreens = createStackNavigator();

const MenuStack = () => {
  return (
    <MenuStackScreens.Navigator
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
      <MenuStackScreens.Screen
        Options={{
          headerTitle: () => <Header name="Create Menu" />,
        }}
        name="Create Menu"
        component={CreateMenu}
      />
    </MenuStackScreens.Navigator>
  );
};

export default MenuStack;
