import React, { createContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTokenAsync } from "../redux/reducers/authReducer";
import * as SecureStore from "expo-secure-store";

export const AuthContext = createContext();

export default ({ children }) => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [authenticated, setAuthenticated] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const detectFirstLaunch = async () => {
    let firstLaunch = await SecureStore.getItemAsync("FIRST_LAUNCH");
    setIsFirstLaunch(firstLaunch);
  };

  useEffect(() => {
    detectFirstLaunch();
    dispatch(getTokenAsync());
    setUserRole(user.userRole);
    setAuthenticated(user.token);
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        isFirstLaunch,
        userRole,
        authenticated,
        setAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
