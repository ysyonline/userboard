import * as userService from '../services/userService';

const queryString = require('query-string');

export default {
  namespace: 'user',
  state: {
  		users: []
  },
  reducers: {
  	save(state, {payload: {users} }){
  		return Object.assign({}, state, {
  			users
  		});
  	},
  	'delete'(state, {payload: {id} }){
  		return Object.assign({}, state, {
  			users: state.users.filter(item=>item.id !== id)
  		});
  	}
  },
  effects: {
  	*fetch({page = 1},{call, put}){
  		console.log(userService);

  		const {data:{users}} = yield call(userService.query, {page} );
  		console.log(users);
  		yield put({type:'save', payload: {users} });

  	}

  },
  subscriptions: {
  	setup({dispatch, history }){
  		history.listen(location=>{
  			if(location.pathname === '/users'){
  				dispatch({type:'fetch', payload: queryString.parse({page: 1}) });
  			}
  		});

  	}
  },
};
