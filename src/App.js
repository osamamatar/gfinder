import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar.js";
import About from "./components/pages/About";
import User from "./components/users/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <GithubState>
          <AlertState>
            <Router>
              <Navbar />
              <div className='container'>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route
                    exact
                    path='/user/:login'
                    render={(props) => <User {...props} />}
                  />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </Router>
          </AlertState>
        </GithubState>
      </div>
    );
  }
}

export default App;
