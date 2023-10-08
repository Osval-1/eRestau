import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import PaymentMethod from "../../screens/user/cartScreens/PaymentMethod";
import PaymentReview from "../../screens/user/cartScreens/PaymentReview";
import PaymentSuccessful from "../../screens/user/cartScreens/PaymentSuccessful";
import PaymentFailed from "../../screens/user/cartScreens/PaymentFailed";

const CartStackScreen = createStackNavigator();

const CartStack = () => {
  return (
    <CartStackScreen.Navigator
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
      <CartStackScreen.Screen
        Options={{
          headerTitle: () => <Header name=" PaymentMethod" />,
        }}
        name="PaymentMethod"
        component={PaymentMethod}
      />
      <CartStackScreen.Screen
        Options={{
          headerTitle: () => <Header name="PaymentReview" />,
        }}
        name="PaymentReview"
        component={PaymentReview}
      />
      <CartStackScreen.Screen
        Options={{
          headerTitle: () => <Header name="PaymentSuccessful" />,
        }}
        name="PaymentSuccessful"
        component={PaymentSuccessful}
      />
      <CartStackScreen.Screen
        Options={{
          headerTitle: () => <Header name="PaymentFailed" />,
        }}
        name="PaymentFailed"
        component={PaymentFailed}
      />
    </CartStackScreen.Navigator>
  );
};

export default CartStack;
