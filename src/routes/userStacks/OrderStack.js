import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Order from "../../screens/user/orderScreens/Orders";

const OrderStackScreen = createStackNavigator();

const OrderStack = () => {
  return (
    <OrderStackScreen.Navigator
      screenOptions={() => ({
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      })}
    >
      <OrderStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="Orderstack"
        component={Order}
      />
    </OrderStackScreen.Navigator>
  );
};

export default OrderStack;
