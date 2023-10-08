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
