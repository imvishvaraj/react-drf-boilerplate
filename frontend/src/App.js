// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user-details" component={UserDetails} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
