import "./App.scss";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import AlertComponent from "./components/AlertComponent";
import AlertState from "./contexts/Alert/AlertState";
import GithubState from "./contexts/Github/GithubState";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Header />

      <GithubState>
        <AlertState>
          <Container className="p-4">
            <AlertComponent />
            <Switch>
              <Route path="/profile/:name" component={Profile} />
              <Route path="/about" component={About} />
              <Route path="/" exact component={Main} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </AlertState>
      </GithubState>
    </div>
  );
}

export default App;
