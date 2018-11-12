import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Users from './Users'

import Userinfo from './Userinfo';

class App extends Component {
  render() {
    return (
      <div className="container text-center">
      
          <ul>
            <li><Link to="/All">Se all user</Link></li>
          </ul>
        
       
          <Switch>
            <Route exact={true} path="/All" component={Users} />
            <Route path="/details/:index" component={Userinfo} />
          </Switch>
        
      </div>
    );
  }
}

export default App;
