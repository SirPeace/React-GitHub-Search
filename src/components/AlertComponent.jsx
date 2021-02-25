import React from "react";
import { Alert } from "react-bootstrap";
import AlertContext from "../contexts/Alert/AlertContext";

export default function AlertComponent() {
  const { hide, alert } = React.useContext(AlertContext);

  if (!alert) return null;

  return (
    <Alert
      className="w-100"
      variant={alert.variant || "secondary"}
      dismissible
      onClose={hide}
    >
      <Alert.Heading style={{ fontSize: 20 }}>{alert.heading}</Alert.Heading>
      <span style={{ fontSize: 14 }}>{alert.text}</span>
    </Alert>
  );
}
