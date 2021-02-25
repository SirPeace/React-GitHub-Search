import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import { githubContext } from "../contexts/Github/githubContext";

export default function Main() {
  const { users } = React.useContext(githubContext);

  return (
    <Row>
      <Col xs={12} className="mb-4">
        <Search />
      </Col>

      {users.map((user, i) => (
        <Col md={4} key={i} className="mb-4">
          <Card>
            <Card.Header>
              <h5 className="mb-0">{user.login}</h5>
            </Card.Header>
            <Card.Body>
              <img
                src={user.avatar_url}
                alt={user.login}
                className="dblock w-100 mb-3"
              />
              <Link to={`/profile/${user.login}`}>
                <Button>Visit profile</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
