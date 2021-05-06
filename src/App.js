import './App.css';
import React from 'react';
import Home from "./containers/Home";
import Login from "./containers/Login";
import CreateAccount from "./containers/CreateAccount";

import PrivateRoute from './helpers/PrivateRoute'
import Dashboard from "./containers/Dashboard";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/createAccount" component={CreateAccount}/>

          <PrivateRoute authed={localStorage.getItem('user')} path='/dashboard' component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
