/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  // navbar using 
  const location = useLocation();
  const [show, setShow] = useState(false);



  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const updateUser = (data) => {
    setCurrentUser(data);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{ currentUser, isLoading, setIsLoading, updateUser, navigate,location,show, setShow }}
    >
      {children}
    </AuthContext.Provider>
  );
};
