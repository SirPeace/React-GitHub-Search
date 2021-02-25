import React from "react";
import { HIDE_ALERT, SHOW_ALERT } from "../types";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";

export default function AlertState({ children }) {
  const [state, dispatch] = React.useReducer(AlertReducer, null);

  const hide = () => dispatch({ type: HIDE_ALERT });

  const show = (heading, text, variant = "secondary") => {
    dispatch({
      type: SHOW_ALERT,
      payload: {
        heading,
        text,
        variant,
      },
    });
  };

  return (
    <AlertContext.Provider value={{ hide, show, alert: state }}>
      {children}
    </AlertContext.Provider>
  );
}
