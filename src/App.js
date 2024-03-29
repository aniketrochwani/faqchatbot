import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route}from "react-router-dom";
import Client from "./components/client/client";
import Admin from "./components/Admin/Admin";

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component = {Client} />
      <Route path = "/admin" exact component = {Admin} /> 
      </Switch>
    </Router>
  );
}

export default App;
