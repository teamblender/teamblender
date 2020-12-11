import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import MojitoPrivacy from "Routes/MojitoPrivacy";
import { Helmet } from "react-helmet";

const RouterComponent = () => {
  return (
    <>
      <Router>
        <Helmet>
          <link
            rel="shortcut icon"
            type="image/png"
            href="https://victorlee917.github.io/blender_2020/favicon.png"
          />
        </Helmet>
        <Switch>
          <Route path="/" exact component={Home} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default RouterComponent;
