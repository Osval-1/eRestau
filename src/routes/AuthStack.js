import React, {useContext,useEffect  } from "react";
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
import { AuthContext } from "../context/AuthContext";


const AuthStackScreen = createStackNavigator();

const AuthStack = () => {
  const { isFirstLaunch } = useContext(AuthContext);

  return (
    <AuthStackScreen.Navigator
      screenOptions={() => ({
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      })}
    >
      {isFirstLaunch ? (
        <AuthStackScreen.Screen
          options={{
            headerShown: false,
          }}
          name="UserLogin"
          component={UserLogin}
        />
      ) : (
        <>
          <AuthStackScreen.Screen
            options={{
              headerShown: false,
            }}
            name="Welcome"
            component={Welcome}
          />

          <AuthStackScreen.Screen
            options={{
              headerShown: false,
            }}
            name="RegisterOption"
            component={RegisterOption}
          />

          <AuthStackScreen.Screen
            options={{
              headerShown: false,
            }}
            name="UserLogin"
            component={UserLogin}
          />

          <AuthStackScreen.Screen
            options={{
              headerShown: false,
            }}
            name="UserRegistration"
            component={UserRegistration}
          />

          <AuthStackScreen.Screen
            options={{
              headerShown: false,
            }}
            name="RestauRegistration"
            component={RestauRegistration}
          />

          <AuthStackScreen.Screen
            options={{
              headerShown: false,
            }}
            name="ForgotPassword"
            component={ForgotPassword}
          />
        </>
      )}
    </AuthStackScreen.Navigator>
  );
};

export default AuthStack;
