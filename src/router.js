import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import {injectApp} from './utils/injection';

import NoMatch from './routes/NoMatch';
import Home from './routes/Home';
import Employe from './routes/Employe';
import User from './routes/User';


function RouterConfig({ history, app }) {

  injectApp(app);

  return (

    <Router history={history}>
      <Switch>
        //添加业务路由组件
        <Route path="/" exact component={Home} />
        <Route path="/users" component={User} />
        <Route path="/employe" component={Employe} />


        //默认404返回的页面
        <Route component={NoMatch}/>
      </Switch>
    </Router>
  	
  );
}

export default RouterConfig;
