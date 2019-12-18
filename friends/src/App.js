import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import LoginForm from './components/LoginForm';
import FriendsList from './components/List';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
      <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/friends" component={FriendsList}/>
          <Route path="/login" component={LoginForm}/>
          <Route component={LoginForm}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
