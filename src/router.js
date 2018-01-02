import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { registerApp, routerConfig as config} from './router.config';
import NoMatch from './components/NoMatch';
import Employe from './routes/Employe';


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
        <Route path="/employe" component={Employe} />


        //...
        <Route component={NoMatch}/>
      </Switch>
    </Router>
  	
  );
}

export default RouterConfig;
