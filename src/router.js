import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import {injectApp} from './utils/injection';

import NoMatch from './routes/NoMatch';
import Home from './routes/Home';
import Employe from './routes/Employe';
import User from './routes/User';
import Login from './routes/Login';

function RouterConfig({ history, app }) {

  injectApp(app);

  return (

    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Redirect from='/login' to='/'/>
        //添加业务路由组件
        <Route path="/home" component={Home} />
        <Route path="/users" component={User} />
        <Route path="/employe" component={Employe} />


        //默认404返回的页面
        <Route component={NoMatch}/>
      </Switch>
    </Router>
  	
  );
}

export default RouterConfig;
