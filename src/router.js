import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { registerApp, routerConfig as config} from './router.config';

const {

	IndexPage,
	UserRouter,

} = config;


function RouterConfig({ history, app }) {
  
  registerApp(app);

  return (

    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/users" component={UserRouter} />
      
        //...
      </Switch>
    </Router>
  	
  );
}

export default RouterConfig;
