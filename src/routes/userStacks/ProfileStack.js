import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Profile from "../../screens/user/profileScreens/Profile";

const ProfileStackScreen = createStackNavigator();

const ProfileStack = () => {
  return (
    <ProfileStackScreen.Navigator
      screenOptions={() => ({
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      })}
    >
      <ProfileStackScreen.Screen
        options={{
          headerShown: false,
        }}
        name="Profilestack"
        component={Profile}
      />
    </ProfileStackScreen.Navigator>
  );
};

export default ProfileStack;
