import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Cart from "../../screens/user/cartScreens/Cart";

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
        component={Cart}
      />
    </CartStackScreen.Navigator>
  );
};

export default CartStack;
