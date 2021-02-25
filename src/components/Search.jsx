import React from "react";
import { Form } from "react-bootstrap";
import AlertContext from "../contexts/Alert/AlertContext";
import { githubContext } from "../contexts/Github/githubContext";

export default function Search() {
  const [value, setValue] = React.useState("");
  const alert = React.useContext(AlertContext);
  const { searchUsers } = React.useContext(githubContext);

  const onSubmit = (event) => {
    if (event.key !== "Enter") return;

    if (value.trim()) {
      alert.hide();
      searchUsers(value.trim());
    } else {
      alert.show(
        "Search warning",
        "Type something in before searching!",
        "warning"
      );
    }

    event.preventDefault();
  };

  return (
    <Form>
      <Form.Control
        type="text"
        placeholder="Type the user nickname..."
        onKeyPress={onSubmit}
        onChange={(event) => setValue(event.target.value)}
      />
    </Form>
  );
}
