import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../App.css';

import Home from './Home';
import Contact from './Contact';
import Project from './Project';
import Skills from './Skills';

class App extends Component {
  render() {
    return (
      <Switch basename={'/'}>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
        <Route path={`${process.env.PUBLIC_URL}/projects/:name`} component={Project}/>
      </Switch>
    );
  }
}

export default App;
