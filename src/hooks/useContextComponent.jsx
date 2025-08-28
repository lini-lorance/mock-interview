/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const CounterContext = createContext({
  count: 0,
  increment: () => {},
  decrement: () => {},
  reset: () => {},
});

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c+1);
  const decrement = () => setCount((c) => c-1);
  const reset = () => setCount(0);
  
  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterContext = () => {
  return useContext(CounterContext);
};
