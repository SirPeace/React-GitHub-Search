import React from "react";
import { Card, Col, Row, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import Repos from "../components/Repos";
import { githubContext } from "../contexts/Github/githubContext";

export default function Profile({ match }) {
  const { fetchUser, fetchRepos, loading, user } = React.useContext(
    githubContext
  );
  const urlName = match.params.name;

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    // error,
    created_at,
  } = user;

  React.useEffect(() => {
    fetchUser(urlName);
    fetchRepos(urlName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <p>Loading...</p>;

  const registeredFor =
    new Date().getFullYear() - new Date(created_at).getFullYear();

  const page = loading ? (
    <p>Loading...</p>
  ) : (
    <React.Fragment>
      <Card className="my-3">
        <Card.Body>
          <Row>
            <Col md="12" className="mb-2">
              <h4>
                <a href={html_url} target="_blank" rel="noreferrer">
                  {login}
                </a>{" "}
                ({name || "Name not stated"})
              </h4>
            </Col>

            <Col md="4">
              <a href={html_url} target="_blank" rel="noreferrer">
                <img
                  src={avatar_url}
                  alt={login + " avatar"}
                  className={"w-100 mb-4"}
                />
              </a>
              <p className="mb-2">
                <i>Location: {location || "not stated"}</i>
              </p>
              <p className="mb-2">
                <i>Company: {company || "not stated"}</i>
              </p>
              <p className="mb-2">
                <i>
                  Blog:{" "}
                  {blog ? (
                    <a href={blog} target="_blank" rel="noreferrer">
                      {blog}
                    </a>
                  ) : (
                    "not stated"
                  )}
                </i>
              </p>
            </Col>

            <Col md="8">
              <p>
                Registered for{" "}
                <b>
                  {registeredFor} year{registeredFor > 1 ? "s" : null}
                </b>
              </p>

              <div className="mb-3">
                <Badge className="mr-1" variant="success">
                  Followers count: {followers}
                </Badge>
                <Badge className="mr-1" variant="warning">
                  Following count: {following}
                </Badge>
                <Badge className="mr-1" variant="primary">
                  Repos count: {public_repos}
                </Badge>
                <Badge variant="info">Gists count: {public_gists}</Badge>
              </div>

              <h5>Biography:</h5>
              <p>{bio || "No biograpy provided"}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Repos />
    </React.Fragment>
  );

  return (
    <div>
      <Link to="/">To home page</Link>

      {page}
    </div>
  );
}
