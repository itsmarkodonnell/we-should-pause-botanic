import React from "react";
import Amplify, { Auth } from "aws-amplify";
import { Router } from "@reach/router";
import { MapPage } from "./Map";
import { WebcamComponent } from "./Camera";
import awsConfig from "./aws-exports";
Amplify.configure(awsConfig);
Auth.configure({ storage: localStorage });

const App = () => {

  return (
    <Router>
      <MapPage path="/" />
      <WebcamComponent path="/:index" />
    </Router>
  );
};

export default App;
