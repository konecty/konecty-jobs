import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Contact from './containers/Contact';
import NotFound from './containers/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
