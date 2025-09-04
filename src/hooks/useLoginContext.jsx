import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginTimeContext } from "./useUsetLoginLogoutContext";

const LoginContext = createContext({
  state: { isLoggedIn: false, username: "" },
  setState: () => {},
});

export const LoginProvider = ({ children }) => {
  const {handleSessionStorage}=useLoginTimeContext();
  const [state, setState] = useState({ isLoggedIn: false, username: "" });
  const navigate = useNavigate();

  const logout = () => {
    setState({ isLoggedIn: false, username: "" });
    localStorage.removeItem("userDetail");
    navigate("/login");
    handleSessionStorage("logout");
  };
  return (
    <LoginContext.Provider value={{ state, setState, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  return useContext(LoginContext);
};
