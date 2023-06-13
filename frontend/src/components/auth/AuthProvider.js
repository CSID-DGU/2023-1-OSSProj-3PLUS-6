import { AuthContext } from "./AuthContext";

import React from "react";

const AuthProvider = ({ children }) => {
  const token = window.localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = React.useState(!!token);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
