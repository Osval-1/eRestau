import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import UserStack from "./userStacks/MainStack";
import RestauStack from "./restauStacks/MainStack";
// auth context
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const RootStackScreen = createStackNavigator();

export default function RootStack() {
  const { userRole, authenticated } = useContext(AuthContext);
  console.log("my context", userRole, authenticated);

  return (
    <RootStackScreen.Navigator>
      {authenticated && userRole === "ROLE_USER" ? (
        <RootStackScreen.Screen
          options={{ headerShown: false }}
          name="User"
          component={UserStack}
        />
      ) : authenticated && userRole === "ROLE_MODERATOR" ? (
        <RootStackScreen.Screen
          options={{ headerShown: false }}
          name="Restau"
          component={RestauStack}
        />
      ) : (
        <RootStackScreen.Screen
          options={{ headerShown: false }}
          name="Auth"
          component={AuthStack}
        />
      )}
    </RootStackScreen.Navigator>
  );
}
