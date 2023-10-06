import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Setting from "../../screens/user/cartScreens/Setting";

const CartStackScreen = createStackNavigator();

const CartStack = () => {
  return (
    <CartStackScreen.Navigator
      screenOptions={() => ({
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      })}
    >
      <CartStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="Cartstack"
        component={Setting}
      />
    </CartStackScreen.Navigator>
  );
};

export default CartStack;
