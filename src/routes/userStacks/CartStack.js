import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import PaymentMethod from "../../screens/user/cartScreens/PaymentMethod";
import PaymentReview from "../../screens/user/cartScreens/PaymentReview";
import PaymentSuccessful from "../../screens/user/cartScreens/PaymentSuccessful";
import PaymentFailed from "../../screens/user/cartScreens/PaymentFailed";
import Header from "../../components/header/header/Header";

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
        options={{
          headerTitle: () => <Header name=" Payment Method" />,
        }}
        name="Payment Method"
        component={PaymentMethod}
      />
      <CartStackScreen.Screen
        options={{
          headerTitle: () => <Header name="Payment Review" />,
        }}
        name="Payment Review"
        component={PaymentReview}
      />
      <CartStackScreen.Screen
        options={{headerShown:false}}
        name="Payment Successful"
        component={PaymentSuccessful}
      />
      <CartStackScreen.Screen
        options={
          { headerShown: true }
        }
        name="Payment Failed"
        component={PaymentFailed}
      />
    </CartStackScreen.Navigator>
  );
};

export default CartStack;
