import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../App.css';

import Home from './Home';

class App extends Component {
  render() {
    return (
      <Switch basename={'/portfolio'}>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
        <Route path={`${process.env.PUBLIC_URL}/about`} component={Home}/>
        <Route path={`${process.env.PUBLIC_URL}/projects/:name`} component={Home}/>
      </Switch>
    );
  }
}

export default App;
