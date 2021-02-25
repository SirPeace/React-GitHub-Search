import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function About() {
  const version = process.env.REACT_APP_VERSION;

  return (
    <Jumbotron>
      <h1>Application Version: {version}</h1>
      <img
        width="500px"
        height="330px"
        src="/app_logo.png"
        alt="Application logo"
      />
      <p className="mb-0">
        Application for searching Github users and their repositories via Github
        API
      </p>
    </Jumbotron>
  );
}
