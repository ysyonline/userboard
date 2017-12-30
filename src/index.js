import dva from 'dva';
import createLoading from 'dva-loading';
import {createBrowserHistory} from 'history';
import './index.css';


// 1. Initialize
const app = dva({
	history: createBrowserHistory()
	/*initialState: {
		user: {
			users: [{name:'Mr A', age: 31, id: 'a'},{name:'Mr B', age: 23, id: 'b'}]
		}
	}*/
});

// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
// app.model(require('./models/example'));
app.model(require('./models/user'));
// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
