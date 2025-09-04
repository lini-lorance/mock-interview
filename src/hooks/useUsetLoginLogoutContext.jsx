import { createContext, useContext, useEffect, useState } from "react";

const LoginTimeContext = createContext();
export const LoginTimeProvider = ({ children }) => {
  const [date, setDate] = useState({ loginData: null, logoutData: null });

  useEffect(() => {
    if (date.loginData || date.logoutData) {
      sessionStorage.setItem("loginTime", JSON.stringify(date));
    } else {
      const sessionData = sessionStorage.getItem("loginTime");
      if (sessionData) {
        setDate(JSON.parse(sessionData));
      }
    }
  }, [date]);

  const handleSessionStorage = (type) => {
    if (type === "login") {
      const loginTime = new Date().toLocaleString();
      setDate((prev) => ({ ...prev, loginData: loginTime }));
    } else {
      const logoutTime = new Date().toLocaleString();
      setDate((prev) => ({ ...prev, logoutData: logoutTime }));
    }
  };
  return (
    <LoginTimeContext.Provider value={{ handleSessionStorage, date }}>
      {children}
    </LoginTimeContext.Provider>
  );
};
export const useLoginTimeContext = () => {
  return useContext(LoginTimeContext);
};
