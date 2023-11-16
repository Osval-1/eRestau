import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Settings from "../../screens/user/profileScreens/Settings";
import Header from "../../components/header/header/Header";
import Notifications from "../../screens/user/profileScreens/Notifications"

const ProfileStackScreen = createStackNavigator();

const ProfileStack = () => {
  return (
    <ProfileStackScreen.Navigator
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
      <ProfileStackScreen.Screen
        options={{
          headerTitle: () => <Header name="Settings " />,
        }}
        name="Settings"
        component={Settings}
      />
       <ProfileStackScreen.Screen
        options={{
          headerTitle: () => <Header name="Notifications" />,
        }}
        name="Notifications"
        component={Notifications}
      />
    </ProfileStackScreen.Navigator>
  );
};

export default ProfileStack;
