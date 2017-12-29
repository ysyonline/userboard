import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

import UserRouter from "./routes/UserRouter.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/user" component={UserRouter} />
      </Switch>
      
    </Router>
  );
}

export default RouterConfig;
