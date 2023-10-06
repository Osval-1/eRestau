import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { FontAwesome5 } from "@expo/vector-icons";
import Order from "../../screens/restau/orderScreens/Orders";
import Header from "../../components/header/header/Header";

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
          headerTitle: () => <Header name="Order" />,
        }}
        name="Orderstack"
        component={Order}
      />
    </OrderStackScreen.Navigator>
  );
};

export default OrderStack;
