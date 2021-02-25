import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <p>It seems like your requested page does not exist!</p>
      <Link to="/">
        <Button>Go to the home page</Button>
      </Link>
    </div>
  );
}
