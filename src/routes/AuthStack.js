import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Welcome from "../screens/auth/Welcome";
import RegisterOption from "../screens/auth/RegisterOption";
import UserLogin from "../screens/auth/UserLogin";
import UserRegistration from "../screens/auth/UserRegistration";
import RestauRegistration from "../screens/auth/RestauRegistration";
import ForgotPassword from "../screens/auth/Forgotpassword";

const AuthStackScreen = createStackNavigator();

const AuthStack = () => {
  return (
    <AuthStackScreen.Navigator
      screenOptions={() => ({
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      })}
    >
      {/* WELCOME SCREEN */}
      <AuthStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="Welcome"
        component={Welcome}
      ></AuthStackScreen.Screen>

      {/* REGISTER OPTION SCREEN */}
      <AuthStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="RegisterOption"
        component={RegisterOption}
      ></AuthStackScreen.Screen>

      {/* USER LOGIN SCREEN */}
      <AuthStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="UserLogin"
        component={UserLogin}
      ></AuthStackScreen.Screen>

      {/* USER REGISTER SCREEN */}
      <AuthStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="UserRegistration"
        component={UserRegistration}
      ></AuthStackScreen.Screen>

      {/* RESTAU REGISTER SCREEN */}
      <AuthStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="RestauRegistration"
        component={RestauRegistration}
      ></AuthStackScreen.Screen>

      {/* FORGOT PASSWORD SCREEN */}
      <AuthStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="ForgotPassword"
        component={ForgotPassword}
      ></AuthStackScreen.Screen>
    </AuthStackScreen.Navigator>
  );
};

export default AuthStack;
