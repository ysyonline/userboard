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
  		const _state =  {...state, users, total, page};
      return _state;
  	},
  	'delete'(state, {payload: {id} }){
  		return Object.assign({}, state, {
  			users: state.users.filter(item=>item.id !== id)
  		});
  	}
  },
  effects: {
  	*fetch({page},{call, put}){
  		console.log(userService);

  		const {data:{users, total}} = yield call(userService.query, {page} );
  		console.log(users);
  		yield put({type:'save', payload: {users, total, page} });
  	},

  },
  subscriptions: {
  	setup({dispatch, history}){
  		history.listen(location=>{
        const {pathname, search} = location;
  			if(pathname === '/users'){
          console.log(queryString.parse(search.replace(/^[?]*(.*)$/, '$1')));
  				dispatch({type:'fetch', payload: queryString.parse(search.replace(/^[?]*(.*)$/, '$1')) });
  			}
  		});

  	}
  },
};
