import React, { createContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const AuthContext = createContext();

export default ({ children }) => {
  const [userId, setUserId] = useState("");
  const [userRole, setUserRole] = useState("ROLE_USER");
  const [authenticated, setAuthenticated] = useState(true);

  const stateUser  = useSelector((state) => state.auth.user
  );

  useEffect(() => {
    if (stateUser) {   
        setUserId(stateUser.id);
        setUserRole(stateUser.roles[0]);
        setAuthenticated(true);
        console.log(stateUser)
    }
  }, [stateUser]);

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
