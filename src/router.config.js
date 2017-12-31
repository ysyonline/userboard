import Bundle from './utils/Bundle';

const cached = {};

function registerApp (app) {
	cached.app = app;
}

function registerModel(model) {
  if (!cached[model.namespace]) {
    cached.app.model(model);
    cached[model.namespace] = 1;
  }
}

const routerConfig = {

	IndexPage: (props) => {
	    
	    return (
	    	<Bundle load={() => import('./routes/IndexPage')}>
	        	{(IndexPage) => <IndexPage {...props}/>}
	    	</Bundle>
	    )
	},

	UserRouter: (props) => {
		//注册model
		registerModel(require('./models/user'));
		//动态加载
		return (
		    <Bundle load={() => import('./routes/UserRouter')}>
		        {(UserRouter) => <UserRouter {...props}/>}
		    </Bundle>
		)
	}

}

export default { registerApp, routerConfig };