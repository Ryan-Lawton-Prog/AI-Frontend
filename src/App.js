import './App.css';
import React from 'react';
import Root from "./containers/Root/Root";
import Login from "./containers/Login/Login";
import CreateAccount from "./containers/CreateAccount/CreateAccount";

import PrivateRoute from './helpers/PrivateRoute'
import Dashboard from "./containers/Dashboard/Dashboard";

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
          <Route path="/" exact component={Root}/>
          <Route path="/login" component={Login}/>
          <Route path="/createAccount" component={CreateAccount}/>

          <PrivateRoute path='/dashboard' component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
