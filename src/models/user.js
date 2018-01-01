import * as userService from '../services/userService';

const queryString = require('query-string');

export default {
  namespace: 'user',
  state: {
  	users: [],
    total: null,
    page: null
  },
  reducers: {
  	save(state, {payload: {users, total, page} }){
  		return {...state, users, total, page};
  	},
  	'delete'(state, {payload}){
  		return Object.assign({}, state, {
  			users: state.users.filter(item=>item.id !== payload.id)
  		});
  	}
  },
  effects: {
  	*fetch({data:{page = 1}},{call, put}){
  		const {data:{users, total}} = yield call(userService.query, {page} );
  		console.log(users);
  		yield put({type:'save', payload: {users, total, page:parseInt(page) } });
  	},

  },
  subscriptions: {
  	setup({dispatch, history}){
  		history.listen(location=>{
        const {pathname, search} = location;
  			if(pathname === '/users'){

  				dispatch({type:'fetch',  data:queryString.parse(search.replace(/^[?]*(.*)$/, '$1')) });
  			}
  		});
  	}
  },
};
