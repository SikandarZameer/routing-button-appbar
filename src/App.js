import React from "react";
import "./styles.css";
import { Route, Switch, Link, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Home from "./Home";
import About from "./About";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  active: {
    // fontSize: "15px",
    fontWeight: "bold"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>

      <Button
        color="primary"
        activeClassName={classes.active}
        component={NavLink}
        to="/about"
      >
        About
      </Button>

      <Button
        color="primary"
        activeClassName={classes.active}
        component={NavLink}
        to="/home"
      >
        Home
      </Button>

      {/* <Link to="/">
        <Button> Home </Button>
      </Link>
      <Link to="/about">About</Link> */}

      {/* <Home />
      <About /> */}
    </div>
  );
}
