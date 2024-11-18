import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const INIIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const ThemeContext = createContext(INIIAL_STATE);

export const ThemeProvider = ({ children }) => {
  const url = "http://localhost:5000/api";
  const [state, dispatch] = useReducer(Reducer, INIIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <ThemeContext.Provider
      value={{
        url,
        user: state.user,
        isFetching: state.isFetching,
        erorr: state.erorr,
        dispatch,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
