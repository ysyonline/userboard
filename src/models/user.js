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
  	'delete'(state, {payload}){
  		return Object.assign({}, state, {
  			users: state.users.filter(item=>item.id !== payload.id)
  		});
  	}
  },
  effects: {
  	*fetch({data:{page}},{call, put}){
  		console.log(userService);

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
          console.log(queryString.parse(search.replace(/^[?]*(.*)$/, '$1')));
  				dispatch({type:'fetch',  data:queryString.parse(search.replace(/^[?]*(.*)$/, '$1')) });
  			}
  		});

  	}
  },
};
