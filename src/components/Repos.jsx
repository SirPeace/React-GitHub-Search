import React from "react";
import { Card } from "react-bootstrap";
import { githubContext } from "../contexts/Github/githubContext";

export default function Repos() {
  const { repos } = React.useContext(githubContext);

  return (
    <div>
      {repos.map((repo) => (
        <Card className="mb-3 p-3" key={repo.id}>
          <h5>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
          </h5>
          <p className="mb-0">
            {repo.description || "No description provided for the repository"}
          </p>
        </Card>
      ))}
    </div>
  );
}
