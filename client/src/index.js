import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Authorized from './auth/Authorized';
import Home from './components/Home';
import Private from './components/Private';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/private" component={Authorized(Private)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
