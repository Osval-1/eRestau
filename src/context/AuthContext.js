import React, { createContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const AuthContext = createContext();

export default ({ children }) => {
  const [userId, setUserId] = useState("");
  const [userRole, setUserRole] = useState("");
  const [authenticated, setAuthenticated] = useState(null);

  const stateUser = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.userToken);

  useEffect(() => {
    if (stateUser) {
      setUserId(stateUser.id);
      setUserRole(stateUser.roles[0]);
    }
  }, [stateUser]);
  useEffect(()=>{
    setAuthenticated(token)
    // setAuthenticated(true) //delete this 
  },[token])

  return (
    <AuthContext.Provider
      value={{
        userId,
        userRole,
        authenticated,
        setAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
