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
  const detectFirstLaunch = async () => {
    let firstLaunch = await SecureStore.getItemAsync("FIRST_LAUNCH");
    if(!firstLaunch){
      await SecureStore.setItemAsync("FIRST_LAUNCH", "true");
    }
    setIsFirstLaunch(firstLaunch);
  };

  // const role = useSelector((state) => state.auth.userRole);
  // const token = useSelector((state) => state.auth.token);
  // const user = useSelector((state) => state.auth.user);
  const user = useSelector((state) => state.auth);

  // useEffect(() => {
  //   detectFirstLaunch();
  //   dispatch(getTokenAsync());
  //   setUserRole(role);
  //   setAuthenticated(token);
  // }, [role, user]);
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
